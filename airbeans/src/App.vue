<template>
  <div id="app">
    <header>
        <button class="btn" @click="navActive = !navActive" :disabled="cartActive"> 

          <div v-if="!navActive" class="navClosed"></div>
          <p v-else class="closeX">X</p>

        </button>
        <button class="btn dark" @click="cartActive = !cartActive" :disabled="navActive" :class="{fadedOut : navActive}">

          <div class="cart"></div>

        </button> 
    </header>

    <router-view />

    <nav v-if="navActive" class="overlay">
      <Nav />
    </nav>

    <div v-if="cartActive" class="cart overlay">
      
    </div>

  </div>
</template>
<script>
import Nav from '@/components/Nav'

export default {

  components: { Nav },

  data(){
    return{
      navActive : false,
      cartActive : false
    }
  }
}
</script>
<style lang="scss">

*, 
*:after, 
*:before {
  margin:0;
  padding:0;
}

html, body, #app {
  width:100%;
  height:100%;
  overflow-x:hidden;
  font-size:10px;
}

:root {
  --AirBeanGreen: #0e927d;
  --AirBeanBrown: #2f2926;
  --AirBeanPink: #f3e4e1;
  --AirBeanOrange: #e5674e;
}

header {
  width:100%;
  position:fixed;
  z-index: 3;
  display: flex;
  justify-content: space-between;
}

.overlay {
position: fixed; 
  width: 100%; 
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.9);
  z-index: 2;
}

.btn {
  height: 5rem;
  width: 5rem;
  border-radius: 100%;
  border: none;
  padding: 1rem;
  margin: 1rem;
  outline: none;

    .navClosed {
      height:100%;
      background-image:url('~@/assets/navicon.svg');
      background-position: center;
      background-size:auto;
      background-repeat: no-repeat;
    }

    &.fadedOut {
      opacity: .1;
    }

    .closeX {
    font-size:2rem;
    color:black;
    }

    &.dark {
      background-color:black;
    }

    .cart {
    height:100%;
    background-image:url('~@/assets/bag.svg');
    background-repeat: no-repeat;
    background-size:auto;
    background-position: center;
    }

}

ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        font-size: 3.7rem;
        text-align: center;
    }
}


</style>
