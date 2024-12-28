<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="font-sans antialiased h-screen">
        <div class="h-full bg-gray-100 dark:bg-gray-900">

            <main>
            <div class="hover:(bg-red-400 font-bold) text-center sm:text-left">
              <div class=":uno: text-32px">test 2</div>
            </div>
            </main>
        </div>
    </body>
</html>
