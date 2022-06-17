<script setup>
  const props = defineProps({
    title: String,
    subtitle: String,
    value: String,
    url: String,
    info: String,
  })
</script>

<template>
  <section class="snippet">
    <h3>{{ title }}</h3>
    <h5>{{ value }}</h5>
    <h4>
      <a
        v-if="url"
        :href="url"
        :title="subtitle"
        target="_blank"
      >
        {{ subtitle }}
      </a>
      <template v-else>
        {{ subtitle }}
      </template>
    </h4>
    <p>{{ info }}</p>
  </section>
</template>

<style lang="scss" scoped>
.snippet {
  position: relative;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  border-left: solid 5px var(--c-primary);

  p {
    margin: 0;
    font-size: 12px;
  }

  h3 {
    font-size: 22px;
    color: var(--c-primary);
    // margin-bottom: .25rem;
  }

  h4 {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: .25rem;

    a {
      // text-decoration: none;
      text-transform: capitalize;
      color: black;
    }
  }

  h5 {
    font-size: 20px;
    // font-weight: normal;
    margin-bottom: 1rem;
  }
}
</style>
