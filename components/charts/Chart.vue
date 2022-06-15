<script setup>
</script>

<template>
  <section class="chart">
    <client-only>
      <slot></slot>
    </client-only>
  </section>
</template>

<style lang="scss" scoped>
.chart {
  padding: 1rem;
  border-radius: 5px;
  overflow: hidden;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>