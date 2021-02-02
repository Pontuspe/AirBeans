<template>
  <div id="app" :class="setBody()">
    <header>
        <button :disabled="cartActive" class="btn" @click="navActive = !navActive">
          <div v-if="!navActive" class="navClosed"></div>
          <p v-else class="closeX">X</p>
        </button>
        <button :disabled="navActive" class="btn dark" :class="{fadedOut :navActive}" @click="cartActive = !cartActive">
          <div class="cart">
          </div>
        </button>
    </header>
    <router-view :class="{topMargin :$route.path != '/status'}"/>
    <nav v-if="navActive" class="overlay">
        <Nav />
    </nav>
    <div v-if="cartActive" class="cart overlay"></div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  data(){
    return{
      navActive : false,
      cartActive : false
    }
  },
  components:{ Nav},
  methods:{
    setBody(){
      const path = this.$route.path
      return path == '/'        ? 'greenBody' : 
             path == '/status'  ? 'orangeBody' :
             path == '/profile' ? 'darkBody' : 
             'pinkBody'
    }
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
}
.overlay{
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
.fadedOut{
  opacity: .1;
}
.topMargin{
  margin-top:35%;
}
</style>
