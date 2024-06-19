<template>
    <section>
        <div>

        </div>

        <div class="shortcut" @click="openProject">
            
            <h1 id="name">{{projectName}}</h1>
            <img id="picture" :src="require(`~/assets/${projectIcon}.webp`)"  alt="project picture" width="395px" height="300px">
            <img id="language" :src="require(`~/assets//${languageIcon}.webp`)"  alt="project langauge" width="51px" height="57px">

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

    },

    methods:{
        openProject(){
            //add code to open project page
            window.location.href = `/projects/${this.projectLink}`;
        }
    }

}
</script>

<style>
#name{
    padding: 10px;
    background-color: rgb(215, 132, 246);
    color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    border-style: hidden;
    border-radius: 15px;
    width: 270px;

    position: absolute;
    z-index: 1;
    left: 15%;
    top: 2%;

}

#language{
    position: absolute;
    z-index: 1;

    bottom: 1.5%;
    right: 3.5%;
}

.shortcut{
    cursor: pointer;
    position: relative;
}

</style>