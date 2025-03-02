@props(['imageId'])
@php
use App\Models\PostImage;
$pid = "imagePreviewId".uniqid();
$image = PostImage::find($imageId);
@endphp

<div
  id="{{$pid}}"
  data-from="imageId{{$image->id}}"
  _="
    init
      measure #imageId{{$image->id}} then
      set :rect to it then
      set :wrapper to #imageWrapperId{{$pid}}
      set :wrapper.style.top to :rect.top + 'px' then
      set :wrapper.style.left to :rect.left + 'px' then
      set :wrapper.style.width to :rect.width + 'px' then
      set :wrapper.style.height to :rect.height + 'px' then
      remove .opacity-0 from :wrapper then
    end
  "
  class="isolate fixed inset-0 z-11 h-dvh w-full"
>
  <div class="fixed inset-0 size-full bg-black opacity-80"></div>
  <button
    type="button"
    class="ph-bold ph-x fixed right-2 top-2 cursor-pointer z-13 p-2 bg-white rounded"
    data-script="on click remove #{{$pid}}"></button>

    <div class="z-12 fixed inset-0 opacity-0" id="imageWrapperId{{$pid}}">
      <img src="{{$image->src}}" >
    </div>

</div>