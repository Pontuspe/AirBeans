<template>
<div class="register">
  <div class="content">

        <div class="text">
          <img src="@/assets/loader.png" alt="" />

          <h1>Välkommen till AirBean-familjen!</h1>

          <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
        </div>

        <div class="form">
          <label for="name"><p>Namn</p></label>
          <input type="text" id="name" v-model="user.name">

          <label for="email"><p>Epost</p></label>
          <input type="text" id="email" v-model="user.email">

        </div>
            <div class="check">
              <div class="round">
                <input type="checkbox" id="checkbox" v-model="user.gdpr" />
                <label for="checkbox"></label>
              </div>
              <p>GDPR Ok!</p>
            </div>


          <button 
          class="black-btn"
          @click="createUser"
          >Brew me a cup!
          </button>

      </div>
    </div>
</template>

<script>
export default {

    props: {
      user : Object
    },

    methods: {
      createUser() {
        localStorage.setItem('user', JSON.stringify(this.user))
        this.$store.commit('setLogin', true)
      }
    }

}
</script>

<style lang="scss" scoped>
.register {
  height: 100%;
  width: 100%;
  background-color: var(--AirBeanPink);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    margin: 0 2rem;

    .form {
      width: 100%;

      label {
        text-align: left;
        margin: 5rem;
      }

      input:nth-of-type(1), input:nth-of-type(2) {
        width: 90%;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 5px;
        border: 1px solid black;
        background: transparent;
      }
    }
    .check {
      margin-top: -5rem;
      display: flex;
      align-self: flex-start;
      align-items: center;

      p {
        margin-left: 1.5rem;
        margin-top: 1rem;
        font-weight: 700;
      }
    }
  }

  .black-btn {
    margin-bottom: -5rem;
    justify-self: flex-end;
    padding-right: 4rem;
    padding-left: 4rem;
  }
}

.round {
  position: relative;
  outline: none;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 2rem;
  left: 0;
  position: absolute;
  top: 0;
  width: 2rem;
  outline: none;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: .5rem;
  left: .4rem;
  opacity: 0;
  position: absolute;
  top: .5rem;
  transform: rotate(-45deg);
  width: 1rem;
  outline: none;
}

.round input[type="checkbox"] {
  visibility: hidden;
  outline: none;
}

.round input[type="checkbox"]:checked + label {
  background-color: #66bb6a;
  border-color: #66bb6a;
  outline: none;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
  outline: none;
}

</style>