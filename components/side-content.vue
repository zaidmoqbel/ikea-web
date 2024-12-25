<template>
  <div class="drawer">
    <nav class="menu-wrapper active">
      <div class="menu-top">
        <img src="@/assets/header-imgs/close.png" alt="close menu icon" class="close-icon" @click="closeDrawer">
        <img src="@/assets/header-imgs/ikea_logo.png.png" alt="ikea logo" class="logo logo-container">
      </div>

      <!-- Main Navigation -->
      <nav v-if="!activeSubmenu" class="menu-nav py-4">
        <ul class="main-nav">
          <li v-for="item in mainNavItems" :key="item.name" @click="toggleSubmenu(item.name)">
            <span v-if="item.hasSubmenu" style="cursor: pointer">{{ item.name }}</span>
            <router-link v-else :to="item.path" style="text-decoration: none; color: #111;">{{ item.name }}</router-link>
          </li>
        </ul>

        <!-- Second Navigation -->
        <ul v-if="!activeSubmenu" class="second-nav">
          <li v-for="item in secondNavItems" :key="item.name">
            <router-link :to="item.path" style="text-decoration: none; color: #111;">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>

      <!-- Submenu -->
      <nav v-if="activeSubmenu" class="submenu-nav">
  <v-btn class="back-button" text icon @click="toggleSubmenu(null)">
    <v-icon style="color: black; padding-left: 75px;" >mdi-chevron-left</v-icon>
  </v-btn>
  <span style="font-weight: bold; font-size: 1.2rem; margin-left: 21%;">{{ activeSubmenu }}</span>

  <ul v-if="activeSubmenu === 'Ürünler'" class="submenu">
    <li v-for="submenuItem in getSubmenuItems()" :key="submenuItem.name">
      <router-link
        :to="submenuItem.path"
        :style="{
          textDecoration: 'none',
          color: '#111',
          fontWeight: submenuItem.bold ? 'bold' : 'normal',
        }"
      >
        {{ submenuItem.name }}
      </router-link>
    </li>
  </ul>

  <div v-if="activeSubmenu === 'Odalar'" class="submenu-grid">
    <div v-for="submenuItem in getSubmenuItems()" :key="submenuItem.name" class="submenu-item">
      <router-link :to="submenuItem.path" style="text-decoration: none; color: #111;">
        <img :src="submenuItem.image" alt="" class="submenu-image" />
        <p class="submenu-text">{{ submenuItem.name }}</p>
      </router-link>
    </div>
  </div>
