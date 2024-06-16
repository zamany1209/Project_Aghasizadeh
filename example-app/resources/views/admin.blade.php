<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link href="{{ config('app.url') }}/admin_panel_asset/assets/css/all.min.css" rel="stylesheet" type="text/css" defer>
        <link href="{{ config('app.url') }}/admin_panel_asset/assets/css/sb-admin-2.min.css" rel="stylesheet" async>
        <style>
        .table-responsive {
            max-height: 400px; /* تنظیم حداکثر ارتفاع جدول */
            overflow: auto; /* اسکرول افقی و عمودی */
        }
        .table td, .table th {
            white-space: nowrap; /* جلوگیری از شکستن خطوط درون سلول‌ها */
        }
        </style>
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body>


        @inertia
    <script src="{{ config('app.url') }}/admin_panel_asset/assets/js/jquery.min.js" defer></script>
    <script src="{{ config('app.url') }}/admin_panel_asset/assets/js/bootstrap.bundle.min.js" defer></script>

    <!-- Core plugin JavaScript-->
    <script src="{{ config('app.url') }}/admin_panel_asset/assets/js/jquery.easing.min.js" defer></script>
    </body>


    </html>