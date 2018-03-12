
<template>
    <div id="example">
        <my-component></my-component>
    </div>
</template>

<script>
    // inscrire
    Vue.component('my-component', {
        template: '<div>Un composant personnalisé !</div>'
    });

    // créer une instance racine
    new Vue({
        el: '#example'
    })
</script>

<style scoped>

</style>