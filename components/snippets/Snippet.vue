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
  background: white;
  padding: 2rem;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    font-size: 12px;
  }

  h3 {
    font-size: 16px;
    // font-weight: normal;
    margin-bottom: .5rem;
  }

  h4 {
    font-size: 18px;
    margin-bottom: .25rem;

    a {
      text-decoration: none;
      color: black;
    }
  }

  h5 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 1rem;
  }
}
</style>
