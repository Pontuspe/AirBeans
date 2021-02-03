<template>
  <div class="container">

    <p>Ordernummer <strong>{{currentOrder.orderNumber}}</strong></p>
    <img src="@/assets/drone.svg" alt="" />

    <div>
      <h1>Din beställning är på väg!</h1>
      <h4><strong>{{currentOrder.timeLeft}}</strong> minuter</h4>
    </div>

    <router-link :to="'/'">
      <button class="black-btn">Ok, cool!</button>
    </router-link>
      
  </div>
</template>

<script>
export default {
  computed: {
    currentOrder(){
      return this.$store.state.order
    }
  }
}
</script>

<style lang="scss" scoped>

.container {
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  margin: 2% 15%;
  color: white;

  .black-btn {
    background-color: white;
    color: black;
    font-weight: 800;
    padding-right: 4rem;
    padding-left: 4rem;
  }

  p {
    font-family: var(--Sans-serif-font);
    letter-spacing: .2rem;
  }

  h4 {
    margin-top: 2rem;
    font-weight: 600;
    font-family: var(--Sans-serif-font);
  }
}

</style>