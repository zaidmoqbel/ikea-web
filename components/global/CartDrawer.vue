<template>
    <div class="drawer">
        <v-navigation-drawer location="left" temporary v-model="drawer" class="menu-drawer" :width="480">
            <nav class="menu-wrapper active">
                <div class="menu-top">
                    <img src="@/assets/header-imgs/close.png" alt="close menu icon" class="close-icon" @click="closeDrawer"> 
                    <img src="@/assets/header-imgs/ikea_logo.png.png" alt="ikea logo" class="logo logo-container">
                </div>
                <nav class="menu-nav py-4">
                    <ul class="main-nav">
                        <li v-for="item in mainNavItems" :key="item.name">
                            <router-link :to="item.path" style="text-decoration: none; color: #111;">{{ item.name }}</router-link>
                        </li>
                    </ul>
                    <ul class="second-nav">
                        <li v-for="item in secondNavItems" :key="item.name">
                            <router-link :to="item.path" style="text-decoration: none; color: #111;">{{ item.name }}</router-link>
                        </li>
                    </ul>
                </nav>
            </nav>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    inject: ["Emitter"],
    data() {
        return {
            drawer: false,
            mainNavItems: [
                { name: "Ürünler", path: '/'},
                { name: "Odalar", path: '/'},
            ],
            secondNavItems: [
                { name: "Mağazalarımız", path: '/'},
                { name: "Hizmetler", path: '/'},
                { name: "İyi Fikirler", path: '/'},
                { name: "Evde Güvenlik", path: '/'},
                { name: "Sipariş Takibi", path: '/'},
                { name: "Bize Ulaşın", path: '/'},
                { name: "Müşteri Memnuniyeti Anketi", path: '/'},
                { name: "Sosyal Sorumluluk", path: '/'},
                { name: "IKEA Aile Kart", path: '/'},
                { name: "IKEA Kurumsal Satış", path: '/'},
                { name: "İsveç Restoranı", path: '/'},
            ]
        };
    },
    mounted() {
        this.Emitter.on("openCart", () => {
            this.drawer = true;
        });
    },
    methods: {
        closeDrawer() {
            this.drawer = false;
        }
    }
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
    margin-left: 50px;
}

.logo-container {
    display: flex;
    justify-content: center;
}

.logo {
    width: 96px;
    height: 96px;
    margin-right: 49%;
}

.main-nav {
    list-style-type: none;
    padding: 0;
    margin-left: 30%;
    width: 10%;
    display: flex;
    flex-direction: column;
    line-height: 70px;
    letter-spacing: 1px;
    font-size: 2.2rem;
    font-weight: 700;
    text-align: left;
}

.second-nav {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    margin-left: 30%;
    padding-top: 35px;
    font-family: 'Noto IKEA Latin Regular', sans-serif;
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