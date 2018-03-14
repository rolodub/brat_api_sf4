<template>
    <div type="x-template" id="recherche">
    <div>
        <div class="card">
            <img class="card-img-top" src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?dpr=1&auto=compress,format&fit=crop&w=1200&h=600&q=60&cs=tinysrgb&crop=" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <router-link :to="{name: 'nope'}" class="btn btn-primary">Go somewhere</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "rechercher"
    }
</script>

<style scoped>

</style>