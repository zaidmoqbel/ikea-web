<template>
  <div class="page-container">

    <nav class="breadcrumb">
      <ul>
        <li><a href="/">Ana Sayfa </a></li>
        <li><a href="/sidebar">Ürünler </a></li>
        <li><a href="">Mobilyalar </a></li>
        <li><span>Kanepeler</span></li>
      </ul>
    </nav>

    <div class="header">
      <h1>Kanepeler</h1>
      <v-btn rounded dark class="text-none" @click="scrollToSection">Tüm Ürünler<v-icon small>mdi-chevron-down</v-icon></v-btn>
    </div>

    <v-row style="padding-top: 20px;">
      <v-col cols=2>
        <img style="width:178px;cursor: pointer;padding-bottom: 20px;" src="../assets/kanepler-imgs/kumas-kanepeler.png" alt="kumaş kanepeler"><span class="txt-under-pic">Kumaş Kanepeler</span>
        <img style="width:178px;cursor: pointer;padding-bottom: 20px;padding-top:50px;" src="../assets/kanepler-imgs/dortlu-koltuk.png" alt="dortlu koltuk"><span class="txt-under-pic">Dörtlü Koltuklar</span>
      </v-col>
      <v-col cols=2>
        <img style="width:178px;cursor: pointer;padding-bottom: 20px;" src="../assets/kanepler-imgs/yatakli-kanepeler.png" alt="yatakli kanepeler"><span class="txt-under-pic">Yataklı Kanepler</span>
        <img style="width:178px;cursor: pointer;padding-bottom: 20px;padding-top:50px;" src="../assets/kanepler-imgs/deri-kanepeler.png" alt="deri kanepeler"><span class="txt-under-pic">Deri Kanepler</span>
      </v-col>
      <v-col cols=2>
        <img style="width:178px;cursor: pointer;padding-bottom: 20px;" src="../assets/kanepler-imgs/ikili-kanepeler.png" alt="ikili kanepeler"><span class="txt-under-pic">İkili Kanepler</span>
        <img style="width:178px;cursor: pointer;padding-bottom: 20px;padding-top:50px;" src="../assets/kanepler-imgs/uzanma-koltuklari.png" alt="uzanma koltuklari"><span class="txt-under-pic">Uzanma Koltukları</span>
      </v-col>
      <v-col cols=2>
        <img style="width:178px;cursor: pointer;padding-bottom: 20px;" src="../assets/kanepler-imgs/uclu-kanepeler.png" alt="uclu kanepeler"><span class="txt-under-pic">Üçlü Kanepler</span>
        <img style="width:178px;cursor: pointer;padding-bottom: 20px;padding-top:50px;" src="../assets/kanepler-imgs/kanepe-kiliflari.png" alt="kanepe kiliflari"><span class="txt-under-pic">Kanepe Kılıfları</span>
      </v-col>
      <v-col cols=2>
        <img style="width:178px;cursor: pointer;padding-bottom: 20px;" src="../assets/kanepler-imgs/l-koltuklar.png" alt="l koltuklar"><span class="txt-under-pic">L Koltuklar</span>
        <img style="width:178px;cursor: pointer;padding-bottom: 20px;padding-top:50px;" src="../assets/kanepler-imgs/sofa-parts-accessories.png" alt="sofa parts accessories"><span class="txt-under-pic">Kanepe Aksesuarları</span>
      </v-col>
      <v-col cols=2>
        <img style="width:178px;cursor: pointer;padding-bottom: 20px;" src="../assets/kanepler-imgs/u-koltuklar.png" alt="u koltuklar"><span class="txt-under-pic">U Koltukları</span>
        <img style="width:178px;cursor: pointer;padding-bottom: 20px;padding-top:50px;" src="../assets/kanepler-imgs/koltuk-takimlari.png" alt="koltuk takimlari"><span class="txt-under-pic">Koltuk Takımları</span>
      </v-col>
    </v-row>

    <div class="fazla-paragraph">
      Kanepeler, uzun bir günden sonra rahatlayabileceğiniz, aileniz ve çocuklarınızla televizyon keyfi yapabileceğiniz ve sevdiklerinizi ağırladığınız günlerde eğlenceli sohbetler edebileceğiniz zamanların baş kahramanı, oturma odanızdaki rahat, estetik ve işlevsel mobilyalardır. Kanepeler, oturma odasının odak noktalarından biridir ve her ne kadar kemikleşmiş parçalar olarak görülseler de, doğru stil ve modeldeki bir kanepe odanızın havasını tamamen değiştirebilir.
    </div>
    <v-btn rounded light outlined class="text-none"><h5>Daha Fazla Göster</h5></v-btn>


    <div class="gri-severler">
      <h2>Gri severler buraya!</h2>
      <p style="font-size: 0.85rem;padding-top: 15px;padding-bottom: 30px">Oturma odanızın daha klasik ve gri tonlarının ön planda olmasını istiyorsanız gri kanepelere göz atabilirsiniz. Kanepeler oturma odanızın baş kahramanları ve en dikkat çeken mobilyaları arasındadır. Ayrıca kanepenizi seçerken tasarımın yanı sıra işlevselliği de göz önünde bulundurmanız gerekebilir. Yataklı kanepelerle ekstra uyuma alanı oluşturabilir, depolama alanlarına sahip kanepeler ile ortalıkta gözükmesini istemediğiniz eşyalarınızı kaldırabilir ve uzanma koltukları ile kendinize dinlenme köşeleri oluşturabilirsiniz. Karar sizin.</p>
    </div>

    <div class="mid-imgs">
      <v-row>
        <v-col cols="6">
          <img src="../assets/kanepler-imgs/gri-imgs/left-img.png" alt="" style="width: 579.5px;height: 659.531px;">
        </v-col>
        <v-col cols="3">
          <img src="../assets/kanepler-imgs/gri-imgs/cent-top.png" alt="" style="width: 274.75px;height:274.75px">
          <img src="../assets/kanepler-imgs/gri-imgs/cent-bot.png" alt="" style="width: 274.75px;height:377.781px">
        </v-col>
        <v-col cols="3">
          <img src="../assets/kanepler-imgs/gri-imgs/right-top.png" alt="" style="width: 274.75px;height:377.781px">
          <img src="../assets/kanepler-imgs/gri-imgs/right-bot.png" alt="" style="width: 274.75px;height:274.75px">
        </v-col>
      </v-row>
    </div>

    <div style="padding-bottom: 30px;">
      <h2 style="padding-bottom: 30px;">Kanepelerinizi daha konforlu hale getirecek tekstil ürünlerini keşfedin</h2>
      <v-btn rounded light outlined class="text-none"><span style="font-weight: 900;font-size: 13px;">Tüm ev tekstili ürünlerini inceleyin</span></v-btn>
    </div>

    <v-container style="padding-bottom: 60px;">
      <v-slide-group show-arrows>
        <v-slide-item
          v-for="(product) in products"
          :key="product.id"
          class="product-card"
        >
          <v-card
            class="mx-2"
            elevation="0"
            @mouseover="hoveredCard = product.id"
            @mouseleave="hoveredCard = null"
          >
            <v-img
              :src="hoveredCard === product.id ? product.hoverImage : product.image"
              alt="Product image"
              class="product-image"
            ></v-img>

            <v-chip
              v-if="product.tag"
              :color="product.tagColor"
              class="product-tag"
              small
            >
              {{ product.tag }}
            </v-chip>

            <v-card-title class="text-h6 mt-2">{{ product.title }}</v-card-title>
            <v-card-subtitle class="text-body-2">{{ product.description }}</v-card-subtitle>
            <v-card-subtitle class="text-body-2">
              <span v-if="product.oldPrice" class="old-price">{{ product.oldPrice }}₺</span>
              <br>
              <span class="current-price">{{ new Intl.NumberFormat('tr-TR').format(product.price) }}₺</span>
            </v-card-subtitle>

            <v-btn style="background-color: #0058a3;" icon @click="toggleCartIcon(product)"><v-icon color="white">{{ product.isAdded ? "mdi-check" : "mdi-basket-plus" }}</v-icon></v-btn>

          </v-card>

        </v-slide-item>
      </v-slide-group>
    </v-container>

    <img src="../assets/kanepler-imgs/middle.png" alt="" style="cursor: pointer; padding-bottom: 30px;">

    <div class="cok-satan">
      <h2 style="padding-bottom: 15px;">En çok satan ürünlerimiz</h2>
      <p style="padding-bottom: 15px;">En sevilen mobilya ve aksesuarlarımızla evinizin her alanını yenilemek için doğru parçaları bulabilirsiniz. Zamansız mobilya klasiklerinden en popüler sezonsal ürünlere kadar estetik ve işlevsel ürünlerimiz bir tık uzağınızda!</p>
    </div>
    <v-btn rounded light outlined class="text-none"><h5>Çok satan ürünlerimizi inceleyin</h5></v-btn>

    <v-container style="padding-bottom: 60px;">
      <v-slide-group show-arrows>
        <v-slide-item
          v-for="(product, index) in mostselling"
          :key="index"
          class="product-card"
        >
          <v-card
            class="mx-2"

            elevation="0"
            @mouseover="hoveredCard = index"
            @mouseleave="hoveredCard = null"
          >
            <v-img
              :src="hoveredCard === index ? product.hoverImage : product.image"
              alt="Product image"
              class="product-image"
            ></v-img>

            <v-chip
              v-if="product.tag"
              :color="product.tagColor"
              class="product-tag"
              small
            >
              {{ product.tag }}
            </v-chip>

            <v-card-title class="text-h6 mt-2">{{ product.title }}</v-card-title>
            <v-card-subtitle class="text-body-2">{{ product.description }}</v-card-subtitle>
            <v-card-subtitle class="text-body-2">
              <span class="current-price">{{ new Intl.NumberFormat('tr-TR').format(product.price) }}₺</span>
            </v-card-subtitle>
            <v-btn style="background-color: #0058a3;" icon @click="toggleCartIcon(product)"><v-icon color="white">{{ product.isAdded ? "mdi-check" : "mdi-basket-plus" }}</v-icon></v-btn>

          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>

    <div style="padding-bottom: 70px;">
      <h2>Birden fazla görevi olan kanepe</h2>
      <p style="padding: 15px 0 30px 0;font-size: 14px">Peki ya size tek bir ürünün kanepeye, yatağa, pufa, sehpaya ve depolama alanına sahip olabileceğini söyleseydik? İşte karşınızda ihtiyaçlarınıza göre değişen yeni yataklı kanepe LINDÅKRA. Eğlenceli ve renkli tasarımı; uyumak, rahatlamak ve sosyalleşmek için doğru alanı yaratmak üzere istediğiniz gibi düzenlenebilir.</p>
      <v-row>
        <v-col cols="6">
          <div class="image-parent">
            <img src="../assets/kanepler-imgs/pic-vid/lindakra-2-li-kanepe-ve-puf.png" alt="" style="width: 584.5; height: 767px; object-fit: cover;">
            <div class="info-box">
              <h4 style="background-color: orangered; font-size:15px ;">Yeni</h4>
                <h3>LINDAKRA</h3>
                <h4>2'li yataklı kanepe, knisa <br> parlak turuncu</h4>
                <h2>13.999₺</h2>
                <v-btn
                rounded
                size="large"
                class="text-none"
                style="font-weight: 500; background-color: #0058a3; color: white;"
                ><img src="../assets/add-to-basket.png" style="height: 24px;width: 24px;">Sepete Ekle</v-btn>
            </div>
          </div>
        </v-col>

        <v-col cols="6">
          <video
            src="../assets/kanepler-imgs/pic-vid/lindakra-2-li-kanepe-ve-puf.mp4"
            controls
            style="width: 584.5; height: 767px; object-fit: cover;"
            loop
            muted
          ></video>
        </v-col>
      </v-row>
    </div>

    <div>
      <h2 style="padding-bottom: 30px;">Serilerimize göz atın</h2>

      <v-sheet class="mx-auto" elevation="0" style="margin-bottom: 60px;">
        <v-slide-group show-arrows>
          <v-slide-group-item v-for="(image, index) in images" :key="index">
            <v-card :class="['ma-2']" height="320.453" width="240.5" style="border-radius:0; background: transparent; box-shadow: none;">
              <div class="d-flex fill-height align-center justify-center">
                <v-img :src="image.src" :alt="'Image ' + (index + 1)" height="100%" width="100%" cover></v-img>
                <v-btn class="image-button text-none" @click="buttonClick(index)" rounded>{{ image.label }}</v-btn>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>

    </div>

    <filters />

    <div class="border-line"></div>

    <div id="target-section">
      <products />
    </div>

    <div
    v-if="popup.visible"
    class="popup-notification"
    :style="{ right: '100px', bottom: '450px', top: '100px',left: '900px' }"
  >
    {{ popup.message }}
    <v-btn text @click="goToCart" style="color: white;  font-size: 0.6rem;" class="text-none goster" elevation="0" plain >Göster</v-btn>
    <v-btn text @click="popup.visible = false" style="color: white;  font-size: 0.6rem;" elevation="0" plain>X</v-btn>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: {
      visible: false,
      message: '',
    },
      currentIcon: "mdi-basket-plus",
      hoveredCard: null,
      products: [
        {
          isAdded: false,
          id: 1,
          title: "SVARTPOPPEL",
          description: "kırlent kılıfı, gri-yeşil",
          image: require('@/assets/kanepler-imgs/first-slider/f-img.png'),
          hoverImage: require('@/assets/kanepler-imgs/first-slider/f-h-img.png'),
          price: 219,
          oldPrice: null,
          tag: " ",
          tagColor: "white"
        },
        {
          isAdded: false,
          id: 2,
          title: "KLIPPOXEL",
          description: "örtü, mavi",
          image: require('@/assets/kanepler-imgs/first-slider/s.png'),
          hoverImage: require('@/assets/kanepler-imgs/first-slider/s-h.png'),
          price: 899,
          oldPrice: null,
          tag: "Yeni",
          tagColor: "orange",
        },
        {
          isAdded: false,
          id:3,
          title: "ODDNY",
          description: "kırlent kılıfı, kırık beyaz-siyah nokta deseni",
          image: require('@/assets/kanepler-imgs/first-slider/t.png'),
          hoverImage: require('@/assets/kanepler-imgs/first-slider/t-h.png'),
          price: 129,
          oldPrice: "159 ",
          tag: "FIRSAT GÜNLERİ",
          tagColor: "yellow",
        },
        {
          isAdded: false,
          id:4,
          title: "GINSTSÄCKMAL",
          description: "örtü, siyah-beyaz",
          image: require('@/assets/kanepler-imgs/first-slider/fo.png'),
          hoverImage: require('@/assets/kanepler-imgs/first-slider/fo-h.png'),
          price: 1199,
          oldPrice: null,
          tag: "Yeni",
          tagColor: "orange",
        },
        {
          isAdded: false,
          id:5,
          title: "SVÄRDTÅG",
          description: "kırlent kılıfı, koyu mavi",
          image: require('@/assets/kanepler-imgs/first-slider/fi.png'),
          hoverImage: require('@/assets/kanepler-imgs/first-slider/fi-h.png'),
          price: 219,
          oldPrice: null,
          tag: " ",
          tagColor: "white",
        },
        {
          isAdded: false,
          id:6,
          title: "SVARTFRYLE",
          description: "örtü, koyu sarı-açık gri",
          image: require('@/assets/kanepler-imgs/first-slider/si.png'),
          hoverImage: require('@/assets/kanepler-imgs/first-slider/si-h.png'),
          price: 799,
          oldPrice: null,
          tag: "Yeni",
          tagColor: "orange",
        },
        {
          isAdded: false,
          id:7,
          title: "SPIKKLUBBA",
          description: "kırlent kılıfı, kırık beyaz-siyah",
          image: require('@/assets/kanepler-imgs/first-slider/se.png'),
          hoverImage: require('@/assets/kanepler-imgs/first-slider/se-h.png'),
          price: 179,
          oldPrice: null,
          tag: "Pamuk",
          tagColor: "orange",
        },
        {
          isAdded: false,
          id:8,
          title: "KLYNNETÅG",
          description: "örtü, siyah-beyaz",
          image: require('@/assets/kanepler-imgs/first-slider/e.png'),
          hoverImage: require('@/assets/kanepler-imgs/first-slider/e-h.png'),
          price: 799,
          oldPrice: null,
          tag: " ",
          tagColor: "white",
        },
        {
          isAdded: false,
          id:9,
          title: "KUSTFLY",
          description: "kırlent kılıfı, bej-siyah",
          image: require('@/assets/kanepler-imgs/first-slider/n.png'),
          hoverImage: require('@/assets/kanepler-imgs/first-slider/n-h.png'),
          price: 349,
          oldPrice: null,
          tag: "Sürdürülebilir",
          tagColor: "green",
        },
        {
          isAdded: false,
          id:10,
          title: "MOSSMOTT",
          description: "örtü, siyah-beyaz",
          image: require('@/assets/kanepler-imgs/first-slider/ten.png'),
          hoverImage: require('@/assets/kanepler-imgs/first-slider/ten-h.png'),
          price: 699,
          oldPrice: null,
          tag: "Yeni",
          tagColor: "orange",
        },
      ],
      shoppingCart: [],
      mostselling:[
        {
          isAdded: false,
          id: 11,
          title: "BARSLÖV",
          description: "bazalı yataklı köşe kanepe, tibbleby bej-gri",
          image: require('@/assets/kanepler-imgs/cok-satan/f.png'),
          hoverImage: require('@/assets/kanepler-imgs/cok-satan/f-h.png'),
          price: 28999,
          tag: "Çok Satan",
          tagColor: "purple"
        },
        {
          isAdded: false,
          id: 12,
          title: "KIVIK",
          description: "3'lü kanepe, tresund antrasit",
          image: require('@/assets/kanepler-imgs/cok-satan/s.png'),
          hoverImage: require('@/assets/kanepler-imgs/cok-satan/s-h.png'),
          price: 24999,
          tag: "Çok Satan",
          tagColor: "purple",
        },
        {
          isAdded: false,
          id: 13,
          title: "ESKILSTUNA",
          description: "2'li kanepe, hillared anthracite",
          image: require('@/assets/kanepler-imgs/cok-satan/t.png'),
          hoverImage: require('@/assets/kanepler-imgs/cok-satan/t-h.png'),
          price: 39999,
          tag: "Çok Satan",
          tagColor: "purple",
        },
        {
          isAdded: false,
          id: 14,
          title: "SÖDERHAMN",
          description: "6'lı köşe kanepe, viarp Bej-kahverengi",
          image: require('@/assets/kanepler-imgs/cok-satan/fo.png'),
          hoverImage: require('@/assets/kanepler-imgs/cok-satan/fo-h.png'),
          price: 65999,
          tag: "Çok Satan",
          tagColor: "purple",
        },
        {
          isAdded: false,
          id: 15,
          title: "VIMLE",
          description: "2'li yataklı kanepe, gunnared orta gri",
          image: require('@/assets/kanepler-imgs/cok-satan/fi.png'),
          hoverImage: require('@/assets/kanepler-imgs/cok-satan/fi-h.png'),
          price: 47499,
          tag: "Çok Satan",
          tagColor: "purple",
        },
      ],
      images: [
      { src: require('@/assets/kanepler-imgs/last-slider/f.png'), label: 'KIVIK Serisi' },
      { src: require('@/assets/kanepler-imgs/last-slider/s.png'), label: 'SÖDERHAMN Serisi' },
      { src: require('@/assets/kanepler-imgs/last-slider/t.png'), label: 'EKTORP Serisi' },
      { src: require('@/assets/kanepler-imgs/last-slider/fo.png'), label: 'BARSLÖV Serisi' },
      { src: require('@/assets/kanepler-imgs/last-slider/fi.png'), label: 'PARUP Serisi' },
      { src: require('@/assets/kanepler-imgs/last-slider/si.png'), label: 'ESKILSTUNA Serisi' },
      { src: require('@/assets/kanepler-imgs/last-slider/se.png'), label: 'HYLTARP Serisi' },
      { src: require('@/assets/kanepler-imgs/last-slider/e.png'), label: 'EKENASET Serisi' },
      { src: require('@/assets/kanepler-imgs/last-slider/n.png'), label: 'VIMLE Serisi' },
    ],
    filters: [
    {
          name: "Sıralama",
          hasDropdown: true,
          isOpen: false,
          selected: "most_sold",
          options: [
            { value: "most_sold", label: "En Çok Satanlar" },
            { value: "price_asc", label: "Artan Fiyata Göre" },
            { value: "price_desc", label: "Azalan Fiyata Göre" },
            { value: "new_products", label: "Yeni Ürünlere Göre" },
            { value: "name_asc", label: "İsme Göre (A-Z)" },
            { value: "name_desc", label: "İsme Göre (Z-A)" },
          ],
        },
        {
          name: "Renk",
          hasDropdown: true,
          isOpen: false,
          selected: null,
          options: [
            { value: "#808080", label: "Gri" },
            { value: "#f5f5dc", label: "Bej" },
            { value: "#000000", label: "Siyah" },
            { value: "#008000", label: "Yeşil" },
            { value: "#0000ff", label: "Mavi" },
            { value: "#ffffff", label: "Beyaz" },
          ],
        },
{
          name: "Fonksiyon",
          hasDropdown: true,
          isOpen: false,
          selectedOptions: [],
          options: [
            { value: "three_seat", label: "3'lü Kanepe", count: 98 },
            { value: "two_seat", label: "2'li Kanepe", count: 91 },
            { value: "two_seat_lounger", label: "2'li Kanepe ve uzanma koltuğu", count: 65 },
            { value: "three_seat_lounger", label: "3'lü Kanepe ve uzanma koltuğu", count: 47 },
            { value: "single_seat", label: "Tekli Koltuk", count: 41 },
          ],
        },
        { name: "Kategori", hasDropdown: true, isOpen: false, options: ['Koltuk Takımları', 'Kumaş Kanepler' , 'Modüler Kanepler', 'Kanepe Aksesuaları', 'Kanepe Kılıfları','L koltuklar','İkili Kanepler','Üçlü Kanepler', 'Yataklı Kanepler', 'Dörtlü Koltuklar', 'U Koltuklar', 'Uzanma Koltukları','Deri Kanepler'] },
        { name: "Fiyat", hasDropdown: true, isOpen: false, options: ['Koltuk Takımları', 'Kumaş Kanepler' , 'Modüler Kanepler', 'Kanepe Aksesuaları', 'Kanepe Kılıfları','L koltuklar','İkili Kanepler','Üçlü Kanepler', 'Yataklı Kanepler', 'Dörtlü Koltuklar', 'U Koltuklar', 'Uzanma Koltukları','Deri Kanepler'] },
        { name: "Ölçü", hasDropdown: true, isOpen: false, options: ['140x200 cm', '15 cm', '140x188 cm', '12 cm','20 cm', '67x47 cm'] },
        { name: "Ayak Rengi", hasDropdown: true, isOpen: false, options: ['ahşap', 'metal', 'huş', 'kahverengi'] },
      ],
    };
  },
  props: ['product'],
  methods: {
    selectOption(filterIndex, option) {
      this.filters[filterIndex].selected = option.value;
      console.log(
        `Selected ${option.label} (${option.value}) from ${this.filters[filterIndex].name}`
      );
    },
    toggleAllFilters() {
      console.log("All filters button clicked");
    },
    toggleDropdown(index) {
      this.filters[index].isOpen = !this.filters[index].isOpen;
    },
    goToCart() {
      this.$router.push('/cart')
    },
    toggleCartIcon(product) {
          this.addToCart(product);
          product.isAdded = true;
          this.popup.message = `${product.title} ${product.description} sepetinize eklenmiştir.`;
          this.popup.visible = true;

          setTimeout(() => {
            product.isAdded = false;
          }, 3000);

          setTimeout(() => {
            this.popup.visible = false;
          }, 5000);
  },
    addToCart(product) {
    console.log('Product being added to cart:', product);
    this.$store.dispatch('cart/addItem', product);

  },
    scrollToSection() {
      const target = document.getElementById('target-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth'});
      }
    },
  },
};
</script>

