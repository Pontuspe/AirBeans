<template>
  <div class="container">

    <div class="content">
      
      <LoggedIn
      v-if="$store.state.loggedIn"
      :user="getUser"
      />

      <Register
      v-else 
      :user="getUser"
      />
    </div>
  </div>
</template>

<script>
import Register from '@/components/Register'
import LoggedIn from '@/components/LoggedIn'

export default {
components: { Register, LoggedIn },

  computed: {
    getUser(){
      return JSON.parse(localStorage.getItem('user'))
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 7%;

  .content {
    height: 80%;
    width: 90%;
  }
}

</style>