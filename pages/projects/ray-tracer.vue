<template>
  <div id="projectContainer">
    <h1 class="projectName">Ray Tracer</h1>
    <iframe width="860" height="461" src="https://www.youtube.com/embed/vcBWpfqSPFQ" title="Ray Tracer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p class="projectDescription">A raytracer coded in C++ using Visual Studio, SDL and the GLM library.
      It uses specular and diffuse shading to render 3 spheres. It also applies shadows. </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#projectContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15vh;
  gap: 2em;

  padding-bottom: 50px;

}
</style>

