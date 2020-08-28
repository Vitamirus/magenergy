<template>
    <v-navigation-drawer v-model="drawer" app clipped>
        <v-list expand nav>
            <template v-for="item in items">
                <router-link to={{ item.to }} tag="button">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>

                    </v-list-item>
                </router-link>
            </template>

<!--            <v-list-item link>-->
<!--                <v-list-item-action>-->
<!--                    <v-icon>mdi-cog</v-icon>-->
<!--                </v-list-item-action>-->
<!--                <v-list-item-content>-->
<!--                    <v-list-item-title><router-link to="/content/settings">Настройки</router-link></v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--            </v-list-item>-->
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "ContentNavigation",
        data: () => ({
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'dashboard',
          to: '/content',
        },
        {
          icon: 'mdi-cog',
          title: 'Настройки',
          to: '/content/settings',
        },
        {
          title: 'rtables',
          icon: 'mdi-clipboard-outline',
          to: '/tables/regular-tables',
        },
        {
          title: 'typography',
          icon: 'mdi-format-font',
          to: '/components/typography',
        },
        {
          title: 'icons',
          icon: 'mdi-chart-bubble',
          to: '/components/icons',
        },
        {
          title: 'google',
          icon: 'mdi-map-marker',
          to: '/maps/google-maps',
        },
        {
          title: 'notifications',
          icon: 'mdi-bell',
          to: '/components/notifications',
        },
      ],
    }),
        computed: {
            drawer: {
                get () {
                    return this.$store.state.drawer
                },
                set (val) {
                    this.$store.commit('SET_DRAWER', val)
                },
            },
        }
    }
</script>

<style scoped>

</style>