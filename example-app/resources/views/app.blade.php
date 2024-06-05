<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <link href="http://127.0.0.1:8000/admin_panel_asset/assets/css/all.min.css" rel="stylesheet" type="text/css" async>
        <link href="http://127.0.0.1:8000/admin_panel_asset/assets/css/sb-admin-2.min.css" rel="stylesheet" defer>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <style>
        .rtl{
            direction: rtl;
        }
    </style>
    <body class="bg-gradient-primary">
        @inertia

    </body>
    </html>