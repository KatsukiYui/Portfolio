<template>

    <div id="projectsContainer">

        <!-- v-for: like for each. need to add an iterator like int i so using the id for that-->
        <div :key="project.id" v-for="project in projects"> <!--elements inside this div will  do the loop-->
            <ProjectShortcut :projectName="project.projectName" :projectIcon="project.projectIcon" :languageIcon="project.languageIcon" :projectLink="project.projectLink"/>
        </div>

        <!-- <ProjectShortcut projectName="Ray Tracer" pictureIcon="ray-tracer" languageIcon="cpp-icon" projectLink="ray-tracer"/>
        <ProjectShortcut projectName="Ray Tracer" pictureIcon="ray-tracer" languageIcon="cpp-icon" projectLink="ray-tracer"/>
        <ProjectShortcut projectName="Ray Tracer" pictureIcon="ray-tracer" languageIcon="cpp-icon" projectLink="ray-tracer"/>
        <ProjectShortcut projectName="Ray Tracer" pictureIcon="ray-tracer" languageIcon="cpp-icon" projectLink="ray-tracer"/> -->
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
},

    data(){
    return {
      projects: [], //to extract from database :3
    }
},
async created(){
            console.log("created called");

            this.projects = await this.fetchProjects();
            console.log(this.projects);
        },

    methods:{   

    // lifecyle method commonly used for HTTP requests to load the data


        async fetchProjects(){

            const res = await fetch('http://localhost:5000/projectsDB');
            const data = await res.json();
            console.log(data);

            return data;
        },

    },
}
</script>

<style scoped>
#projectsContainer{
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