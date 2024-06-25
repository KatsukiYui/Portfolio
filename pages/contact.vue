<template>
  <section>
    <div id="contactContainer">

      <div id="headerContainer">
        <h2 id="contactMe">Contact Me</h2>
        <h2 id="submitMessage" v-if="submitMessage !== ''" :style="{color: submitMessageColor}">{{ submitMessage }}</h2>  
      </div>

      <form id="contactForm" @submit.prevent="submitForm">
        <!-- v-model is used to bind form inputs to the formData object in the component's data -->
        <input class="formInput" type="text" id="contactName" name="name" placeholder="Your Name"  v-model="formData.name" required>
        <input class="formInput" type="email" id="contactEmail" name="email" placeholder="Your Email" v-model="formData.email" required>

        <textarea class="formInput" id="subject" name="subject" placeholder="Subject" v-model="formData.subject" required></textarea>
        <textarea class="formInput" id="message" name="message" placeholder="Message" v-model="formData.message"  required></textarea>

        <input class="formInput" id="submitButton" type="submit" value="Submit">

      </form>
    </div>
  </section>
</template>

<script>
import { db } from '~/plugins/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default {
  head() {
    return {
      title: "Contact",
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
    return{
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },

      submitMessage: '',
      submitMessageColor: '',
    }
  },

  methods:{

    async submitForm(){

      try {
        const docRef = await addDoc(collection(db, 'contacts'), this.formData);
        console.log('Document written with ID: ', docRef.id);
        // Optionally, reset the form or show a success message
        //this.formData = { name: '', email: '', subject: '', message: '' };

        this.displaySubmitMessage(true);
      } catch (e) {
        console.error('Error adding document: ', e);

        this.displaySubmitMessage(false);
      }
      
    },

    displaySubmitMessage(success){
      if(success){

        this.submitMessage = "Sent!"
        this.submitMessageColor = "rgb(252, 65, 121)";

      } else{

        this.submitMessage = "Failed to Send..";
        this.submitMessageColor = "red";

      }

    }
  }
}
</script>

<style scoped>
#contactContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 10vh;
  gap: 1em;


}

#contactForm{
  display: flex;
  flex-direction: column;

  gap: 1.5em;

}

.formInput{
  outline:none;
  border: solid grey;
  border-radius: 15px;
  padding: 1em;
}

.formInput:focus{
  border-color: rgb(252, 65, 121);
}

#subject, #contactName{

  height: 50px;
  width: 375px;
}

#message{
  height: 200px;
  width: 375px;
}

#submitButton{
  text-decoration: none;
}

#submitButton:active{
  background-color: rgb(252, 65, 121);
}

#headerContainer{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}

/* #contactMe{
  
} */

#submitMessage{
  padding-left: 1em;
  color:rgb(252, 65, 121);
}
</style>