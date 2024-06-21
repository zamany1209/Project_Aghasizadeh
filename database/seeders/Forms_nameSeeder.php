<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Forms_name;
class Forms_nameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $data = (object) [
            'data' => [["get Email","email"],["name","text"],["phone","number"]]
        ];
        Forms_name::create([
            'url' => "9e05-3dc6-4d5f-8eb8-d609514fe496",
            'name' => "ثبت نام",
            'title' => "عنوان",
            'json_data' => json_encode($data)
        ]);
    }
}
