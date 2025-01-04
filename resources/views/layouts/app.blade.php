<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->

        <!-- Scripts -->
        <script defer src="https://cdn.jsdelivr.net/npm/@floating-ui/core@1.6.8"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.12"></script>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="font-sans antialiased">
        <div class="min-h-screen bg-surface">

            <x-nav-header />

            <!-- Page Content -->
            <main class="h-full bg-surface">
                {{ $slot }}
            </main>
        </div>
    </body>
</html>
