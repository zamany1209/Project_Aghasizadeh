<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--====== Bootstrap  css ======-->
        <link rel="stylesheet" href="{{ config('app.url') }}/asset/css/bootstrap.min.css">
        <!--====== Style css ======-->
        <link rel="stylesheet" href="{{ config('app.url') }}/assets/css/style.css">
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
    <body style="background-color:#4e73df;">
        @inertia
        <!--====== jquery  ======-->
        <script src="{{ config('app.url') }}/asset/js/bootstrap.bundle.min.js" defer></script>
    </body>
    </html>