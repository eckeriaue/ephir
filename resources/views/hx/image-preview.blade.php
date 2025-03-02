@props(['imageId'])
@php
use App\Models\PostImage;
$pid = "imagePreviewId".uniqid();
$image = PostImage::find($imageId);
@endphp

<script type="text/hyperscript">
behavior RemoveImagePreview
  on click
    add .scale-0 to #imageWrapperId{{$pid}} then
    add .opacity-0 to #{{$pid}} then
    wait 150ms then
    remove #{{$pid}}
  end
end
</script>

<div
  id="{{$pid}}"
  tabindex="-1"
  data-from="imageId{{$image->id}}"
  class="isolate fixed inset-0 z-11 h-dvh w-full opacity-0 transition-opacity"
  data-script="
    init
      remove .opacity-0 from me then
      remove .scale-0 from #imageWrapperId{{$pid}} then
      call me.focus()
    end
    on keyup
      if (event.key == 'Escape') then
        add .scale-0 to #imageWrapperId{{$pid}} then
        add .opacity-0 to #{{$pid}} then
        wait 150ms then
        remove #{{$pid}}
      end
    end
  "
>
  <div class="fixed inset-0 size-full bg-black opacity-80" data-script="install RemoveImagePreview"></div>
  <button
    type="button"
    class="ph-bold ph-x fixed right-2 top-2 shadow-sm cursor-pointer z-13 p-2 bg-white rounded"
    data-script="install RemoveImagePreview"></button>

    <div class="z-12 fixed inset-0 overflow-auto h-dvh flex items-center justify-center">
      <div
        class="scale-0 transition-transform duration-300"
        id="imageWrapperId{{$pid}}"
      >
        <img class="p-8" src="{{$image->src}}">
      </div>
    </div>

</div>