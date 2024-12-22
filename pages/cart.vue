<template>
  <div class="page-container">
    <div v-if="cartItems.length">
      <h1 style="font-size: 40px;">Alışveriş Sepeti</h1>
      <p style="padding-top:10px;">Sepetiniz hazır ise ödeme sayfasına satın al butonuna tıklayarak ödeme<br> seçeneklerini görüntüleyebilirsiniz.</p>
      <v-container>
        <v-row>
          <v-col cols="12" md="8" >
            <v-card elevation="0">
              <v-card-title elevation="0">
                <v-row>
                  <v-col cols="6" style="text-align: left;"><h3>Sepetteki Ürünlerim</h3></v-col>
                  <v-col cols="3"><h5>Adet</h5></v-col>
                  <v-col cols="3" style="text-align: right;color: black;"><h5>Tutar</h5></v-col>
                </v-row>
              </v-card-title>
              <v-divider style="border-color:#0058a3; border-width: 1px;"></v-divider>

              <v-card-text v-for="(item, index) in cartItems" :key="item.id" style="padding-top: 30px;">
                <v-row>

                  <v-col cols="6" style="display: flex;padding-top: 10px;">
                    <v-img :src="item.image" alt="Product Image" class="product-img" />
                    <div>
                      <h3 class="details">{{ item.title }}</h3>
                      <p class="details">{{ item.description }}</p>
                      <h3 class="details">{{ formatPrice(item.price) }}</h3>
                    </div>
                  </v-col>

                  <v-col cols="3">
                    <div class="quantity-box" style="padding-top: 10px;">
                      <v-btn @click="decreaseQuantity(item.id)" icon ><v-icon>mdi-minus</v-icon></v-btn>
                      <span style="color: black;">{{ item.quantity }}</span>
                      <v-btn @click="increaseQuantity(item.id)" icon ><v-icon>mdi-plus</v-icon></v-btn>
                    </div>
                  </v-col>

                  <v-col cols="3" class="text-right">
                    <span style="font-size: 20px; font-weight: bold; color: black;">{{ formatPrice(item.price * item.quantity) }}₺</span>
                    <div>
                      <v-btn @click="removeItem(item.id)" color="#0058a3" text icon class="text-none trash-button"><v-icon>mdi-trash-can-outline</v-icon><span class="trash-button-text">Ürünü Sil</span></v-btn>
                    </div>
                  </v-col>

                </v-row>
                <v-divider style="margin-top: 25px;"></v-divider>
              </v-card-text>
            </v-card>

            <v-row>
              <v-col cols="6" style="text-align: left;"><h3>Adres Bilgileri</h3></v-col>
            </v-row>
            <v-divider style="border-color:#0058a3; border-width: 1px;"></v-divider>

            <v-row>
              <v-card class="address-card" outlined elevation="0" >
                <v-row align="center" justify="space-between">
                  <v-col cols="auto">
                    <div>
                      <p class="title">Adresiniz bulunmamaktadır.</p>
                      <p class="subtitle">Yeni adres ekleyiniz.</p>
                    </div>
                  </v-col>
                  <v-col cols="auto">
                    <v-btn class="add-button" elevation="0" icon>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-row>
            <v-divider></v-divider>

            <v-row style="text-align: left; margin-top: 25px;">
              <v-col cols="6">
                <div class="left-cont">
                  <h1><v-icon style="color: black;font-size: 60px;">mdi-truck-outline</v-icon></h1>
                  <h2 style="padding-top: 20px;padding-bottom: 20px;">Teslimat Tarihi</h2>
                  <p>Tahmini 2 iş günü içinde kargoya verilir.</p>
                  <p>Siparişiniz sizi bekletmemek adına birden fazla teslimat olarak gerçekleştirilebilir. Kargo firmalarının adrese teslim yapamadığı köy ve beldelerde sipariş, alıcının adresine en yakın kargo şubesinden veya ortak noktadan teslim edilmektedir. Güncel dağıtım bölgelerimizi görmek için <span style="color: #0058a3;">tıklayın.</span></p>
                </div>
              </v-col>
              <v-col cols="6">
                <img src="../assets/heart-arrow.png" alt="heart arrow" style="width: 60px;">
                <h2 style="padding-top: 10px;padding-bottom: 20px;">Kolay İade</h2>
                <p>İnternet Mağazasından yaptığınız alışverişlerinizde ürününüzün iadesi için teslim alma tarihinden itibaren 14 gün içinde talebinizi iletmeniz gerekmektedir. İade talebi adımları için<span style="color: #0058a3;"> tıklayın.</span></p>
              </v-col>
            </v-row>

          </v-col>

          <v-col cols="12" md="4">
            <div  style=" position: sticky; top: 110px; z-index: 10;">
            <v-card elevation="0" outlined style="border-radius: 0px;border-width: 2px;">
              <v-card-text style="padding: 25px;">
                <v-row style="padding-top: 30px;">
                  <v-col cols="6" class="text-left" style="padding-bottom:0px;">
                    <h4 style="color: black;font-size: 17px;">Ürünler Bedeli</h4>
                    <p style="padding-top: 5px;color: #6e6e6e;">KDV Dahil</p>
                  </v-col>
                  <v-col cols="6" class="text-right" style="color: black;font-weight: bold;font-size: 17px;">{{ formatPrice(totalAmount) }}₺</v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" class="text-left" style="padding-top:0px;padding-bottom: 10px;">
                    <h4 style="color: black;font-size: 17px;">Nakliye Bedeli</h4>
                    <p style="padding-top: 5px;padding-bottom: 10px;color: #6e6e6e;">KDV Dahil</p>
                  </v-col>
                  <v-col cols="6" class="text-right" style="color: black;font-weight: bold;padding-top:0px;font-size: 17px;">199₺</v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row  style="padding-top:20px;">
                  <v-col cols="6" class="text-left">
                    <strong style="color: black;font-size: 17px;">Genel Toplam</strong>
                    <p style="padding-top: 5px;color: #6e6e6e;">KDV Dahil</p>
                  </v-col>
                  <v-col cols="6" class="text-right" style="color: black;font-size: 17px;"><strong>{{ formatPrice(totalAmount + 199 ) }}₺</strong></v-col>
                </v-row>
                <div class="text-left" style="padding: 17px 20px 35px 0px;color: #6e6e6e;">
                  Stoktaki Ürünler Toplamıdır
                </div>
              </v-card-text>
            </v-card>
            <div style="text-align: left;font-weight: bold;margin-top: 30px;">
              <p><v-icon style="color: #0058a3;padding-right: 5px;">mdi-information-outline</v-icon>Lütfen adres bilgilerinizi giriniz.</p>
              <p style="text-decoration: underline; cursor: pointer;font-size: 15px;"><img src="../assets/bi--lock.png" alt="lock" style="width: 26px;padding-right: 5px;">SSL veri şifreleme ile güvenli alışveriş </p>
              <p style="font-size: 13px;"><v-icon style="color: black;padding-right: 5px;">mdi-information-outline</v-icon>IKEA Kurumsal üyeleri için <span style="text-decoration: none;color:#0058a3;cursor: pointer;">bilgilendirme</span></p>
            </div>
          </div>
          </v-col>
        </v-row>
  </v-container>
    </div>
    <div v-else>
      <v-badge color="#fcd500" content="0">
        <h1 style="font-size: 40px;">Alışveriş Sepeti</h1>
      </v-badge>
      <p style="padding-top: 25px;">Alışveriş Sepetiniz şu anda boş</p>
      <router-link to="/">
        <v-btn color="#0058a3" rounded class="text-none button" style="width: 250px;height: 54px;">Alışverişe Başla</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cart.items;
    },
    totalAmount() {
      return this.$store.getters['cart/totalAmount'];
    },
    totalItems() {
      return this.$store.getters['cart/totalItems'];
    },
    grandTotal() {
      return this.totalAmount + 199;
    },
  },
  methods: {
    formatPrice(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      return value;
    }
    if (Number.isInteger(value)) {
      return value.toString();
    } else {
      return value.toFixed(3).replace(/\.?0+$/, '');
    }
  },
    removeItem(productId) {
      this.$store.dispatch('cart/removeItem', productId);
    },
    updateQuantity(productId, quantity) {
      this.$store.dispatch('cart/updateQuantity', { productId, quantity });
    },
    increaseQuantity(productId) {
      this.$store.dispatch('cart/increaseQuantity', productId);
    },
    decreaseQuantity(productId) {
      this.$store.dispatch('cart/decreaseQuantity', productId);
    },
  },
};
</script>

