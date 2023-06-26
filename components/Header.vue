<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {}
</script>

<template>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <nuxt-link class="nav-link active" aria-current="page" to="/">Home</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link active" aria-current="page"
                 to="/app">Todo
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped>

</style>
