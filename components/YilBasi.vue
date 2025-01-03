<template>
    <div class="features">
        <h2 align="left" style="margin: 95px 0px 30px 0px; color: #171717;">Yatak odanızı kendi tarzınıza göre hazırlayın</h2>
        <p style="font-size: 14px; padding-bottom: 5px;">Rahat karyolalar ve yumuşak nevresim takımları, güne yeni başlamak için yatak odanızı tamamlayan mobilya ve aksesuarlar arasındadır. İşlevsel ve düzenli bir gardırop, karyolanın başucunda bir komodin ve uyurken vücudunuzu destekleyen kaliteli bir yatak, yeni gün için ihtiyacınız olan motivasyonu verir. Yatak odanızı göz alıcı bir hale getiren perdeler, halılar ve dekoratif aksesuarlarla kendi tarzınızı yansıttığınız huzurlu ve keyifli bir yaşam alanı yaratmış olursunuz.</p>
        <div class="parent">
        <v-container>
            <v-row>
                <v-col cols="3" class="box">
                    <div class="content-box">
                      <h3>RAMNEFJALL/LURÖY</h3>
                        <h4>çift kişilik karyola,<br> kilanda açık bej</h4>
                        <h2>9.999₺</h2>
                        <v-btn
                        rounded
                        size="large"
                        class="text-none"
                        style="font-weight: 500; background-color: #0058a3; color: white;"
                        @click="addToCart()"
                        ><img src="../assets/add-to-basket.png" style="height: 24px;width: 24px;">Sepete Ekle</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        </div>
    </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      product: {
        id: 100,
        title: "RAMNEFJALL/LURÖY",
        description: "çift kişilik karyola, kilanda açık bej",
        image: require('@/assets/new/product1.png'),
        price: 9999,
      },
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addItem", this.product);
    },
  },
};
</script>

<style>

.features {
    .parent {
        height: 645px;
        background-image: url(../assets/new/first.png);
        background-size: contain;
        background-position: top;
        .content-box {
            color: white;
            font-weight: lighter;
            background-color: transparent;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-family: 'Noto IKEA Latin Regular', sans-serif;
            height: 160px;
            width: 300px;
            padding-left: 20px;
            padding-top: 15px;
        }
    }
}

.box {
    margin-left: 400px;
    margin-top: 100px;
}


</style>
