<template>
  <section>
    <div id="about">
        <h2>About Me!</h2>
        <p>Software engineer with a passion for games.</p>
        <img src="~/assets/cat.webp" alt="About Image">
        <div class="aboutLinks">
          <a href="https://github.com/KatsukiYui" target="_blank" rel="noopener noreferrer" id="github">
            <img src="~/assets/github-icon.webp" alt="github-icon" class="linkIcon">
          </a>
          <a href="https://www.linkedin.com/in/areej-hassan-3bba69198/" target="_blank" rel="noopener noreferrer" id="linkedin">
            <img src="~/assets/linkedin-icon.webp" alt="linkedin-icon" class="linkIcon">
          </a>
          <a :href="`mailto:${email}`" target="_blank" rel="noopener noreferrer" id="email">
            <img src="~/assets/email-icon.webp" alt="email-icon" class="linkIcon">
          </a>
        </div>
      </div>
  </section>
</template>

<script>

export default {

  head() {
    return {
      title: "Areej Hassan",
      meta:[
        {
          hid: "description",
          name: "description",
          content: ""
        }
      ]
    };
  },

  data() {
    return {
      email: process.env.EMAIL_USER,
    };
  }

}


</script>

<style scoped>

#about{
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */

  display: grid;
  grid-template-columns: auto auto auto;
  grid-auto-columns: 50vw;
  grid-auto-columns: 20vh;

  margin: 25vh 30vw 10vh;
  column-gap: auto;
  row-gap: 0.5em;
  
}

#about h2{
  display: block;
  font-size: 40px;

  grid-column-start: 2;
  grid-row-start: 2;
}

#about p{
  font-size: 18px;

  grid-column-start: 2;
  grid-row-start: 3;
}

#about img{
  
  grid-column-start: 1;
  grid-row: 1 / span 5;

  object-fit: cover;

}

.aboutLinks{
  grid-column-start: 2;
  grid-row-start: 4;

  margin-top: 0.5em;

}

.linkIcon{
  
  width: 30px;
  height: 30px;
  object-fit: cover;

}

</style>

