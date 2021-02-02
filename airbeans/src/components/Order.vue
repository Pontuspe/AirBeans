<template>
    <div class="container">
        <Header 
        class="header"
        @close="close"
        />
        <transition 
        enter-active-class="animated slideInDown">
        <div class="arrow-up" v-if="showArrow"></div>
        </transition>
        <transition 
        enter-active-class="animated slideInDown" 
        leave-active-class="animated slideOutUp">
        <div class="content" v-if="show">
                <h2>Din beställning</h2>
            <div class="content-container">

                <!-- Current order in Local storage -->
                <ul>
                    <li
                    v-for="(item, index) in currentCart"
                    :key="index"
                    >
                        <div class="total">
                            <div class="top">
                                <h3>{{item.title}}</h3>

                                <div class="dots"><hr></div>
                            </div>

                            <div class="bottom">
                                <p>{{item.totalPrice}} kr</p>
                            </div>
                        </div>

                    <div class="price quantity">
                        <p @click="$store.commit('addItem', item)">^</p>
                        <p>{{item.quantity}}</p>
                        <p class="reversed" 
                        @click="$store.commit('removeItem', item)">^</p>
                    </div>
                    
                    </li>

                </ul>

                <div class="total">
                    <div class="top">
                        <h3>Total</h3>

                        <div class="dots"><hr></div>

                        <h3 class="price">{{totalPrice}} kr</h3>
                    </div>

                    <div class="bottom">
                        <p>inkl moms + drönarleverans</p>
                    </div>

                    <button class="black-btn">Take my money!</button>  
                </div>


            </div>
        </div>
        </transition>        
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    data() { return {
        show : false,
        showArrow : false
    }},

    components: { Header },
    computed: {
        currentCart() {
            return this.$store.state.cart
        },
        totalPrice() {
            let sum = 0;
            for(let i = 0; i < this.currentCart.length; i++) {
                sum += this.currentCart[i].totalPrice
            }
            return sum
        }
    },
    methods: {
        close(wantToClose) {
            if(wantToClose) {
                this.show = false
                this.showArrow = false
            }
        }
    },

    mounted() {
        this.show = true

        setTimeout(() => {
            this.showArrow = true
        }, 500)
    }
    
}
</script>

<style lang="scss" scoped>
@import '~@/styles/lists.scss';

    .container {
        flex-direction: column;
        margin: 5%;

        .header {
            top: 0;
        }

        .arrow-up {
            align-self: flex-end;
            margin-right: 2.4%;
            margin-bottom: -.3%;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            
            border-bottom: 8px solid white;
            z-index: 4;
        }

        .content {
            height: 90%;
            width: 100%;
            background-color: white;
            display: flex;
            flex-direction: column;

            h2 {
                align-self: center;
                margin-top: 2rem;
            }

            .content-container {
                height: inherit;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin: 2rem;

    
                ul {
                    li {
                        display: flex;
                        width: 100%;
                        text-align: left;
                        margin: 0 0 3rem 0;

                        h3 {
                            font-size: 1.8rem;
                        }

                        .price {
                            font-weight: 900;

                            .reversed {
                                transform: rotate(180deg);
                            }
                        }
                    }
                }

                button {
                    margin: 2rem;
                }
                }
            }
    }

    .total {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-right: 1rem;
        margin-top: 1rem;
        align-self: center;
        justify-self: center;
    }

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
        font-size: 1rem;
        line-height: 3rem;
    }

    .quantity {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .slideInDown, .slideOutUp {
        animation-duration: .5s;
    }

</style>