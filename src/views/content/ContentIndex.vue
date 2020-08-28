<template>
    <v-app id="inspire">

        <ContentNavigation></ContentNavigation>

        <ContentBar></ContentBar>

        <ContentView></ContentView>

        <ContentFooter></ContentFooter>
    </v-app>
</template>

<script>

    export default {
        name: "ContentIndex",
        components: {
            ContentBar: () => import('./components/core/ContentBar'),
            ContentNavigation: () => import('./components/core/ContentNavigation'),
            ContentFooter: () => import('./components/core/ContentFooter'),
            ContentView: () => import('./components/core/ContentView')
        },
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
        }),

    }
</script>

<style scoped>

</style>

