import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overlays : [
      { name: "nav", isActive : false },
      { name: "cart", isActive : false }
    ],
    order : {},
    loggedIn : false
  },

  mutations: {
    activateOverlay(state, name) {
      let overlay = state.overlays.find(x => x.name == name)
      overlay.isActive = !overlay.isActive
    },

    addItem(state, item) {

      let cart = state.order.cart

      // Add the item and update the cart
      if(cart.filter(x => x.title == item.title).length == 0) {
        // If the item does not exist in the cart, add it with a quantity of 1
        item.quantity = 1
        item.totalPrice = item.price
        cart.push(item)
        sessionStorage.setItem('order', JSON.stringify(state.order))
      }
      else {
        let cartItem = cart.filter(x => x.title == item.title)[0]

        // If it already exists in the cart, increase the quantity and set the price
        cartItem.quantity++
        cartItem.totalPrice = (cartItem.quantity * cartItem.price)
        sessionStorage.setItem('order', JSON.stringify(state.order))
      }

      // Update the cart in state
      state.order = JSON.parse(sessionStorage.getItem('order'))
    },

    removeItem(state, item) {

      // Get the cart
      let cart = state.order.cart

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
      sessionStorage.setItem('order', JSON.stringify(state.order))
      state.order = JSON.parse(sessionStorage.getItem('order'))
    },

    setLogin(state, value) {
      state.loggedIn = value
    }
  },
  actions: {
  },
  modules: {
  }
})
