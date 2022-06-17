<template>
  <footer class="main">
    <div>
      JDM Watch
    </div>
  </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  padding: 1rem 0;
  margin-top: 4rem;
  background: var(--c-dark);
  color: white;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--gradient);
  }
}
</style>
