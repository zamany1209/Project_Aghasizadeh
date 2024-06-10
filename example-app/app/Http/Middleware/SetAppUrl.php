<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Config;

class SetAppUrl
{
    public function handle($request, Closure $next)
    {
        // دریافت دامنه درخواست
        $host = $request->getSchemeAndHttpHost();
        
        // تنظیم APP_URL به صورت پویا
        Config::set('app.url', $host);
        
        return $next($request);
    }
}
