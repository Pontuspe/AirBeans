<template>
  <div class="container">
    <h1>Meny</h1>
    <ul>

      <li
      v-for="(item, index) in $store.state.menu"
      :key="index"
      >
        <div class="menu-item">
          
          <button 
          class="addBtn"
          :class="{ addBtn : !added, confirmAdd : added && addedItem == index }"
          @click="addToCart(item, index)"
          >
            <div class="add"></div>
          </button>

        <div class="content">
            <div class="top">
              <h3>{{item.title}}</h3>

              <div class="dots"><hr></div>

              <h3 class="price">{{item.price}} kr</h3>
            </div>

            <div class="bottom">
              <p>{{item.desc}}</p>
            </div>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
export default {

  data() { return {
    added : false,
    addedItem : 0,
    
  }},

  methods: {
    addToCart(item, index) {
      this.$store.commit('addItem', item)

      // Below is used for confirmation animation
      this.added = true
      this.addedItem = index

      setTimeout(() => {
        this.added = false
      }, 1000)
    }
  },

  mounted(){
    this.$store.dispatch('getMenu')
  }

}
</script>

<style lang="scss" scoped>
@import '~@/styles/lists.scss';

.container {
  flex-direction: column;
  justify-content: flex-start;

  .menu-item {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    text-align: left;

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-right: 1rem;
      margin-top: 1rem;
      align-self: center;
      justify-self: center;

      .top {
        display: flex;
        justify-content: space-between;

        h3 {
          font-size: 2rem;
          line-height: 1.7rem;
        }

        .dots {
          flex-grow: 2;
          border-bottom: 1px dotted black;
          margin: 0 .5rem;

          hr {
            display: none;
          }

        }

        .price {
          align-self: flex-end;
        }

      }

      .bottom {
        font-size: 1.2rem;
        line-height: 3rem;
        letter-spacing: .2rem;
      }
    }
  }
}

</style>