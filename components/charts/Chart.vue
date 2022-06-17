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
  position: relative;
  padding: 1rem;
  border-radius: var(--border-radius);
  overflow: hidden;
  background: white;
  box-shadow: var(--box-shadow);
}
</style>