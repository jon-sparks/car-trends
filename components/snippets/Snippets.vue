<template>
  <section class="snippets">
    <slot></slot>
  </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.snippets {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media(min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media(min-width: 1680px) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
