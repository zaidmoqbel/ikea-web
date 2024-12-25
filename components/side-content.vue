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
        <v-btn class="back-button" icon @click="toggleSubmenu(null)" flat><v-icon style="color: black;padding-left: 75px;">mdi-chevron-left</v-icon></v-btn>
        <span style="font-weight: bold;font-size: 1.2rem;margin-left: 26%;">Ürünler</span>
        <ul class="submenu">
          <li v-for="submenuItem in getSubmenuItems(activeSubmenu)" :key="submenuItem.name">
            <router-link :to="submenuItem.path" style="text-decoration: none; color: #111;">{{ submenuItem.name }}</router-link>
          </li>
        </ul>
      </nav>
    </nav>
  </div>
</template>



<script>
export default {
  data() {
    return {
      drawer: false,
      activeSubmenu: null, // Track the currently active submenu
      mainNavItems: [
        {
          name: "Ürünler",
          path: '/',
          hasSubmenu: true,
          submenu: [
            { name: "İNDİRİM", path: '/indirim' },
            { name: "Tüm Mobilyalar", path: '/mobilyalar' },
            { name: "Tüm Aksesuarlar", path: '/aksesuarlar' },
            { name: "Yeni Ürünler", path: '/yeniler' },
            { name: "Çok Satanlar", path: '/cok-satanlar' },
            { name: "Her Eve Lazım", path: '/her-eve-lazim' },
            { name: "Sürdürülebilirlik", path: "/surdurulebilirlik" },
            { name: "En Düşük Fiyat", path: "/en-dusuk-fiyat" },
            { name: "Koleksiyonlar", path: "/koleksiyonlar" },
            { name: "Yılbaşı Dekorasyonu", path: "/yilbasi-dekorasyonu" },
            { name: "Mobilyalar", path: "/mobilyalar" },
            { name: "Depolama & Organizasyon", path: "/depolama-organizasyon" },
            { name: "Yataklar ve Karyolalar", path: "/yataklar-ve-karyolalar" },
            { name: "Ev-Ofis", path: "/ev-ofis" },
            { name: "Bebek & Çocuk", path: "/bebek-cocuk" },
            { name: "Yemek Odası Mobilyaları", path: "/yemek-odasi-mobilyalari" },
            { name: "Dış Mekan Ürünleri", path: "/dis-mekan-urunleri" },
            { name: "Ev Düzenleme", path: "/ev-duzenleme" },
            { name: "Ev Tekstili", path: "/ev-tekstili" },
            { name: "Züccaciye", path: "/zuccaciye" },
            { name: "Dekorasyon", path: "/dekorasyon" },
            { name: "Daha fazla", path: "/daha-fazla" },
          ]
        },
        { name: "Odalar", path: '/odalar', hasSubmenu: false },
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
      this.drawer = false; // Close the drawer
    },
    toggleSubmenu(menuName) {
      this.activeSubmenu = this.activeSubmenu === menuName ? null : menuName;
    },
    getSubmenuItems(menuName) {
      // Get the submenu items for the active menu
      const menuItem = this.mainNavItems.find(item => item.name === menuName);
      return menuItem && menuItem.submenu ? menuItem.submenu : [];
    }
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&display=swap');

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

/* Main Navigation */
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
  padding-top: 20px;
  text-align: left;
  margin-left: 30%;
  font-size: 0.9rem;
  line-height: 25px;
  font-weight: bold;
}

.submenu li {
  padding: 5px 0; /* Add spacing between submenu items */
}

.submenu li:hover {
  background-color: none; /* Highlight submenu items on hover */
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
</style>
