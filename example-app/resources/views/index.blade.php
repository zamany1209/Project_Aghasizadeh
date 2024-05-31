<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <!--====== Bootstrap  css ======-->
        <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
        <!--====== Fontaweome css ======-->
        <link rel="stylesheet" href="{{asset('assets/fonts/fontawesome/css/all.css')}}">
        <!--====== Flaticon css ======-->
        <link rel="stylesheet" href="{{asset('assets/fonts/flaticon/flaticon.css')}}">
        <!--====== pe7stroke css ======-->
        <link rel="stylesheet" href="{{asset('assets/fonts/pe7stroke/css/pe-icon-7-stroke.css')}}">
        <!--====== Gilory css ======-->
        <link rel="stylesheet" href="{{asset('assets/fonts/gilory/giloryfont.css')}}">
        <!--====== slick slider css ======-->
        <link rel="stylesheet" href="{{asset('assets/css/slick.css')}}">
        <!--====== magnific-popup css ======-->
        <link rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
        <!--====== nice-select css ======-->
        <link rel="stylesheet" href="{{asset('assets/css/nice-select.css')}}">
        <!--====== Jquery UI css ======-->
        <link rel="stylesheet" href="{{asset('assets/css/jquery-ui.min.css')}}">
        <!--====== animate css ======-->
        <link rel="stylesheet" href="{{asset('assets/css/animate.css')}}">
        <!--====== Default css ======-->
        <link rel="stylesheet" href="{{asset('assets/css/default.css')}}">
        <!--====== Style css ======-->
        <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
        <!--====== Responsive css ======-->
        <link rel="stylesheet" href="{{asset('assets/css/responsive.css')}}">
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
        <style>
        .draggable-list {
            list-style-type: none;
            padding: 0;
        }

        .draggable-item {
            padding: 10px;
            margin: 5px 0;
            background-color: #3498db;
            color: white;
            cursor: grab;
            border-radius: 4px;
        }

        .over {
            border: 2px dashed #2c3e50;
        }

        .nested-list {
            padding-left: 20px;
        }
    </style>
    <body>
                <!--====== Start Preloader ======-->
                <div class="preloader">
            <div class="lds-ellipsis">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div><!--====== End Preloader ======-->
        <!--====== Search From ======-->
		<div class="modal fade" id="search-modal">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <form>
                        <div class="form_group">
                        	<input type="text" class="form_control" placeholder="Search here...">
                        	<button class="search_btn"><i class="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div><!--====== Search From ======-->
        @inertia
        <!--====== jquery  ======-->
        <script src="{{asset('assets/js/vendor/jquery-3.6.0.min.js')}}" defer></script>
        <!--====== Popper js ======-->
        <script src="{{asset('assets/js/popper.min.js')}}" defer></script>
        <!--====== Bootstrap js  ======-->
        <script src="{{asset('assets/js/bootstrap.min.js')}}" defer></script>
        <!--====== slick slider js ======-->
        <script src="{{asset('assets/js/slick.min.js')}}" defer></script>
        <!--====== isotope min.js ======-->
        <script src="{{asset('assets/js/isotope.min.js')}}" defer></script>
        <!--====== imagesloaded min.js ======-->
        <script src="{{asset('assets/js/imagesloaded.min.js')}}" defer></script>
        <!--====== magnific popup js ======-->
        <script src="{{asset('assets/js/jquery.magnific-popup.min.js')}}" defer></script>
        <!--====== counterup js ======-->
        <script src="{{asset('assets/js/jquery.counterup.min.js')}}" defer></script>
        <!--====== waypoints js ======-->
        <script src="{{asset('assets/js/jquery.waypoints.js')}}" defer></script>
        <!--====== nice-number js ======-->
        <script src="{{asset('assets/js/jquery.nice-number.min.js')}}" defer></script>
        <!--====== nice-select js ======-->
        <script src="{{asset('assets/js/jquery.nice-select.min.js')}}" defer></script>
        <!--====== Jquery UI js ======-->
        <script src="{{asset('assets/js/jquery-ui.min.js')}}" defer></script>
        <!--====== wow js ======-->
        <script src="{{asset('assets/js/wow.min.js')}}" defer></script>
        <!--====== custom js ======-->
        <script src="{{asset('assets/js/main.js')}}" defer></script>
    </body>
    </html>