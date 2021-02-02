<template>
  <div class="container"> 
    <h1>Meny</h1>

    <ul>
      <li
      v-for="(item, index) in menu"
      :key="index"
      >

      <div class="item-container">

        <button class="btn dark">+</button>
        <div class="content">
          <div class="top">
            
            <h3>{{item.title}}</h3>

            <hr class="dots" />

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

  props: {
    //menu : Array
  },
  data() { return {
      menu:[
      {"id":1,"title":"Bryggkaffe","desc":"Bryggd på månadens bönor.","price":39},
      {
        "id":2,
        "title":"Caffè Doppio",
        "desc":"Bryggd på månadens bönor.",
        "price":49
      },
      {"id":3,"title":"Cappuccino","desc":"Bryggd på månadens bönor.","price":49},
      {
        "id":4,
        "title":"Latte Macchiato",
        "desc":"Bryggd på månadens bönor.",
        "price":49
      },
      {
        "id":5,
        "title":"Kaffe Latte",
        "desc":"Bryggd på månadens bönor.",
        "price":54
      },
      {"id":6,"title":"Cortado","desc":"Bryggd på månadens bönor.","price":39}
    ]
  }},

}
</script>

<style lang="scss" scoped>
@import '~@/styles/lists.scss';

.container {
  flex-direction: column;
  justify-content: flex-start;
}

.item-container {
  display: flex;
  align-items: center;

  .btn {
    height: 2rem;
    width: 2rem;
  }

  .content {

    display: flex;
    flex-direction: column;
    text-align: left;

    .top {
      display: flex;

      .dots {
        border-bottom: 1px dotted black;

        hr {
          opacity: 0;
        }
      }

      .price {
        justify-self: flex-end;
      }

    }

  }
}


</style>