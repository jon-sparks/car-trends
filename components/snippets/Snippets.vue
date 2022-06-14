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
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media(min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
