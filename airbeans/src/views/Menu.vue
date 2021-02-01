<template>
  <div class="container">
    <h1>Meny</h1>
    <ul>

      <li
      v-for="(item, index) in menu"
      :key="index"
      >
        <div class="menu-item">

          <button class="add-btn"><div class="add"></div></button>

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
    menu : [{"id":1,"title":"Bryggkaffe","desc":"Bryggd på månadens bönor.","price":39}]
  }}

}
</script>

<style lang="scss">
body {
  background-color: var(--AirBeanPink);
  background-image: url('~@/assets/graphics-header.svg'), url('~@/assets/graphics-footer.svg');
  background-position: top center, bottom center;
  background-repeat: no-repeat;
  background-size: contain;
}

.container {
  display: flex;
  flex-direction: column;

  h1 {
    align-self: center;
    font-size: 3.5rem;
    margin-top: 35%;
  }

  .menu-item {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    text-align: left;

    .add-btn {
      background-color: black;
      background-image: url('~@/assets/add.svg');
      background-position: center;
      background-size: 1.8rem;
      background-repeat: no-repeat;
      padding: 1.5rem;
      margin: 1rem;
      border-radius: 100%;
      border: none;
      outline: none;
    }

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