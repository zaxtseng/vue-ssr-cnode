<template>
  <ul class="component-nav">
    <li>
      <nuxt-link to="/">
        首页
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/">
        新手入门
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/">
        API
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/">
        关于
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
export default {}
</script>

<style scoped>
.component-nav {
    list-style: none;
    float: right;
    margin: 4px;
}

li {
    display: inline-block;
    padding: 10px 15px;
}
a{
    text-decoration: none;
    color: #ccc;
    font-size: 14px;
    text-shadow: none;
}

</style>
