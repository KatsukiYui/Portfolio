<template>
  <div id="projectContainer" v-if="project">
    <h1 class="projectName">{{ project.name }}</h1>
    <div class="projectMedia">
      <div v-if="project.mediaLink && project.videoEmbed">
        <iframe width="760" height="361" :src="project.mediaLink" :title="project.name" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div v-else>
        <img id="picture" :src="require(`~/assets/${project.mediaLink}.webp`)" alt="project picture" width="760" height="361" object-fit="cover">
      </div>
    </div>


    <p class="projectDescription">{{ project.description }}</p>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {

  // data() {
  //   return {
  //     project: null
  //   };
  // },

  async created(){

    //this.projectId = this.$route.query.id; // getting the project id from the url

    await this.fetchProjects();

    // console.log(this.project);
  },

  computed:{

    ...mapGetters(['getProject']),

    project() {
      return this.getProject(this.$route.query.id);
    }
  },

  methods:{  

    ...mapActions(['fetchProjects']),

  },

}

</script>

<style scoped>
#projectContainer{
  display: grid;
  grid-template-columns: auto auto auto;
  grid-auto-columns: 50vw;
  grid-auto-columns: 20vh;

  

  margin: 20vh 10vw 10vh;
  column-gap: auto;
  row-gap: 0.5em;

  padding-bottom: 50px;

}

.projectName{

  grid-column-start: 2;
  grid-row-start: 2;

  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 60;
  color: rgb(252, 65, 121);
  text-align: left;

  margin-bottom: 10px;

}

.projectDescription{

  grid-column-start: 2;
  grid-row-start: 3;

  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 21;
  color: rgb(39, 39, 39);
  text-align: left;

  width: 360px;
  max-width: 30vw;
  overflow-wrap: normal;


}

.projectMedia{

  grid-column-start: 1;
  grid-row: 1 / span 5;

}

</style>

