<template>
  <v-app style="font-family: 'Noto IKEA Latin Regular', sans-serif;'">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <img src="../static/ikea_logo.png" alt="ikea logo" style="margin-left: 80px;">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon style="color: #0058a3;">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />

    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home Page',
          to: '/'
        },
        {
          icon: 'mdi-page-layout-header',
          title: 'Header Bar',
          to: '/navbar'
        },
        {
          icon: 'mdi-page-layout-footer',
          title: 'Footer',
          to: '/footer'
        },
        {
          icon: 'mdi-menu',
          title: 'Side Bar',
          to: '/sidebar'
        },
        {
          icon: 'mdi-login',
          title: 'Giriş Yap',
          to: '/sign-up'
        },
        {
          icon: 'mdi-comment-account-outline',
          title: 'Bize Ulaşın',
          to: '/bizeulasin'
        },
        {
          icon: 'mdi-comment-account-outline',
          title: 'İletişim Formu',
          to: '/İletisimFormu'
        },
        {
          icon: 'mdi-message-alert',
          title: 'Müşteri Memnuniyeti ',
          to: '/memnuyiet'
        },
        {
          icon: 'mdi-sofa',
          title: 'Kanepler ',
          to: '/Kanepler'
        },
        {
          icon: 'mdi-cart',
          title: 'Cart ',
          to: '/cart'
        },
      ],
    }
  }
}
</script>

<style>
@import url(https://db.onlinewebfonts.com/c/2b9a54453c1a3cbc651c0788ade94e4a?family=Noto+IKEA+Latin+Regular);
</style>
