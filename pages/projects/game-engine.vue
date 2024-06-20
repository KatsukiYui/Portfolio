<template>
    <div id="projectContainer">
        <h1 class="projectName">Game Engine</h1>
        <iframe width="860" height="461" src="https://www.youtube.com/embed/vcBWpfqSPFQ" title="Ray Tracer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p class="projectDescription">My game engine made using OpenGL and a sample game I made with it. 
            Supports rendering 3D models and their textures, as well as multiple cameras and audio sources.</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#projectContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10vh;
    gap: 2em;

    padding-bottom: 50px;

}

.projectName{

    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 28;
    color: grey;
}   

</style>

