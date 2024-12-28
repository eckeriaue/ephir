@props(['as' => 'div', 'dropdownId' => "id-" . uniqid()])

<{{ $as }}
    data-script="
    on click
        halt the event then
        toggle .hidden on #{{ $dropdownId }} then
        get wait FloatingUIDOM.computePosition(me, #{{ $dropdownId }})
    end
    "
>
    {{ $target }}
</{{ $as }}>

<div
    class="hidden"
    style="position: fixed"
    id="{{ $dropdownId }}"
    data-script="on click from elsewhere add .hidden to me"
>
    {{ $slot }}
</div>
