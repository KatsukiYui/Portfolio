<template>

    <div id="projectsContainer">

        <!-- v-for: like for each. need to add an iterator like int i so using the id for that-->
        <div v-for="project in projects" :key="project.id"> <!--elements inside this div will  do the loop-->
            <ProjectShortcut :projectName="project.name" 
            :projectIcon="project.icon" 
            :languageIcon="project.language === 'c++' ? 'cpp-icon' : project.language === 'c#' ? 'csharp-icon' : ''"
            :projectLink="project.link"
            :projectId="project.id"
            />
        </div>

        <!-- <ProjectShortcut projectName="Ray Tracer" pictureIcon="ray-tracer" languageIcon="cpp-icon" projectLink="ray-tracer"/>
        <ProjectShortcut projectName="Ray Tracer" pictureIcon="ray-tracer" languageIcon="cpp-icon" projectLink="ray-tracer"/>
        <ProjectShortcut projectName="Ray Tracer" pictureIcon="ray-tracer" languageIcon="cpp-icon" projectLink="ray-tracer"/>
        <ProjectShortcut projectName="Ray Tracer" pictureIcon="ray-tracer" languageIcon="cpp-icon" projectLink="ray-tracer"/> -->
    </div>

</template>

<script>
import { db } from '~/plugins/firebase';
import { collection, getDocs } from 'firebase/firestore';

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
// lifecyle method commonly used for HTTP requests to load the data
async created(){

    // this.projects = await this.fetchProjects();

    const querySnapshot = await getDocs(collection(db, 'projects'));
    this.projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));


    // console.log(this.projects);
},

    methods:{   



        async fetchProjects(){

            // const res = await fetch('http://localhost:5000/projectsDB');
            // const data = await res.json();

            //console.log(data);
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