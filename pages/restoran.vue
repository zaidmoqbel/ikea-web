<template>

  <div class="page-container">
    <div class="header">
      <h2>IKEA Lezzetleri</h2>
      <p style="padding-top: 35px;font-size: 14px;">IKEA'da; İsveç'in modern lezzetlerini yerli tatlarla birleştirerek güvenilir, düşük fiyatlı ve iştah açıcı birçok seçenek sunuyoruz. İsveç mutfağının ikonik lezzetleri İsveç köftesinden, bademli keke, ızgara somondan sağlık ve sürdürülebilirlik tutkunu sebze köftelerine kadar herkes için birçok farklı önerimiz var. Birbirinden lezzetli yiyeceklerimizi tatmak için sizleri en yakın IKEA mağazasına bekleriz. Mağazalarımızdaki İsveç Restoranı veya İsveç Bistro'da tattığınız lezzetler ve çok daha fazlasını; çeşit çeşit kurabiyeler, çikolatalar, soslar, dondurulmuş gıda ürünleri ve diğer tüm lezzetlerimizi İsveç Gıda Marketi’nden alarak evinizde deneyebilirsiniz.</p>
    </div>

    <div class="img-slider">
      <div class="slider" :style="sliderStyle">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :alt="'Image ' + index"
        />
      </div>

      <button @click="prevImage" class="nav prev"> <img class="arrow-img" src="../assets/left-arrow.png" alt="left arrow"> </button>
      <button @click="nextImage" class="nav next"> <img class="arrow-img" src="../assets/right-arrow.png" alt="right arrow"> </button>

      <div class="indicators">
        <span
              v-for="(image, index) in images"
              :key="index"
              :class="{'active': index === currentIndex}"
              @click="goToImage(index)"
        ></span>
      </div>
    </div>

    <img src="../assets/restoran-mid-imgs/smaklid.png" alt="" class="mid-img">

    <div class="restaurant-cards-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="category-card"
        :style="{ backgroundColor: card.backgroundColor}"
      >
        <div class="image-wrapper">
          <img :src="card.imageSrc" :alt="card.title" />
        </div>
        <div class="text-wrapper">
          <h3>{{ card.title }}</h3>
          <v-btn rounded class="button" icon style="background-color: white;">
            <v-icon style="color: black;">mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <h2 style="padding: 50px 0 50px 0;">Sürdürülebilir olmanın yolunu keşfedin</h2>

    <v-container style="padding-bottom: 60px;">
      <v-slide-group show-arrows>
        <v-slide-item
          v-for="(card, index) in firstSlider"
          :key="index"
          class="product-card"
        >
          <v-card
            class="mx-2"
            elevation="0"
          >
            <v-img
              :src="card.image"
              alt="card image"
              class="product-image"
            ></v-img>
            <v-card-title class="text-h6 mt-2 card-title">{{ card.title }}</v-card-title>
            <v-card-subtitle class="text-body-2" style="color: white;">{{ card.description }}</v-card-subtitle>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>

    <img src="../assets/restoran-first-slider/fika.png" alt="" class="mid-img">

    <h2>Sizin için tekliflerimiz</h2>

    <v-container style="padding-bottom: 60px;">
      <v-slide-group show-arrows>
        <v-slide-item
          v-for="(card, index) in SecondSlider"
          :key="index"
          class="product-card2"
        >
          <v-card
            class="mx-2"
            elevation="0"
            :color="card.cardColor"
          >
            <v-img
              :src="card.image"
              alt="card image"
              class="product-image"
            ></v-img>
            <v-card-title class="mt-2 card-title2" v-html="card.title" style="font-size: 16px;"></v-card-title>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>

  </div>

