<template>
  <div id="projectContainer">
    <h1 class="projectName">{{ project.name }}</h1>
    <div class="projectMedia">
      <div v-if="project.mediaLink && project.videoEmbed">
        <iframe width="760" height="361" :src="project.mediaLink" :title="project.name" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div v-else-if="project.mediaLink">
        <img id="picture" src="~/assets/game-engine.webp" alt="project picture" width="760" height="361" object-fit="cover">
      </div>
    </div>


    <p class="projectDescription">{{ project.description }}</p>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default {

data(){
  return {
    projectId: String,
    project: {},
  }
},

async created(){

  this.projectId = this.$route.query.id;

  try {

    const doc = (await getDocs(collection(db, 'projects'))).docs.at(this.projectId);

    if (doc.exists) {
      this.project = doc.data() ;
    } else {  
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
  console.log(this.project);
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

