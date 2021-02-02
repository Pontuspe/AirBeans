<template>
  <nav class="container">
    <ul>
      <li v-for="(route,index) in routes"
          :key="index">
          <router-link 
            :to="route.route"
            @click.native="$parent.nav.isActive = false">
            {{route.name}}
            
          </router-link>

          <hr v-if="index != routes.length-1">
          </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      routes:[
        { name:"Meny", route:"/menu"},
        { name:"Vårt kaffe", route:"/about"},
        { name:"Min profil", route:"/profile"},
        { name:"Orderstatus", route:"/status"},
      ]      
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/lists.scss';
</style>