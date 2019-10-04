<script>
  export let name;
  export let imageUrl;
  export let price;
  export let oldPrice;
</script>

<style>
.product-card {
  padding: 20px;
  box-shadow:
    -1px    0 0 0 #e6e6e6 inset,
       0 -1px 0 0 #e6e6e6 inset,
    -1px -1px 0 0 #e6e6e6,
    -1px    0 0 0 #e6e6e6,
       0 -1px 0 0 #e6e6e6;
  display: flex;
  flex-basis: 100%;
}

.product-card__left {
  position: relative;
  width: 20%;
  margin-right: 20px;
}

.product-card__left:before {
  display: block;
  width: 100%;
  padding-top: 100%;
  content: '';
}

.product-card__image {
  font: 0/0 Arial;
  border: 0;

  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  max-width: 100%;
  max-height: 100%;
  transform: translate(-50%, -50%);
}

.product-card__center {
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
}

.product-card__header {
  font-size: 18px;
  line-height: 24px;
}

.product-card__right {
  width: 20%;
}

.product-card__old-price {
  margin-bottom: 1px;
  font-size: 13px;
  line-height: 16px;
  display: inline-block;
  text-decoration: line-through;
  color: #999;
}

.product-card__main-price {
  color: #202020;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
}
</style>

<div class="product-card">
  <div class="product-card__left">
    <img class="product-card__image" src="{imageUrl}" alt="{name}">
  </div>
  <div class="product-card__center">
    <div class="product-card__header">
      { name }
    </div>
  </div>
  <div class="product-card__right">
    {#if oldPrice !== undefined}
    <div class="product-card__old-price">{ oldPrice }</div>
    {/if}
    <div class="product-card__main-price">{ price }</div>
  </div>
</div>