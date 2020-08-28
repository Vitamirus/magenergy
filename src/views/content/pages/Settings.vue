<template>
    <v-main
        app
        clipped-left
    >
        <v-switch
                v-model="$vuetify.theme.dark"
                class="ma-0 pa-0"
                color="primary"
                hide-details
              />

    </v-main>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: "ContentBar",
        methods: {
            pivo () {
                console.log(this.$store.state.color)
            }
        },
        watch:{
            color (val) {
                this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'] = val
            },
        },
    }
</script>

<style scoped>

</style>