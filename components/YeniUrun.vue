<template>
  <div>
    <div class="text-container" align="left" style="margin-top: 60px">
        <h2 style="padding-bottom:20px ; ">Yeni ürünlerimiz burada!</h2>
        <p style="padding-bottom:15px ;font-size: 13px;">Eviniz için yeni ürünlerimizi keşfedin. Mobilya ve aksesuar ürünleri arasından seçim yapabileceğiniz yeni ürünlerimizle evinizi yenilemenin yanı sıra mobilyalarla daha işlevsel bir hale getirebilirsiniz.</p>
        <v-btn rounded class="text-none hovering" outlined style="margin-bottom: 45px;">
                Tüm yeni ürünleri inceleyin
        </v-btn>
    </div>

    <div class="vinter-images-container" style="margin-right: 40px;">
        <v-row class="grid-images">
            <v-col cols="6" md="6">
                <div class="image-parent">
                    <img
                    src="../assets/new/urunleft.png"
                    style="width: 555px; height: 663px; object-fit: cover;"
                    >
                    <div class="info-box">
                        <h3>RODGERSIA</h3>
                        <span>tek kişilik nevresim seti <br> pembe-beyaz</span>
                        <h2>779₺</h2>
                        <v-btn
                        rounded
                        size="large"
                        class="text-none"
                        style="font-weight: lighter; background-color: #0058a3; color: white;"
                        @click="addToCart()"
                        ><img src="../assets/add-to-basket.png" style="height: 24px;width: 24px;">Sepete Ekle</v-btn>
                    </div>
                  </img>
                </div>
            </v-col>
            <v-col cols="3">
                <div class="image-parent" style="position: relative;">
                    <img src="../assets/new/yenitop.png" alt="" style="height: 275px;width: 275px;">
                </div>
                <div class="image-parent" style="position: relative;">
                    <img src="../assets/new/yenibottom.png" alt="" style="height: 378px;width: 275px;">
                    <div class="shoppable-image-dot"></div>
                </div>
            </v-col>
            <v-col cols="3">
                <div class="image-parent" style="position: relative;">
                    <img src="../assets/new/greenright.png" alt=""  style="height: 378px;width: 275px;">
                    <div class="shoppable-image-dot"></div>
                </div>
                <div class="image-parent" style="position: relative;">
                    <img src="../assets/new/dogright.png" alt="" style="height: 275px;width: 275px;">
                </div>
            </v-col>
        </v-row>

    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      product: {
        id: 101,
        title: "RODGERSIA",
        description: "tek kişilik nevresim seti pembe-beyaz",
        image: require('@/assets/new/pl.png'),
        price: 779,
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

.text-container {
    font-family: 'Noto IKEA Latin Regular', sans-serif;
    color: #242424;
}

.hovering {
    font-size: 8px;
    color: white;
    font-weight: 1000;
    font-family: 'Noto IKEA Latin Regular', sans-serif;
}

.hovering:hover {
    border-color: black;
    background-color: white;
}

.shoppable-image-dot {
    transition: border-color 250ms ease-in-out,opacity 250ms ease-in-out,visibility 250ms ease-in-out;
    padding: 0;
    width: 32px;
    height: 32px;
    border: 2px solid transparent;
    position: absolute;
    background: rgba(0,0,0,.2);
    opacity: 1;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.shoppable-image-dot::before {
    content: "";
    position: absolute;
    top: -.5rem;
    left: -.5rem;
    right: -.5rem;
    bottom: -.5rem;
    display: block
}

.shoppable-image-dot::after {
    content: "";
    transition: transform 250ms ease-in-out;
    position: absolute;
    display: block;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,.55);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.info-box {
  margin-left: 150px;
  margin-bottom: 250px;
  color: white;
  font-size: 15px;
  font-weight: normal;
}



</style>
