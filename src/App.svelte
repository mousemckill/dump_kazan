<script>
  import productList from "./productList.json";
  import ProductCard from "./ProductCard.svelte";
  import SearchBlock from "./SearchBlock.svelte";
  import PictureModal from "./PictureModal.svelte";

  let searchText = "";
  let items = productList;
  let pictureOpened = false;

  function changeSearchText(e) {
    searchText = e.detail.value;

    items = productList.filter(item =>
      item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
  }
</script>

<style>
  #app {
    width: 60%;
    margin: 0 auto;
  }

  .search-block {
    margin-bottom: 10px;
  }
</style>

<div id="app">
  <SearchBlock
    value={searchText}
    on:changeText={changeSearchText}
    on:selectImage={() => (pictureOpened = true)}
  />
  Найдено {items.length} из {productList.length}

  <hr />

  {#each items as item}
    <ProductCard {...item} />
  {/each}

  {#if pictureOpened}
    <PictureModal
      on:click={() => (pictureOpened = false)}
      on:search={changeSearchText} />
  {/if}
</div>
