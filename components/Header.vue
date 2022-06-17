<template>
  <header class="main">
    <div>
      <h1>JDM WATCH</h1>
    </div>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  padding: 1rem 0;
  margin-bottom: 4rem;
  background: var(--c-dark);
  box-shadow: var(--box-shadow);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--gradient);
  }

  h1 {
    font-size: 38px;
    color: white;
    background: var(--gradient-light);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;
    margin: 0;
    width: max-content;
  }
}
</style>
