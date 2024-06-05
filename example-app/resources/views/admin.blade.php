<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link href="http://127.0.0.1:8000/admin_panel_asset/assets/css/all.min.css" rel="stylesheet" type="text/css" defer>
        <link href="http://127.0.0.1:8000/admin_panel_asset/assets/css/sb-admin-2.min.css" rel="stylesheet" async>
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body>


        @inertia
    <script src="http://127.0.0.1:8000/admin_panel_asset/assets/js/jquery.min.js" defer></script>
    <script src="http://127.0.0.1:8000/admin_panel_asset/assets/js/bootstrap.bundle.min.js" defer></script>

    <!-- Core plugin JavaScript-->
    <script src="http://127.0.0.1:8000/admin_panel_asset/assets/js/jquery.easing.min.js" defer></script>
    </body>


    </html>