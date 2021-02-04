<template>
  <div class="content">

    <div class="top">
        <img src="@/assets/loader.png" alt="" />

        <h1>{{user.name}}</h1>
        <p>{{user.email}}</p>
    </div>

      <div class="orderHistory">
          <h1>Orderhistorik</h1>
          <ul>
              <li
              v-for="(order, index) in user.orderHistory"
              :key="index"
              class="orderItem"
              >
              <div class="orderWrapper">
                  <div class="wrapperTop">
                      <p>#{{order.orderNumber}}</p>
                      <p>{{order.orderDate}}</p>
                  </div>
                  <div class="wrapperBottom">
                      <p>total ordersumma</p>
                      <p>{{order.cart.totalPrice}} kr</p>
                  </div>
              </div>
                <hr class="separator" v-if="index != user.orderHistory.length - 1">
              </li>
              <hr>
              <div class="orderBottom">
                <p><strong>Totalt Spenderat</strong></p>
                <p>{{totalSpendings}} kr</p>
              </div>
          </ul>
      </div>

  </div>
</template>

<script>
export default {
    props: {
        user : Object
    },
    computed:{
        totalSpendings(){
            let totalSpending = 0
            this.user.orderHistory.forEach(x => totalSpending += x.cart.totalPrice)
            return totalSpending
        }
        
    },

}
</script>

<style lang="scss" scoped>
@import '~@/styles/lists.scss';

.content {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    color: white;

    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .orderHistory {
        align-self: flex-start;
        text-align: left;
    }

    .orderWrapper {
        .wrapperTop, .wrapperBottom {
            display: flex;
            justify-content: space-between;
        }
    }
}

.separator {
    width: 100%;
    margin: 1rem 0;
    opacity: .1;
}

.orderBottom {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
}

.orderItem {
    margin: 2rem 0;
}
</style>