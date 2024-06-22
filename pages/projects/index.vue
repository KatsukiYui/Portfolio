<template>

    <div id="projectsContainer">
        <div v-for="project in projects" :key="project.id">
            <ProjectShortcut :projectName="project.name" 
            :projectIcon="project.icon" 
            :languageIcon="project.language === 'c++' ? 'cpp-icon' : project.language === 'c#' ? 'csharp-icon' : ''"
            :projectLink="project.link"
            :projectId="project.id"
            />
        </div>
    </div>

</template>

<script>
// import { db } from '~/plugins/firebase';
// import { collection, getDocs } from 'firebase/firestore';

import { mapGetters, mapActions } from 'vuex';

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

    // lifecyle method commonly used for requests to load the data
    async created(){

        await this.fetchProjects();
    },

    computed:{ // reactive cached properties. common way to manage vuex data

        ...mapGetters(['getProjects']),
        
        projects() {
            return this.getProjects; // projects calls get projects in store
        }
    },

    methods:{  

        ...mapActions(['fetchProjects']), // maps 'fetchProjects' action to a method named 'fetchProjects'

        /* alternatively
          ...mapActions({
        fetchProjects: 'fetchProjects'
        }*/

    },
    
}
</script>

<style scoped>
#projectsContainer{

    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10%;
    padding: 5% 20% 5%;

}
</style>