import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overlays : [
      { name: "nav", isActive : false },
      { name: "cart", isActive : false }
    ],
    order : {},
    loggedIn : false,
    orderHistoy : {},
    menu : []
  },

  mutations: {
    getMenu(state,menu){
      state.menu = menu
    },

    createNewOrder(state){
      // Creates a empty order
      let order = {}
      order.cart = {}
      order.cart.cartItems = []
      order.cart.totalPrice = 0
      order.orderNumber = Math.floor(Math.random()* 51)
     
      
      // sets the order to state and sessionstorage
      state.order = order
      sessionStorage.setItem('order', JSON.stringify(order))
    },
    activateOverlay(state, name) {
      let overlay = state.overlays.find(x => x.name == name)
      overlay.isActive = !overlay.isActive
    },

    addItem(state, item) {

      let cartItems = state.order.cart.cartItems

      // Add the item and update the cart
      if(cartItems.filter(x => x.title == item.title).length == 0) {
        // If the item does not exist in the cart, add it with a quantity of 1
        item.quantity = 1
        cartItems.totalPrice += item.price
        item.totalPrice = item.price
        cartItems.push(item)
      }
      else {
        let cartItem = cartItems.filter(x => x.title == item.title)[0]

        // Reset the price
        cartItems.totalPrice -= cartItem.totalPrice

        // If it already exists in the cart, increase the quantity and set the price
        cartItem.quantity++
        cartItem.totalPrice = (cartItem.quantity * cartItem.price)
        cartItems.totalPrice += cartItem.totalPrice      
      }
      
      // Reset the carts total price
      state.order.cart.totalPrice = 0

      // Set the new total price of the cart
      state.order.cart.cartItems.forEach(x => state.order.cart.totalPrice += x.totalPrice)

      // Set time left of order
      state.order.cart.timeLeft = state.order.cart.cartItems.length + 1

      // Update the cart in state and session storage
      sessionStorage.setItem('order', JSON.stringify(state.order))
      state.order = JSON.parse(sessionStorage.getItem('order'))
    },

    removeItem(state, item) {

      // Get the cart
      let cart = state.order.cart.cartItems

      // Get the item
      let cartItem = cart.filter(x => x.title == item.title)[0]

      // Decrease the quantity and price
      if(cartItem.quantity > 1) {
        cartItem.quantity--
        cartItem.totalPrice = (cartItem.quantity * cartItem.price)
      }

      // If it's the last item, remove it
      else if (cartItem.quantity <= 1) {
        cart.splice(cart.indexOf(cartItem), 1)
      }

      // Update the cart
      state.order.cart.totalPrice -= item.price
      state.order.cart.timeLeft -= 1
      sessionStorage.setItem('order', JSON.stringify(state.order))
      state.order = JSON.parse(sessionStorage.getItem('order'))
    },

    setLogin(state, value) {
      state.loggedIn = value
    }
  },
  actions: {
    async getMenu(context){
     const response = await axios.get('http://localhost:5000/api/beans')
     context.commit('getMenu', response.data.menu)
    }
  },
  modules: {
  }
})
