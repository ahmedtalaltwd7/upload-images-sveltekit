<script>
   import { page } from '$app/stores'
    import "../app.css";
  </script>



<div class="navbar bg-base-100">
  <div class="flex-1">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="btn btn-ghost normal-case text-xl" href="/upload">go to upload images</a>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>
  </div>
</div>

  <slot />