<template>
  <div class="component-header">
    <!-- <header-logo /> -->
    <nuxt-link to="/articles/all">
      <img src="~assets/images/node_logo.svg">
    </nuxt-link>
    <header-nav />
  </div>
</template>
<script>
import HeaderNav from './Nav'

export default {
  components: {
    HeaderNav
  }
}
</script>

<style scoped>
  .component-header {
    padding: 5px;
    height: 50px;
    background: #444;
    font-size: 13px;
  }
  img {
    width: 120px;
    margin-left: 50px;
    margin-top: 10px;
  }

</style>