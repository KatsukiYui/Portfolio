<template>
  <div id="projectContainer" v-if="project">
    <h1 class="projectName">{{ project.name }}</h1>
    <div class="projectMedia">
      <div v-if="project.mediaLink && project.videoEmbed">
        <iframe id="projectVideo" width="854" height="480" :src="project.mediaLink" :title="project.name" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div v-else>
        <img id="projectPicture" :src="require(`~/assets/${project.mediaLink}.webp`)" alt="project picture" width="854" height="480">
      </div>
    </div>

    <p class="projectDescription" v-html="project.description"></p>

    <div class="projectLinks">

      <BaseButton id="linksBtn" text="more.." @btnClick="openLink" background/>
      <!-- <img id="githubIcon" src="~/assets/github-icon.webp" alt="Github Icon"> -->
    </div>
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

    openLink(){
      // external links to project github etc
      window.open(this.project.externalLink, '_blank');

    }

  },

}

</script>

<style scoped>
#projectContainer{
  display: grid;
  grid-template-columns: auto auto auto;
  grid-auto-columns: 50vw;
  grid-auto-columns: 20vh;

  margin: 10vh 7vw 10vh;
  column-gap: auto;
  row-gap: 0.5em;

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

  width: 400px;
  max-width: 30vw;
  overflow-wrap: normal;


}

.projectMedia{

  grid-column-start: 1;
  grid-row: 1 / span 5;
}

#projectPicture{

  object-fit: cover;
  /* object-position: bottom; */

  border: 4px;
  border-color: rgba(252, 65, 121, 0.519);
  border-style: outset;
  overflow: hidden;
}

#projectVideo
{
  border: 4px;
  border-color: rgba(252, 65, 121, 0.519);
  border-style: outset;
  overflow: hidden;
}

.projectLinks{
  grid-column-start: 2;
  grid-row-start: 4;


}

#linksBtn{
  position: absolute;
  padding: 0.5em 1.5em;
  margin-top: 0.5em;
  border-radius: 10px;
  border: dashed 2px rgb(252, 65, 121);
  background-color: #00000000;

  font-size: 14px;
  font-weight: 500;
  color: black;

  cursor: pointer;
}

#linksBtn:hover{
  background-color: rgba(252, 65, 121, 0.284);
  color: white;

}

#linksBtn:active{
  color: white;
  background-color: rgb(252, 65, 121);
}

/* #githubIcon{
  position:absolute;
  width: 10px;
} */
</style>

