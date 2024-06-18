<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VisitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $data = [
            ['name' => null, 'type' => 'total_last_week', 'date' => 0, 'value' => 20],
            ['name' => null, 'type' => 'total_last_month', 'date' => 0, 'value' => 23],
            ['name' => null, 'type' => 'total_week', 'date' => 0, 'value' => 20],
            ['name' => null, 'type' => 'total_month', 'date' => 0, 'value' => 23],
            ['name' => 'شنبه', 'type' => 'week_0', 'date' => 1, 'value' => 2],
            ['name' => 'یکشنبه', 'type' => 'week_1', 'date' => 2, 'value' => 0],
            ['name' => 'دوشنبه', 'type' => 'week_2', 'date' => 3, 'value' => 5],
            ['name' => 'سه‌شنبه', 'type' => 'week_3', 'date' => 4, 'value' => 3],
            ['name' => 'چهارشنبه', 'type' => 'week_4', 'date' => 5, 'value' => 0],
            ['name' => 'پنج‌شنبه', 'type' => 'week_5', 'date' => 6, 'value' => 0],
            ['name' => 'جمعه', 'type' => 'week_6', 'date' => 7, 'value' => 10],
            ['name' => 'شنبه', 'type' => 'last_week_0', 'date' => 1, 'value' => 0],
            ['name' => 'یکشنبه', 'type' => 'last_week_1', 'date' => 2, 'value' => 2],
            ['name' => 'دوشنبه', 'type' => 'last_week_2', 'date' => 3, 'value' => 7],
            ['name' => 'سه‌شنبه', 'type' => 'last_week_3', 'date' => 4, 'value' => 3],
            ['name' => 'چهارشنبه', 'type' => 'last_week_4', 'date' => 5, 'value' => 1],
            ['name' => 'پنج‌شنبه', 'type' => 'last_week_5', 'date' => 6, 'value' => 1],
            ['name' => 'جمعه', 'type' => 'last_week_6', 'date' => 7, 'value' => 5],
            ['name' => 'فروردین', 'type' => 'month_0', 'date' => 1403, 'value' => 0],
            ['name' => 'اردیبهشت', 'type' => 'month_1', 'date' => 1403, 'value' => 0],
            ['name' => 'خرداد', 'type' => 'month_2', 'date' => 1403, 'value' => 23],
            ['name' => 'تیر', 'type' => 'month_3', 'date' => 1403, 'value' => 0],
            ['name' => 'مرداد', 'type' => 'month_4', 'date' => 1403, 'value' => 0],
            ['name' => 'شهریور', 'type' => 'month_5', 'date' => 1403, 'value' => 0],
            ['name' => 'مهر', 'type' => 'month_6', 'date' => 1403, 'value' => 0],
            ['name' => 'آبان', 'type' => 'month_7', 'date' => 1403, 'value' => 0],
            ['name' => 'آذر', 'type' => 'month_8', 'date' => 1403, 'value' => 0],
            ['name' => 'دی', 'type' => 'month_9', 'date' => 1403, 'value' => 0],
            ['name' => 'بهمن', 'type' => 'month_10', 'date' => 1403, 'value' => 0],
            ['name' => 'اسفند', 'type' => 'month_11', 'date' => 1403, 'value' => 0],
            ['name' => null, 'type' => 'location_month', 'date' => 0, 'value' => 2],
            ['name' => null, 'type' => 'country_Default', 'date' => 0, 'value' => 1],
            ['name' => null, 'type' => 'country_Iran', 'date' => 0, 'value' => 14],
            ['name' => null, 'type' => 'country_Germany', 'date' => 0, 'value' => 5],
            ['name' => null, 'type' => 'country_United_States', 'date' => 0, 'value' => 3],
            ['name' => null, 'type' => 'region_Tehran', 'date' => 0, 'value' => 10],
            ['name' => null, 'type' => 'region_Mazandaran', 'date' => 0, 'value' => 3],
            ['name' => null, 'type' => 'region_Lorestan_Province', 'date' => 0, 'value' => 1],
        ];

        DB::table('visits')->insert($data);
    }
}
