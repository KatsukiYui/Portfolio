<template>
    <button class="BaseButton" @click="onClick()" v-bind:to="linkTo" :style="{ background: color, border: borderStyle, fontSize: textSize}">{{ text }}</button>
</template>
  
<script>
export default {
    name: 'Button',

    props:{
        text:{
            type: String,
            default: 'Button Text',
        },

        color: String,
        borderStyle: String,
        textSize: String,
        linkTo: String,
    },
    methods: {
        onClick(){
            
            //this.$emit('btnClick');
            window.location.href = this.linkTo;
            console.log(this.linkTo);

        }
    }
}
</script>

<style scoped>

</style>