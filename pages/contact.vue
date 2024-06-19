<template>

  <div id="contactContainer">
    <h2 id="contactMe">Contact Me</h2>
    <form id="contactForm" action="send_email.php" method="post">

      <input class="formInput" type="text" id="contactName" name="name" placeholder="Your Name" required>
      <input class="formInput" type="email" id="contactEmail" name="email" placeholder="Your Email" required>

      <textarea class="formInput" id="subject" name="subject" placeholder="Subject" required></textarea>
      <textarea class="formInput" id="message" name="message" placeholder="Message" required></textarea>

      <input class="formInput" id="submitButton" type="submit" value="Submit">

    </form>

  </div>

</template>

<script>
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
  }
}
</script>

<style>
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

#submitButton:focus{
  background-color: rgb(252, 65, 121);
}

#contactMe{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>