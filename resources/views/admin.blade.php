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
            @font-face {
        font-family: myFirstFont;
        src: url('/asset/font/KalamehWeb-Medium.woff2') format('woff2'),
            url('/asset/font/KalamehWeb-Medium.woff') format('woff');
        }
/* اعمال فونت سفارشی به تمام تگ‌های HTML */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend, table, caption,
tbody, tfoot, thead, tr, th, td, article, aside,
canvas, details, embed, figure, figcaption, footer,
header, hgroup, menu, nav, output, ruby, section,
summary, time, mark, audio, video {
  font-family: 'myFirstFont', sans-serif;
}

/* اعمال فونت به عناصر ناشناخته HTML5 برای مرورگرهای قدیمی‌تر */
* {
  font-family: 'myFirstFont', sans-serif;
}
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