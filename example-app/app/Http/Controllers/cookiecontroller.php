<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\File;
use Morilog\Jalali\Jalalian;

class cookiecontroller extends Controller
{
    //
    public function check(Request $request) {
        $filePath_list_page = resource_path('data\list-pages.json');
        $filePath_visit_website = resource_path('data\visit-web-site.json');

        $list_pages = json_decode(File::get($filePath_list_page),true);
        $visit_web_site = json_decode(File::get($filePath_visit_website),true);

        $value = $request->cookie('page_' . strval($request->name));
        $jalaliDate = Jalalian::now();
        $year = $jalaliDate->getYear();
        $monthNumber = $jalaliDate->getMonth();
        $dayOfWeek = $jalaliDate->getDayOfWeek();
        $dayOfMonth = $jalaliDate->getDay();
        if ($value) {
            return response()->json(['result' => true]);
        } elseif(isset($list_pages["data"]["page"][$request->name])) {
            if($list_pages["data"]["page"][$request->name]["access"]){

                if($visit_web_site["data"]["week"][$dayOfWeek-1]["date"] != $dayOfMonth){
                    $visit_web_site["data"]["total_week"] = $visit_web_site["data"]["total_week"] - $visit_web_site["data"]["week"][$dayOfWeek-1]["visit"];
                    $visit_web_site["data"]["week"][$dayOfWeek-1]["date"] = $dayOfMonth;
                    $visit_web_site["data"]["week"][$dayOfWeek-1]["visit"] = 0;
                }
                if($visit_web_site["data"]["month"][$monthNumber-1]["year"] != $year){
                    $visit_web_site["data"]["total_month"] = $visit_web_site["data"]["total_month"] - $visit_web_site["data"]["month"][$dayOfWeek-1]["visit"];
                    $visit_web_site["data"]["month"][$dayOfWeek-1]["year"] = $year;
                    $visit_web_site["data"]["month"][$dayOfWeek-1]["visit"] = 0;
                }
                
                $cookie = cookie('page_' . strval($request->name),true, 1440);

                $visit_web_site["data"]["total_week"] = $visit_web_site["data"]["total_week"] + 1;
                $visit_web_site["data"]["total_month"] = $visit_web_site["data"]["total_month"] + 1;
                $list_pages["data"]["page"][$request->name]['visit'] = $list_pages["data"]["page"][$request->name]['visit'] + 1;
                $visit_web_site["data"]["week"][$dayOfWeek-1]["visit"] = $visit_web_site["data"]["week"][$dayOfWeek-1]["visit"] + 1;
                $visit_web_site["data"]["month"][$monthNumber-1]["visit"] = $visit_web_site["data"]["month"][$monthNumber-1]["visit"] + 1;
                $s = $visit_web_site["data"]["week"][$dayOfWeek-1]["day"];

                File::put($filePath_list_page, json_encode($list_pages, JSON_PRETTY_PRINT));
                File::put($filePath_visit_website, json_encode($visit_web_site, JSON_PRETTY_PRINT));
                return response()->json(['result' => $s])->cookie($cookie);
            }
            else{
                return response()->json(['result' => false]);
            }
        }
    }
}
