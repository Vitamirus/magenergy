<template>
    <v-app-bar
        app
        clipped-left
    >
        <v-app-bar-nav-icon @click="setDrawer(!drawer)"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: "ContentBar",
        computed: {
            ...mapState(['drawer']),
        },

        methods: {
            ...mapMutations({
                setDrawer: 'SET_DRAWER',
            }),
        },
    }
</script>

<style scoped>

</style>