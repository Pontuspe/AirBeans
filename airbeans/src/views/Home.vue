<template>
<div class="container">   
</div>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
.container{
    height:100%;
    display: flex;
    justify-content: space-between;
    object-fit: cover;
}

</style>

<style lang="scss">
body{
    background-color: var(--AirBeanGreen);
    background-image: url('~@/assets/intro-graphic-left.svg'),url('~@/assets/airbean-landing.svg'), url('~@/assets/intro-graphic-right.svg');
    background-position: left top, center, right top;
    background-repeat: no-repeat;
    background-size: contain, auto, contain;
}
</style>
