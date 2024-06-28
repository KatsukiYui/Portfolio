<template>
    <!--specifically for the navigation bar-->
    <BaseButton class="navButton" @btnClick="onClick" :text="text" :linkTo="linkTo" borderStyle="hidden" color="#0000" textSize="18px"/>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {

  props:{
      text: String,
      linkTo: String,
  },

  components: { BaseButton, },

  methods:
  {
    onClick(){

      this.$router.push({ path: this.linkTo});

    }
  }
}
</script>

<style scoped>
.navButton{
    padding: 5px 0px 5px 10px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;

    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgb(30, 30, 30);
    font-weight: 500;
    font-size: 18px;

}

.navButton:hover {
    color: pink;
}
.navButton:focus {
  outline: none;
}

.navButton:active {
  transform: scale(0.98);
}

</style>