<style scoped>
.page-container {
  text-align: center;
  margin-top: 10%;
}

.button {
  color: white;
  margin: 50px;
}

.quantity-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #555;
  border-radius: 50px;
  padding: 10px;
  width: 140px;
  height: 56px;
}

.quantity-box span {
  margin: 0 20px;
  font-size: 20px;
}

.product-img {
  width: 100px;
  height: 100px;
  max-width: 100px;
}

.trash-button{
  font-size: 13px;
  padding-top: 50px;
  padding-right: 55px;
}

.trash-button-text:hover {
  text-decoration: underline;
}

.v-btn:before {
  opacity: 0 !important;
}

.v-ripple__container {
  opacity: 0 !important;
}

.details {
  text-align: left;
  color: rgb(26, 25, 25);
  padding-left: 5px;
}

.address-card {
  margin-top: 90px;
  margin-bottom: 50px;
  margin-left: 10px;
  max-width: 500px;
  padding: 16px;
  background-color: #fff;
  color: black;
  text-align: left;
  padding: 40px 25px 40px 25px;
  border: 2px solid #f5f5f5;
  border-radius: 0px;
}

.title {
  font-size: 17px !important;
  font-weight: bold;
  margin: 0;
}

.subtitle {
  font-size: 13px;
  padding-top: 5px;
}

.add-button {
  background-color: #f5f5f5;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transition: background-color 0.3s;
}

</style>
