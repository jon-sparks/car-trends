<template>
  <section class="charts">
    <slot></slot>
  </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.charts {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
