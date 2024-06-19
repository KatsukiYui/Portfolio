<template>
<section>
  <div id="about">
      <h2>About Me!</h2>
      <p>Software engineer with a passion for games.</p>
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
  }

}
</script>

<style scoped>

#about{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 35vh;
  
}

#about h2{
  display: block;
  font-size: 40px;
}

#about p{
  font-size: 18px;
}

</style>

