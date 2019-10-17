<template>
  <slot />
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {},
  methods: {}
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<style scoped lang="postcss">

</style>
