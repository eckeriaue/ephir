<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Illuminate\Validation\UnauthorizedException;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {
        return $request->expectsJson() ? null : route('app');
    }

    public function handle(Request $request, callable $next, ...$guards)
    {
        if ($request->expectsJson()) {
            return $next($request);
        }
        throw new UnauthorizedException('надо авторизоваться');
    }
}
