<template>
  <div class="container">

    <p>Ordernummer <strong>{{currentOrder.orderNumber}}</strong></p>
    <img src="@/assets/drone.svg" alt="" />

    <div>
      <h1>Din beställning är på väg!</h1>
      <h4><strong>{{currentOrder.cart.timeLeft}}</strong> minuter</h4>
    </div>

    <router-link :to="'/'">
      <button class="black-btn">Ok, cool!</button>
    </router-link>
      
  </div>
</template>

<script>
export default {

data(){return{
  currentOrder : {
    cart : [],
    orderNumber : 0,
    timeLeft : 0
  }
}},

  mounted(){
      setTimeout(()=> {
        this.currentOrder = JSON.parse(localStorage.getItem('user')).orderHistory[JSON.parse(localStorage.getItem('user')).orderHistory.length -1]
      console.log(JSON.parse(localStorage.getItem('user')))
      },0)
      
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