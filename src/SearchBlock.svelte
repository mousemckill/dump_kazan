<script>
  import { createEventDispatcher } from 'svelte';

  export let value = '';

  const dispatch = createEventDispatcher();

  function changeText (e) {
    dispatch('changeText', {
      value: e.target.value
    })
  }
</script>

<style>
.search-block {
  display: flex;
}

.search-block__input {
  flex-basis: 100%;
}

.search-block__button {
  width: 50px;
  background: #fff;
  cursor: pointer;
}
</style>

<div class="search-block">
  <input class="search-block__input" type="text" bind:value={value} on:input={changeText}>
</div>