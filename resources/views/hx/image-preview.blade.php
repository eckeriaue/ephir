@php($id = "imagePreviewId".uniqid())

<div id="{{$id}}" class="fixed inset-0 z-11 h-dvh w-full">
  <div class="fixed inset-0 size-full bg-black opacity-80"></div>
  <button
    type="button"
    class="ph-bold ph-x fixed right-2 top-2 cursor-pointer z-12 p-2 bg-white rounded"
    data-script="on click remove #{{$id}}"></button>

    <div>
      <img>
    </div>

</div>