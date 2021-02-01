<template>
<div class="container">
    <img src="@/assets/intro-graphic-left.svg" alt="Beautiful leafs on the left">
    <img src="@/assets/airbean-landing.svg" alt="AirBean logo and text">
    <img src="@/assets/intro-graphic-right.svg" alt="Beautiful leafs on the right">
</div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.container{
    display: flex;
    img:nth-of-type(){
        height:100%;
    }
}

</style>

<style lang="scss">
body{
    background-color: var(--AirBeanGreen);
}
</style>
