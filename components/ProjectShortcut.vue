<template>
    <section>
        <div>

        </div>

        <div class="shortcut" @click="openProject" @mouseover="hover" @mouseleave="unhover">
            
            <h1 id="name" :style="{ color: nameColor }">{{projectName}}</h1>
            <img id="picture" :src="require(`~/assets/${projectIcon}.webp`)"  alt="project picture">
            <img id="language" :src="require(`~/assets/${languageIcon}.webp`)"  alt="project langauge" width="51px" height="57px">

        </div>
    </section>

</template>

<script>


export default {

    props: {
        projectName: String,
        projectIcon: String,
        languageIcon: String,
        projectLink: String,
        projectDescription: String,

        projectId: String,

    },

    data() {
    return {
        nameColor: 'rgb(0, 0, 0)',
    }},

    methods:{
        openProject(){      
            this.$router.push({ path: `/projects/_id`, query: { id: this.projectId }});
        },

        hover(){
            this.nameColor = 'rgb(252, 65, 121)'; 
        },

        unhover(){
            this.nameColor = 'rgb(0, 0, 0)';         
        }
    }
}
</script>

<style scoped>
#name{
    padding: 10px;
    background-color: rgb(215, 132, 246);
    /* color: black; */
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    border: outset rgb(200, 78, 245);
    border-radius: 10px;
    width: 270px;

    position: absolute;
    z-index: 1;
    left: 58px;
    top: -14px;

}

#language{
    position: absolute;
    z-index: 1;

    bottom: 5px;
    right: 20px;
}

#picture{
    
    border: 2px 1px 2px 1px;
    border-color: rgba(252, 65, 121, 0.519);
    border-style: outset;

    width: 395px;
    height: 300px;
    object-fit: cover;

}

.shortcut{
    cursor: pointer;
    position: relative;

}

</style>