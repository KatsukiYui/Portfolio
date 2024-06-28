<template>
    <div class="navbar">
      <NavButton class="navBtn" text="Home" linkTo="/"/>
      <NavButton class="navBtn" text="Projects" linkTo="/projects" />
      <!-- <NavButton text="Contact" linkTo="/contact"/>     -->

    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.navbar {
  border-radius: 15px;

}

.navBtn{
  margin-right: 0.5em;
}

</style>