</nav>

    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      activeSubmenu: null,
      mainNavItems: [
      { name: "Ürünler", path: "/", hasSubmenu: true },
      { name: "Odalar", path: "/odalar", hasSubmenu: true },
    ],
          urunlerSubmenu: [
            {bold: true , name: "İNDİRİM", path: '/indirim' },
            {bold: true , name: "Tüm Mobilyalar", path: '/mobilyalar' },
            {bold: true , name: "Tüm Aksesuarlar", path: '/aksesuarlar' },
            {bold: true , name: "Yeni Ürünler", path: '/yeniler' },
            {bold: true , name: "Çok Satanlar", path: '/cok-satanlar' },
            {bold: true , name: "Her Eve Lazım", path: '/her-eve-lazim' },
            {bold: true , name: "Sürdürülebilirlik", path: "/surdurulebilirlik" },
            {bold: true , name: "En Düşük Fiyat", path: "/en-dusuk-fiyat" },
            {bold: true , name: "Koleksiyonlar", path: "/koleksiyonlar" },
            {bold:false , name: "Yılbaşı Dekorasyonu", path: "/yilbasi-dekorasyonu" },
            {bold:false , name: "Mobilyalar", path: "/mobilyalar" },
            {bold:false , name: "Depolama & Organizasyon", path: "/depolama-organizasyon" },
            {bold:false , name: "Yataklar ve Karyolalar", path: "/yataklar-ve-karyolalar" },
            {bold:false , name: "Ev-Ofis", path: "/ev-ofis" },
            {bold:false , name: "Bebek & Çocuk", path: "/bebek-cocuk" },
            {bold:false , name: "Yemek Odası Mobilyaları", path: "/yemek-odasi-mobilyalari" },
            {bold:false , name: "Dış Mekan Ürünleri", path: "/dis-mekan-urunleri" },
            {bold:false , name: "Ev Düzenleme", path: "/ev-duzenleme" },
            {bold:false , name: "Ev Tekstili", path: "/ev-tekstili" },
            {bold:false , name: "Züccaciye", path: "/zuccaciye" },
            {bold:false , name: "Dekorasyon", path: "/dekorasyon" },
            {bold:true , name: "Daha fazla", path: "/daha-fazla" },
          ],
        odalarSubmenu:[
          { name: "Yatak Odası", path: "/odalar/yatak-odasi", image: require("@/assets/side-bar-imgs/1.png") },
          { name: "Oturma Odası", path: "/odalar/oturma-odasi", image: require("@/assets/side-bar-imgs/2.png") },
          { name: "Çalışma Odası", path: "/odalar/calisma-odasi", image: require("@/assets/side-bar-imgs/3.png") },
          { name: "Yemek Odası", path: "/odalar/yemek-odasi", image:require( "@/assets/side-bar-imgs/4.png") },
          { name: "Mutfak", path: "/odalar/mutfak", image: require("@/assets/side-bar-imgs/5.png") },
          { name: "Bebek ve Çocuk Odası", path: "/odalar/bebek-cocuk-odasi", image: require("@/assets/side-bar-imgs/6.png") },
          { name: "Banyo", path: "/odalar/bebek-cocuk-odasi", image: require("@/assets/side-bar-imgs/7.png") },
          { name: "Antre ve Ardiye", path: "/odalar/bebek-cocuk-odasi", image: require("@/assets/side-bar-imgs/8.png") },
          { name: "Oyuncu Odası", path: "/odalar/bebek-cocuk-odasi", image: require("@/assets/side-bar-imgs/9.png") },
          { name: "İş yeriniz İçin", path: "/odalar/bebek-cocuk-odasi", image: require("@/assets/side-bar-imgs/10.png") },
        ],
      secondNavItems: [
        { name: "Mağazalarımız", path: "/" },
        { name: "Hizmetler", path: "/" },
        { name: "İyi Fikirler", path: "/" },
        { name: "Evde Güvenlik", path: "/" },
        { name: "Sipariş Takibi", path: "/" },
        { name: "Bize Ulaşın", path: "/bizeulasin" },
        { name: "Müşteri Memnuniyeti Anketi", path: "/" },
        { name: "Sosyal Sorumluluk", path: "/" },
        { name: "IKEA Aile Kart", path: "/" },
        { name: "IKEA Kurumsal Satış", path: "/" },
        { name: "İsveç Restoranı", path: "/restoran" },
      ],
    };
  },
  methods: {
    closeDrawer() {
      this.drawer = false;
    },
    toggleSubmenu(menuName) {
    this.activeSubmenu = this.activeSubmenu === menuName ? null : menuName;
  },
  getSubmenuItems() {
    if (this.activeSubmenu === "Ürünler") {
      return this.urunlerSubmenu;
    } else if (this.activeSubmenu === "Odalar") {
      return this.odalarSubmenu;
    }
    return [];
  },
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&display=swap');

.v-btn:before {
  opacity: 0 !important;
}

.v-ripple__container {
  opacity: 0 !important;
}

.menu-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.menu-top {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
}

.close-icon {
  cursor: pointer;
  width: 13px;
  height: 13px;
  margin-right: auto;
  margin-left: 40px;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.logo {
  width: 96px;
  height: 96px;
  margin-right: 50%;
}

.main-nav {
  list-style-type: none;
  padding: 0;
  margin-left: 30%;
  width: auto;
  display: flex;
  flex-direction: column;
  line-height: 5rem;
  font-size: 2.5rem;
  font-weight: 700;
}

.submenu {
  list-style-type: none;
  padding-top: 40px;
  text-align: left;
  margin-left: 30%;
  font-size: 0.9rem;
  line-height: 25px;
  font-weight: bold;
}

.submenu li {
  padding: 5px 0;
}

.submenu li:hover {
  background-color: none;
  cursor: pointer;
  text-decoration: underline;
}

.second-nav {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-left: 30%;
  padding-top: 35px;
  font-size: 14px;
  font-weight: 200;
  color: #111;
}

.second-nav li {
  text-align: left;
  padding: 6px;
}

.main-nav li:hover, .second-nav li:hover {
  text-decoration: underline;
  cursor: pointer;
}

.submenu-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 20px;
  row-gap: 10px;
}

.submenu-item:nth-child(2n) {
  margin-left: -85px;
}

.submenu-item {
  text-align: left;
  padding-left: 47%;
}

.submenu-image {
  width: 137.5px;
  height: auto;
  border-radius: 0;
}

.submenu-text {
  font-size: 0.9rem;
  margin-bottom: 40px;
  font-weight: normal;
}

.submenu-item:hover {
  text-decoration: underline;
}

.submenu {
  list-style-type: none;
  padding: 0;
  margin-left: 30%;
  font-size: 0.9rem;
  line-height: 25px;
  font-weight: bold;
}

.submenu li {
  padding: 5px 0;
}

.submenu li:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
