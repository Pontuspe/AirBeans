<template>
  <div id="app" :class="setBody()">

    <header v-if="$route.path != '/status'">
      <Header
      v-if="!cart.isActive" 
      />
    </header>

    <router-view :class="{topMargin :$route.path != '/status'}"/>
    
    <transition 
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    >
      <nav v-if="nav.isActive" class="overlay">
        <Nav />
      </nav>
    </transition>

    <transition 
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    >
      <div v-if="cart.isActive" class="cart overlay">
          <Order />
      </div>
    </transition>

  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Order from '@/components/Order'
import Header from '@/components/Header'

export default {
  data(){ return{
    navActive : false,
    cartActive : false
  }},

  computed: {
      nav() {
          return this.$store.state.overlays.find(x => x.name == 'nav')
      },
      cart() {
          return this.$store.state.overlays.find(x => x.name == 'cart')
      }
  },

  components:{ Nav, Order, Header },

  methods:{
    setBody(){
      const path = this.$route.path
      return path == '/'        ? 'greenBody' : 
             path == '/status'  ? 'orangeBody' :
             path == '/profile' ? 'darkBody' : 
             'pinkBody'
    },

    activateOverlay(item) {
      if(item == 'nav') {
        this.navActive = !this.navActive
      }
      else {
        this.cartActive = !this.cartActive
      }
    },
    createUser(){
    
    // Get the user
    if(!localStorage.getItem('user')) {
      let user = {
        name : "",
        email : "",
        gdpr : false,
        orderHistory : []
      }

      localStorage.setItem('user', JSON.stringify(user))
    }
    else if(JSON.parse(localStorage.getItem('user')).gdpr) {
      this.$store.commit('setLogin', true)
    }
    }
  },

  created() {
    this.createUser()

    // Create a new cart on startup
    this.$store.commit('createNewOrder')
  }
}
</script>
<style lang="scss">
@import '~@/styles/bodies.scss';
@import '~@/styles/buttons.scss';
@import '~@/styles/globals.scss';
@import '~@/styles/text.scss';

header{
  width:100%;
  position:fixed;
  z-index: 3;
  display: flex;
  justify-content: space-between;

  .btn {
    margin: 1rem;
  }
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

.topMargin{
  margin-top:35%;
}

.fadeIn {
  animation-duration: .5s;
}

.fadeOut {
  animation-duration: .3s;
}

</style>
