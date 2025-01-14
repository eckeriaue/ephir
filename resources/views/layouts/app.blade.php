<!DOCTYPE html>
<html
    lang="{{ str_replace('_', '-', app()->getLocale()) }}"
    data-theme="light"
>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Ingbook') }}</title>
        <!-- <link href="virtual:uno.css" rel="stylesheet"> -->
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <!-- Fonts -->
        <script defer src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
        <script defer src="https://unpkg.com/htmx.org@2.0.4"></script>
        @stack('scripts')
        @vite('resources/js/app.js')
        @vite('resources/css/app.css')
    </head>
    <body class="font-sans antialiased"
        data-hx-headers='{&quot;X-CSRF-TOKEN&quot;: &quot;{{ csrf_token() }}&quot;}'
    >
        <div class="min-h-screen bg-surface">

            <x-nav-header />

            <!-- Page Content -->
            <main class="h-full bg-surface">
                {{ $slot }}
            </main>
        </div>
    </body>
</html>
