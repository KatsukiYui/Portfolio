<template>
  <div class="container">
    <AppHeader />
    <nuxt/>
  </div>

</template>

<script>

export default {
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

.container{
  width: 100%;
  min-height: 100vh;
  /* border-top: groove 3.5px rgb(252, 65, 121); */
  border-right: groove 3.5px rgb(252, 65, 121);
  background-color: pink;

}
</style>