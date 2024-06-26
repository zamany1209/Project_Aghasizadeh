<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\File;
use Morilog\Jalali\Jalalian;
use Stevebauman\Location\Facades\Location;
use App\Models\Page;
use App\Models\Visit;

class cookiecontroller extends Controller
{
    //
    public function check(Request $request) {
        if(!$request->name){
            return response()->json(['result' => false],408);
        }
        $listPage = Page::where('url', $request->name)->first();
        $jalaliDate = Jalalian::now();
        $year = $jalaliDate->getYear();
        $monthNumber = $jalaliDate->getMonth();
        $dayOfWeek = $jalaliDate->getDayOfWeek();
        $dayOfMonth = $jalaliDate->getDay();
    
        if ($request->cookie('page_' . strval($request->name))) {
            return response()->json(['result' => true]);
        } elseif ($listPage) {
            if ($listPage->access) {
                $VisitWeek = Visit::where('type', 'week_' . $dayOfWeek)->first();
                $VisitMonth = Visit::where('type', 'month_' . ($monthNumber - 1))->first();
                // $VisitLocationMonth = Visit::where('type', 'location_month')->first();
                $VisitCountryDefault = Visit::where('type', 'country_default')->first();
                $VisitCountryIran = Visit::where('type', 'country_iran')->first();
                $VisitTotalWeek = Visit::where('type', 'total_week')->first();
                $VisitTotalMonth = Visit::where('type', 'total_month')->first();
                $VisitTotalLastWeek = Visit::where('type', 'total_last_week')->first();
                $VisitTotalLastMonth = Visit::where('type', 'total_last_month')->first();
    
                if($VisitWeek->date != $dayOfMonth && $VisitWeek->type == "week_0"){
                    $VisitWeek->value = 0;
                    $VisitWeek->date = $dayOfMonth;
                    $VisitTotalLastWeek->value = $VisitTotalWeek->value;
                    $VisitTotalWeek->value = 0;

                }else if ($VisitWeek->date != $dayOfMonth) {
                    $VisitLastWeek = Visit::where('type', 'last_week_' . $dayOfWeek)->first();
                    $VisitLastWeek->value = $VisitWeek->value;
                    $VisitLastWeek->save();
                    $VisitWeek->date = $dayOfMonth;
                    $VisitWeek->value = 0;
                }

                if($VisitMonth->date != $year && $VisitMonth->type == "month_0"){
                    $VisitMonth->value = 0;
                    $VisitTotalMonth->date = $year;
                    $VisitTotalLastMonth->value = $VisitTotalMonth->value;
                    $VisitTotalMonth->value = 0;
                }
                elseif ($VisitMonth->date != $year) {
                    $VisitTotalMonth->date = $year;
                    $VisitMonth->value = 0;
                }
    
                if ($position = Location::get($request->ip())) {
                    // if ($VisitLocationMonth->value != $monthNumber - 1) {
                    //     $VisitLocationMonth->value = $monthNumber - 1;
                    //     Visit::updateOrCreate(['type' => 'region_tehran'], ['value' => 0]);
                    //     $VisitCountryDefault->value = 0;
                    //     $VisitCountryIran->value = 0;
                    // }
    
                    if ($position->countryName == "Iran") {
                        $VisitCountryIran->value += 1;
                        $regionName = 'region_' . $position->regionName;
                        $regionVisit = Visit::where('type', $regionName)->first();
    
                        if ($regionVisit) {
                            $regionVisit->value += 1;
                        } else {
                            Visit::create(['type' => $regionName, 'value' => 1]);
                        }
                    } else {
                        $countryName = 'country_' . $position->countryName;
                        $countryVisit = Visit::where('type', $countryName)->first();
    
                        if ($countryVisit) {
                            $countryVisit->value += 1;
                        } else {
                            Visit::create(['type' => $countryName, 'value' => 1]);
                        }
                    }
                } else {
                    $VisitCountryDefault->value += 1;
                }
    
                $cookie = cookie('page_' . strval($request->name), true, 1440);
    
                $VisitTotalWeek->value += 1;
                $VisitTotalMonth->value += 1;
                $listPage->visit += 1;
                $VisitWeek->value += 1;
                $VisitMonth->value += 1;
    
                $listPage->save();
                $VisitWeek->save();
                $VisitMonth->save();
                // $VisitLocationMonth->save();
                $VisitCountryDefault->save();
                $VisitCountryIran->save();
                $VisitTotalWeek->save();
                $VisitTotalMonth->save();
    
                return response()->json(['result' => true], 201)->cookie($cookie);
            } else {
                return response()->json(['result' => false]);
            }
        }
    }
    
}
