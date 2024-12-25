<template>

  <div class="nav-bar" style="padding: 0;">
    <v-app-bar height="fit-content" absolute style="box-shadow: none; background-color: white !important;">
      <v-app-bar-nav-icon @click="toggleDrawer" location="left" class="menu-drawer" style="left: 50px; bottom:15px" ></v-app-bar-nav-icon>
      <v-container style="padding-top: 10px;">
        <nav class="links_navbar" style="margin-left: 70px;">
          <ul class="links d-flex text-black"
              style="
                list-style: none;
                font-weight: inherit;
                gap: 10px;
                font-size: 12px;
                justify-content: center;
              ">
            <li v-for="link in links" :key="link.name" class="nav-links">
              <router-link :to="link.path"
                style="
                  text-decoration: none;
                  color: grey;
                ">{{ link.name }}</router-link>
            </li>
            <v-row>
              <v-col class="d-flex justify-end">
                <router-link to="/english" style="text-decoration: none; color: #808080">English</router-link>
              </v-col>
            </v-row>
          </ul>
          <div class="border-line"></div>
        </nav>
        <v-row align="center">
          <v-col cols="2">
           <router-link to="/"><img src="@/assets/header-imgs/ikea_logo.png.png" alt="ikea logo" style="padding-left: 40px;" /></router-link>
          </v-col>
          <v-col cols="5">
            <div class="search-input-container" style="width: 90%; position: relative;">
              <input
                type="search"
                name="navSearch"
                id="navSearch"
                ref="searchInput"
                class="search-input"
                placeholder="Ürün Ara"
                @focus="isFocused = true"
                @blur="isFocused = false"
                v-model="searchQuery"
              />
              <img
                v-if="!isFocused && !searchQuery"
                src="@/assets/header-imgs/search.png"
                alt="search icon"
                class="search-icon"
                width="25px"
              />
              <span
                v-if="isFocused || searchQuery"
                @click="clearSearch"
                class="close-icon"
              >
                <img
                  src="@/assets/header-imgs/close.png"
                  alt="close icon"
                  style="width: 11px; height: 11px;"
                  class="close_img"
                />
              </span>
            </div>
          </v-col>
          <v-col cols="5" class="ps-5">
            <div class="parent d-flex justify-space-between align-center">
              <div class=" d-flex align-center" style="cursor: pointer;" @click="openCart">
                <router-link to="/" class="location-text">
                  <v-icon style="color: black">mdi-store</v-icon>
                  <span>İstanbul Anadolu</span>
                </router-link>

              </div>
              <div class="login_signup d-flex login-container">
                <router-link to="/sign-up"> <img class="login-icon" src="@/assets/header-imgs/person.png" alt="" style="cursor: pointer;"/></router-link>
                <router-link to="/sign-up" style="color: black; cursor: pointer;text-decoration: none;">Hej! Giriş Yap / Üye Ol</router-link>
              </div>
              <template v-if="totalItems > 0">
              <div>
                <v-menu
                  v-model="cartMenu"
                  offset-y
                  :close-on-content-click="false"
                  style="z-index: 10;box-shadow: none !important;"
                >
                  <template v-slot:activator="{ on, attrs }" >
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-badge :content="cartItems.length" color="#0047AB">
                        <img src="@/assets/header-imgs/shopping-basket.png" style="height: 20px; width: 20px;" />
                      </v-badge>
                    </v-btn>
                  </template>

                  <v-card style="width: 426px;border: 1px solid #ccc; box-shadow: none; border-radius: 0;" class="custom-cart-card">
                    <v-card-title style="color: #004cbc; font-size: 16px;">Alışveriş Sepeti</v-card-title>
                    <v-card-text style="font-size: 12px; color: #242424;">Sepetinizde toplam<span style="font-weight: bold;background-color: #fcd500;border-radius: 12px;padding-left: 5px;padding-right: 5px;">  {{  cartItems.length }} ürün  </span>vardır.<br>Son eklenen ürün:</v-card-text>
                    <v-divider />
                    <v-list>
                      <v-list-item v-if="cartItems.length > 0" :key="cartItems[0].id">
                        <v-list-item-avatar style="width: 70px;height: 70px;border-radius: 0;">
                          <img :src="cartItems[0].image" alt="product" />
                        </v-list-item-avatar>
                        <v-list-item-content class="content">
                          <v-list-item-title style="font-weight: bold;">{{ cartItems[0].quantity }} adet {{ cartItems[0].title }}</v-list-item-title>
                          <v-list-item-subtitle>{{ cartItems[0].description }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-list-item-title style="font-weight: bold;" class="price">{{ new Intl.NumberFormat('tr-TR').format(cartItems[0].price) }}₺</v-list-item-title>
                          <v-btn icon @click="removeFirstItem" style="color: #0058a3 !important;" class="trash-btn" elevation="0" plain>
                            <v-icon>mdi-trash-can-outline</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                    <v-divider />
                    <v-card-actions>
                      <v-btn block color="#0058a3" @click="goToCart" rounded style="color: white;height: 54px" class="text-none">Sepete Git</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
              </div>
            </template>
            <template v-else>
              <v-btn icon @click="goToCart">
                  <img src="@/assets/header-imgs/shopping-basket.png" style="height: 20px; width: 20px;" />
                </v-btn>
            </template>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-2">
          <v-col>
            <ul class="links d-flex text-black" style="list-style: none; font-weight: 550;">
              <NuxtLink to="/sidebar" style="text-decoration: none;color:black"><li style="padding-left: 30px; font-weight:600">Ürünler</li></NuxtLink>
              <li style="padding-left: 30px; font-weight:600;color:black">Odalar</li>
              <li style="color: red;padding-left: 30px; font-weight:600">Son Günlerim</li>
              <li style="color: green; padding-left: 30px; font-weight:600">Yılbaşı</li>
              <li style="color: orange; padding-left:  30px; font-weight:600">YENİ</li>
              <li style="padding-left: 30px; font-weight:600;color:black">İyi Fikirler</li>
            </ul>
          </v-col>
        </v-row>
        <div class="border-line"></div>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      left
      overlay
      style="transition: transform 0.3s ease-in-out; width: 480px;">
      <v-list>
        <SideContent />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import SideContent from './side-content.vue';

export default {
  computed: {
    cartItems() {
      return this.$store.state.cart.items;
    },
    totalItems() {
      return this.$store.getters['cart/totalItems'];
    },
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    goToCart() {
      this.$router.push('/cart')
    },
    removeFirstItem() {
      if (this.cartItems.length > 0) {
        const firstItemId = this.cartItems[0].id;
        this.$store.dispatch('cart/removeItem', firstItemId);
      }
    },
    removeItem(productId) {
      this.$store.dispatch('cart/removeItem', productId);
    },
    openCart() {
      this.Emitter.emit("openCart");
    },
    clearSearch() {
      this.searchQuery = '';
      this.$refs.searchInput.focus();
      setTimeout(() => {
        this.$refs.searchInput.blur();
      }, 100);
    },
    navigateToAnotherPage() {
      this.$router.push('/sidebar');
    }
  },
  data() {
    return {
      drawer: false,
      cartMenu: false,
      searchQuery: '',
      isFocused: false,
      links: [
        { name: 'Size En Yakın IKEA', path: '/' },
        { name: 'Hizmetler', path: '/hizmetler' },
        { name: ' IKEA Aile Kart', path: '/aile-kart' },
        { name: 'IKEA Kurumsal Satış', path: '/kurumsal-satis' },
        { name: 'İsveç Restoranı', path: '/restoran' },
        { name: 'Sipariş Takibi', path: '/siparis-takibi' },
        { name: 'Bize Ulaşın', path: '/bizeulasin' },
        { name: 'Müşteri Memnuniyet Anketi', path: '/memnuyiet' },
        { name: 'Stok Sorgula', path: '/stok-sorgula' },
        { name: 'İade/Değişim Talebi', path: '/iade-degisim' },
      ],
    };
  }
};
</script>

<style scoped>

.menu-drawer {
  margin-left: 30px;
}

.nav-bar {
  font-family: 'Noto IKEA Latin Regular', sans-serif;
}

.links {
  cursor: pointer;
}

.links :hover {
  text-decoration: underline;
}

.border-line {
  border-bottom: 2px solid #E5E4E2;
  width: 100%;
  margin-top: 10px;
}

.search-input {
  width: 118%;
  border-radius: 30px;
  background-color: #FAF9F6;
  outline: none;
  padding: 12px 12px 12px 45px;
  color: grey;
}

.search-input:hover {
  color: white;
  background-color: #808080;
  transition: 0.3s;
}

.search-input:focus {
  background-color: white;
  border: 2px solid #0047AB;
  color: black;
}

.search-icon {
  position: absolute;
  left: 13px;
  top: 21%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color;
}
.close-icon {
  position: absolute;
  left: 13px;
  top: 21%;
  cursor: pointer;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color;
}

.close-icon:hover {
  background-color: #D3D3D3;
  color: blue;
}

.login-container {
  align-items: center;
  transition: background-color ;
  letter-spacing: 0.5px;
}

.login-container:hover{
  background-color: #D3D3D3;
  border-radius: 25px;
}

.login-icon {
  border-radius: 50%;
  padding: 5px;
  height: 30px;
  width: 30px;
}

.cart {
  transition: background-color ;
  border-radius: 50%;
  width: 30px;
}

.location-text {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  padding: 5px;
}

.location-text:hover {
  background-color: #D3D3D3;
  border-radius: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
}

.v-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.v-list-item-avatar img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.v-list-item {
  align-items: center;
}

.v-btn {
  cursor: pointer;
}

.v-card-actions .v-btn {
  font-weight: bold;
}

.custom-cart-card {
  border: 1px solid #ccc !important;
  box-shadow: none !important;
  border-radius: 0 !important;
}

.trash-btn:hover {
  text-decoration: underline;
  background-color: transparent !important;
  color: #0058a3 !important;
  box-shadow: none !important;
}

.content:hover {
  text-decoration: underline;
  cursor: pointer;
}

.price:hover {
  text-decoration: underline;
  cursor: text;
}

</style>
