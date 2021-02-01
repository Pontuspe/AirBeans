<template>
    <div class="container">
        <ul>
            <li
            v-for="(route, index) in routes"
            :key="index"
            >
            <router-link :to="route.route">{{route.name}}</router-link>
            <hr v-if="index != routes.length - 1">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() { return {
        routes : [
            { name : "Meny", route : "/menu" },
            { name : "Vårt kaffe", route : "/about" },
            { name : "Min profil", route : "/profile" },
            { name : "Orderstatus", route : "/status" },
        ]
    }}
}
</script>

<style lang="scss" scoped>
    .container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        hr {
            margin: 2rem 6rem;
            opacity: .3;
        }

        a {
            color: white;
            text-decoration: none;
        }

        a:hover {
            color: var(--AirBeanPink);
        }
    }
</style>