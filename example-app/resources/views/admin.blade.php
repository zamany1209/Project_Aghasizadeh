<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link href="http://127.0.0.1:8000/admin/assets/css/bootstrap.min.css" rel="stylesheet" />
            <link href="http://127.0.0.1:8000/admin/assets/css/sidebars.css" rel="stylesheet" />
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <style>
      .col-10-5{
        position:relative;width:100%;padding-right:15px;padding-left:15px;
        -ms-flex:0 0 85.333333%;flex:0 0 85.333333%;max-width:85.333333%}
      .col-11-5{
        position:relative;width:100%;padding-right:5px;padding-left:5px;
        -ms-flex:0 0 94.666667%;flex:0 0 94.666667%;max-width:94.666667%}
      .col-0-5{
        position:relative;width:100%;padding-right:5px;padding-left:5px;
        -ms-flex:0 0 2%;flex:0 0 2%;max-width:2%}
      .col-9-5{
        position:relative;width:100%;padding-right:15px;padding-left:15px;
        -ms-flex:0 0 81%;flex:0 0 81%;max-width:81%}
      .col-2-5{
      position:relative;width:100%;padding-right:15px;padding-left:15px;
      -ms-flex:0 0 22%;flex:0 0 22%;max-width:22%}
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }

      .bd-mode-toggle {
        z-index: 1500;
      }

      .bd-mode-toggle .dropdown-menu .active .bi {
        display: block !important;
      }
      .rtl{
        direction: rtl;
      }
    </style>
    <body class="font-sans antialiased">


        @inertia
    <script src="http://127.0.0.1:8000/admin/assets/js/bootstrap.bundle.min.js"></script>

    <script src="http://127.0.0.1:8000/admin/assets/js/sidebars.js"></script>
    </body>


    </html>