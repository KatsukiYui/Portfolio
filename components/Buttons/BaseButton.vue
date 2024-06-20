<template>
    <button class="BaseButton" @click="$emit('btnClick')" :style="{ background: color, border: borderStyle, fontSize: textSize}">{{ text }}</button>
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

    }
}
</script>

<style scoped>

</style>