</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        require('@/assets/restoran-slider/pic1.png'),
        require('@/assets/restoran-slider/pic2.png'),
        require('@/assets/restoran-slider/pic3.png'),
        require('@/assets/restoran-slider/pic4.png'),
        require('@/assets/restoran-slider/pic5.png'),
        require('@/assets/restoran-slider/pic6.png'),
      ],
      cards: [
        {
          title: "İsveç Restoranı",
          imageSrc: require("@/assets/restoran-mid-imgs/isvec-restorani.png"),
          backgroundColor: "#A04E5A",
        },
        {
          title: "İsveç Bistro",
          imageSrc: require("@/assets/restoran-mid-imgs/isvec-bistro.png"),
          backgroundColor: "#E6A757",
        },
        {
          title: "İsveç Gıda Marketi",
          imageSrc: require("@/assets/restoran-mid-imgs/isvec-gida-marketi.png"),
          backgroundColor: "#3A8544",
        },
      ],
      firstSlider: [
        {
          title: "Nasıl daha fazla sürdürülebilir beslenirsiniz?",
          description: "Gıda seçimleri önemlidir. Bitki bazlı gıdalar ve sorumlu kaynaklardan alınan sertifikalı ürünler sürdürülebilir bir beslenme ortamı yaratmanın yollarından biridir. Belki de bahçenizde bir sera oluşturabilirsiniz. Böylece taze gıdaları kendiniz üretebilirsiniz.",
          image: require("@/assets/restoran-first-slider/gida.png"),
        },
        {
          title: "Lezzetli sürdürülebilir balık",
          description: "IKEA'da satılan ve servis edilen tüm çiftlik dışı balık ve karidesler Uluslararası Deniz Yönetim Konseyi (MSC), tüm somon ürünleri Su Ürünleri Yetiştirme Konseyi (ASC) tarafından sertifikalandırılmış tedarikçilerden gelmektedir. MSC etiketi taşıyan ürünler, balık stoklarını gelecek için koruyan çevresel olarak sürdürülebilir balıkçılığın garantisidir.",
          image: require("@/assets/restoran-first-slider/balik.png"),
        },
        {
          title: "Mağazalarımızda FIKA'ya* bekleriz",
          description: "Ürünlerimiz, sorumlu tarım yöntemleriyle yetiştirilen hammaddelerden elde edilir. Sürdürülebilir ekim standartlarına uygunluğumuz, çiftçilere daha iyi koşullar sağlama çabamız ve çekirdeklerin menşei plantasyonunu izlenebilirliği, üretim sürecimizin temel değerleridir.",
          image: require("@/assets/restoran-first-slider/kahve.png"),
        },
        {
          title: "Topraktan gelen lezzetler",
          description: "IKEA ürün yelpazesindeki sebze köfteleri çok değerli bir bitki bazlı gıda alternatifidir. Neyi seçerseniz seçin, topraktan gelen yiyeceklerin çok lezzetli olduğuna emin olabilirsiniz.",
          image: require("@/assets/restoran-first-slider/kofte.png"),
        },
      ],
      SecondSlider: [
        {
          title: "*Zencefilli kurabiye evi ve diğer yılbaşı ürünlerini kasalardan sonra yer alan İsveç Gıda Marketi’nde bulabilirsiniz.",
          image: require('@/assets/restoran-last-slider/f.png'),
          cardColor: "#1a462b"
        },
        {
          title: "*Alerjen bilgileri Restoran ve İsveç Bistro'daki tablolarımızda yer almaktadır.<br>Haftanın her günü 09.30 - 11.00 saatleri arasında kahvaltı için IKEA restoranına bekliyoruz.",
          image: require('@/assets/restoran-last-slider/s.png'),
          cardColor: "#857ec9"
        },
        {
          title: "*Alerjen bilgileri Restoran ve İsveç Bistro'daki tablolarımızda yer almaktadır.Haftanın her günü 11:00-21:30 saatleri arasında öğle ve akşam yemekleri için IKEA restoranına bekliyoruz.<br>*Ürünlerimiz Helal Et Sertifikasına sahip etlerden üretilmektedir.",
          image: require('@/assets/restoran-last-slider/t.png'),
          cardColor: "#a44242"
        },
        {
          title: "*Alerjen bilgileri Restoran ve İsveç Bistro'daki tablolarımızda yer almaktadır.<br>Haftanın her günü 11:00-21:30 saatleri arasında öğle ve akşam yemekleri için IKEA restoranına bekliyoruz.",
          image: require('@/assets/restoran-last-slider/fo.png'),
          cardColor: "#f58f61"
        },
        {
          title: "*Alerjen bilgileri Restoran ve İsveç Bistro'daki tablolarımızda yer almaktadır.<br>Haftanın her günü 11:00-21:30 saatleri arasında öğle ve akşam yemekleri için IKEA restoranına bekliyoruz.",
          image: require('@/assets/restoran-last-slider/fi.png'),
          cardColor: "#4da957"
        },
        {
          title: "*Alerjen bilgileri Restoran ve İsveç Bistro'daki tablolarımızda yer almaktadır. Yan ürünler sezonsal olarak değişiklik gösterebilir.<br>Haftanın her günü 11:00-21:30 saatleri arasında öğle ve akşam yemekleri için IKEA restoranına bekliyoruz.",
          image: require('@/assets/restoran-last-slider/si.png'),
          cardColor: "#b73998"
        },
      ]
    };
  },computed:{
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: 'transform 0.5s ease-in-out',
      };
    },
  },
  methods: {
    prevImage() {
      this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex === this.images.length -1) ? 0 : this.currentIndex + 1;
    },
    goToImage(index) {
      this.currentIndex = index;
    },
  },
};
</script>


<style scoped>

.img-slider {
  padding-top: 30px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-left: 0;
  max-width: fit-content;
}

.img-slider:hover {
  button.nav {
    background-color: black;
    color: white;
    border-radius: 50%;
    font-size: 20px;
  }
  .arrow-img {
    width: 24px;
    height: 24px;
  }
}

.arrow-img {
  width: 0px;
  height: 0px;
}

.slider {
  display: flex;
}

.slider img {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}

button.nav {
  padding: 10px 10px 5px 10px;
  cursor: pointer;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
}

button.nav.prev {
  left: 30px;
}

button.nav.next {
  right: 30px;
}

.indicators {
  width: 100%;
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content: center;
}

.indicators span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #968c8c;
  margin: 0px 5px;
  cursor: pointer;
}

.indicators span.active {
  background: blue;
}

.mid-img {
  padding: 50px 0 50px 0;
  width: 1160px;
}

.restaurant-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.category-card {
  display: flex;
  flex-direction: column;
  color: #fff;
  cursor: pointer;
}

.image-wrapper img {
  width: 100%;
  height: auto;
}

.text-wrapper {
  display: block;
  align-items: center;
  margin: 1rem;
}

.button {
  margin-top: 110px;
}

.product-card {
  width: 444px;
  background-color: #00853e;
  border-radius: 0;
}

.product-card2 {
  width: 444px;
  height: 600px;
  border-radius: 0;
}

.card-title, .card-title2 {
  color: white;
  word-break: normal;
}

.product-card:hover .card-title{
  text-decoration: underline;
  cursor: pointer;
}


</style>
