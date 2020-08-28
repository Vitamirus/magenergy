<template>
  <div class="home">
    <NavBar></NavBar>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
      NavBar: () => import('../components/Navbar'),
  },
}
</script>
