<template>

    <div id="projectContainer">
        <ProjectShortcut projectName="Ray Tracer" pictureIcon="ray-tracer" languageIcon="cpp-icon" projectLink="ray-tracer"/>
        <ProjectShortcut projectName="Ray Tracer" pictureIcon="ray-tracer" languageIcon="cpp-icon" projectLink="ray-tracer"/>
        <ProjectShortcut projectName="Ray Tracer" pictureIcon="ray-tracer" languageIcon="cpp-icon" projectLink="ray-tracer"/>
        <ProjectShortcut projectName="Ray Tracer" pictureIcon="ray-tracer" languageIcon="cpp-icon" projectLink="ray-tracer"/>


    </div>

</template>

<script>
export default {
    head() {
    return {
    title: "Projects",
    meta: [
        {
        hid: "description",
        name: "description",
        content: ""
        }
    ]
    };
}
}
</script>

<style scoped>
#projectContainer{
/*     
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 10%; */

    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10%;
    padding: 5% 20% 5%;

}
</style>