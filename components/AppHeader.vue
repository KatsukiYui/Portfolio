<template>
    <div class="header">
        <h1 id="main-title">Areej Hassan</h1>
        <NavBar />
    </div>
  
</template>

<script>
import NavBar from './NavBar.vue'

export default {


}
</script>

<style scoped>

.header{

    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    background-color:rgb(250, 243, 244);
    border-top: groove 3.5px rgb(252, 65, 121);
    padding: 10px 15px;

}

#main-title{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 24px;
    color: grey;
    width:20%;
    float: left;
}

</style>