<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Page;
class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Page::create([
            'url' => "test",
            'name' => "test",
            'access' => 1,
            'visit' => 0,
            'image'=> "/assets/images/head_1.jpg",
            'keywords' => "test",
        ]);
    }
}
