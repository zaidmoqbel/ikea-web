<template>
  <div class="nav-bar" style="padding: 0;">
    <v-app-bar height="fit-content" absolute style="box-shadow: none;">
      <v-app-bar-nav-icon @click="openCart" location="left" class="menu-drawer" style="left: 50px; top: 15px;" ></v-app-bar-nav-icon>
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
           <router-link to="/"><img src="@/assets/header-imgs/ikea_logo.png.png" alt="ikea logo" /></router-link> 
          </v-col>
          <v-col cols="6">
            <div class="position-relative" style="width: 90%;">
              <input 
                type="search" 
                name="navSearch" 
                id="navSearch" 
                ref="searchInput" 
                class="search-input py-4 px-12"
                placeholder="Ürün Ara"
                @focus="isFocused = true"
                @blur="isFocused = false"
                v-model="searchQuery"   
              />
              <img 
                v-if="!isFocused && !searchQuery"
                src="@/assets/header-imgs/search.png" 
                alt="search icon"
                style="
                    position: absolute;
                    left: 15px;
                    top: 25%;
                    transform: translateY(-50);
                "
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
          <v-col cols="4" class="ps-5">
            <div class="parent d-flex justify-space-evenly align-center">
              <div class="login_signup d-flex login-container">
                <router-link to="/sign-up"> <img class="login-icon" src="@/assets/header-imgs/person.png" alt="" style="cursor: pointer;"/></router-link>
                <router-link to="/sign-up" style="color: black; cursor: pointer;text-decoration: none;">Hej! Giriş Yap veya Üye Ol</router-link>
              </div>
              <div class="wishlists d-flex flex-column align-center" style="cursor: pointer;" @click="openCart">
                <img src="@/assets/header-imgs/heart.png" style="height: 20px; width: 20px;" />
              </div>
              <div class="cart d-flex flex-column align-center" style ="cursor: pointer;">
                <img src="@/assets/header-imgs/shopping-basket.png" style="height: 20px; width: 20px;" />
              </div>                           
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-2">
          <v-col>
            <ul class="links d-flex text-black" style="list-style: none; font-weight: 550;">
              <li style="padding-left: 30px; font-weight:600">Ürünler</li>
              <li style="padding-left: 30px; font-weight:600">Odalar</li>
              <li style="color: green; padding-left: 30px; font-weight:600">Yılbaşı</li>
              <li style="color: orange; padding-left:  30px; font-weight:600">YENİ</li>
              <li style="padding-left: 30px; font-weight:600">İyi Fikirler</li>
            </ul>
          </v-col>
        </v-row>
        <div class="border-line"></div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  inject : ["Emitter"],
  methods: {
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
  },
  data() {
    return {
      searchQuery: '',
      isFocused: false,
      links: [
        { name: 'Size En Yakın IKEA', path: '/' },
        { name: 'Hizmetler', path: '/hizmetler' },
        { name: ' IKEA Aile Kart', path: '/aile-kart' },
        { name: 'IKEA Kurumsal Satış', path: '/kurumsal-satis' },
        { name: 'İsveç Restoranı', path: '/restoran' },
        { name: 'Sipariş Takibi', path: '/siparis-takibi' },
        { name: 'Bize Ulaşın', path: '/bize-ulasin' },
        { name: 'Müşteri Memnuniyet Anketi', path: '/memnuniyet-anketi' },
        { name: 'Stok Sorgula', path: '/stok-sorgula' },
        { name: 'İade/Değişim Talebi', path: '/iade-degisim' },
      ],
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&display=swap');

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
  padding: 12px;
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
  display: flex; 
  align-items: center; 
  transition: background-color ; 
  padding: 15px; 
  border-radius: 5px; 
  letter-spacing: 0.5px;
}

.login-container:hover .login-icon {
  background-color: #D3D3D3; 
}

.login-icon {
  border-radius: 50%; 
  padding: 5px; 
  height: 30px; 
  width: 30px; 
}

.wishlists, .cart {
  transition: background-color ; 
  border-radius: 50%; 
  padding: 5px; 
  height: 30px; 
  width: 30px; 
}

.wishlists:hover, .cart:hover {
  background-color: #D3D3D3; 
  border-radius: 50%; 
  padding: 5px;
  display: flex;
  align-items: center; 
}

</style>