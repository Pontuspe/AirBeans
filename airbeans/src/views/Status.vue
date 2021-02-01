<template>
  <div class="container">

    <div class="top">
      <p>Ordernummer <strong></strong></p>
      <img src="@/assets/drone.svg" alt="" />
      <h1>Din beställning är på väg!</h1>
      <h3>X minuter</h3>  
    </div>

    <div class="cta-container">
      <button class="cta">Ok, cool!</button>   
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

body {
  height: 100%;
  background-color: var(--AirBeanOrange);
  background-image: none;
}

header {
  display: none;
}

.container {
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 1rem;
  }

  .cta-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
}

</style>
