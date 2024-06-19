<template>
    <!--specifically for the navigation bar-->
    <BaseButton class="navButton" @btnClick="$emit('changePage')" :text="text" :linkTo="linkTo" borderStyle="hidden" color="#0000" textSize="18px"/>
</template>

<script>
  import BaseButton from './BaseButton.vue';

export default {

    props:{
        text: String,
        linkTo: String,
    },

    components: { BaseButton, },
}
</script>

<style scoped>
.navButton{
    padding: 5px 0px 5px 10px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;

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