<template>
    <header>

    <!-- Nav button -->
    <button 
    :disabled="cart.isActive" 
    class="btn" 
    @click="activateOverlay('nav')">
        <div v-if="!nav.isActive" class="navClosed"></div>
        <p v-else class="closeX">X</p>
    </button>

    <!-- Cart button -->
    <button
    v-if="$route.path != '/profile'"
    :disabled="nav.isActive" 
    class="btn dark" 
    :class="{fadedOut : nav.isActive}" 
    @click="activateOverlay('cart')">
        <div class="cart"></div>
    </button>

</header>
</template>

<script>
export default {
    computed: {
        nav() {
            return this.$store.state.overlays.find(x => x.name == 'nav')
        },
        cart() {
            return this.$store.state.overlays.find(x => x.name == 'cart')
        }
    },

    methods: {
        activateOverlay(name) {
            if(name == 'cart' && this.cart.isActive) {
                setTimeout(() => {
                    this.$emit('close', this.cart.isActive)
                    setTimeout(() => {
                        this.$store.commit('activateOverlay', name)
                    }, 500)
                }, 0)                
            }
            else {
                this.$store.commit('activateOverlay', name)
            }
        }
    },
}
</script>

<style lang="scss" scoped>

.fadedOut{
  opacity: .1;
}

</style>