<style scoped>

.breadcrumb {
font-size: 14px;
color: #666;
margin-left: 50px;
padding-top: 10px;
padding-bottom: 30px;
}

.breadcrumb ul {
list-style: none;
padding: 0;
margin: 0;
display: flex;
gap: 5px;
}

.breadcrumb li {
display: inline;
}

.breadcrumb a {
text-decoration: underline;
color:#666
}

.breadcrumb a:hover {
text-decoration: none;
}

.breadcrumb li::after {
content: "›";
margin: 0 5px;
}

.breadcrumb li:last-child::after {
content: "";
}

.header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.txt-under-pic {
  font-size: 15px;
}

.txt-under-pic:hover {
  text-decoration: underline;
  cursor: pointer;
}

.fazla-paragraph {
  width: 50%;
  padding-top: 70px;
  font-size: 14px;
  padding-bottom: 20px;
}

.gri-severler {
  padding-top: 30px;
}

.mid-imgs {
  cursor: pointer;
  padding-bottom: 70px;
}

.product-card {
  width: 279px;
  position: relative;
}

.product-image {
  transition: transform 0.3s ease-in-out;
}

.product-tag {
  border-radius:0   ;
  top: 10px;
  left: 10px;
  font-weight: bold;
}

.old-price {
  text-decoration: line-through;
  color: gray;
  font-size: 0.9em;
  margin-right: 5px;
}

.current-price {
  color: black;
  font-size: 1.7em;
  font-weight: bolder;
}

.filter-bar-container {
  border-radius: 20px;
}

.filter-btn {
  margin-right: 10px;
  background-color: white;
  color: black;
  font-weight: 800;
  text-transform: none;
  font-size: 11px;
}

.filter-btn:hover {
  background-color: #e0e0e0;
}

.border-line {
  border-bottom: 2px solid #E5E4E2;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}

.popup-notification {
  position: fixed;
  background: black;
  color: white;
  padding: 8px;
  border-radius: 8px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 6px;
  z-index: 1000;
  animation: fade-in-out 0.3s;
  max-width: 500px;
}

@keyframes fade-in-out {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.goster:hover {
  background-color: transparent !important;
  box-shadow: none !important;
  text-decoration: underline;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px 0;
}

.color-item {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #ddd; /* Optional for better visibility */
}

.color-item:hover {
  border-color: #666; /* Highlight on hover */
}
</style>
