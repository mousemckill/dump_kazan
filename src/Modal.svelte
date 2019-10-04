<script>
  export let error = false;
</script>

<style>
  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 600px;
    border: 1px solid #aaa;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    margin: 0 0 1em 0;
    background: #fff;
    transform: translate(-50%, -50%);
  }

  .modal-background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
  }

  .modal.error {
    border-color: #990000;
  }
</style>

<div class="modal-background" on:click></div>
<div class="modal" class:error={error}>
  <slot />
</div>
