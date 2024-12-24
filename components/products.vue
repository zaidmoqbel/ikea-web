<template>

  <v-container class="py-5">
    <v-row dense justify="space-between">
      <v-col cols="12" sm="6" md="3" v-for="(product, index) in products" :key="product.id">

        <v-card class="hover-card" elevation="0">
          <div class="image-wrapper">
            <v-img
              :src="product.image1.default"
              alt="Default img"
              class="default-img"
              contain
            ></v-img>
            <v-img
              :src="product.image1.hover"
              alt="Hover img"
              class="hover-img"
              contain
            ></v-img>
          </div>

          <v-card-text>
            <h3 class="card-title">{{ product.title }}</h3>
            <p class="card-description">{{ product.description }}</p>
            <p class="price">{{ new Intl.NumberFormat('tr-TR').format(product.price) }}₺</p>
            <v-btn style="background-color: #0058a3;" icon @click="toggleCartIcon(product)"><v-icon color="white">{{ product.isAdded ? "mdi-check" : "mdi-basket-plus" }}</v-icon></v-btn>

            <div v-if="product.options && product.options.length" class="more-options">
              <p>Daha fazla seçenek</p>
              <div class="option-images">
                <img
                  v-for="(option, i) in product.options.slice(0, 3)"
                  :src="option"
                  :key="i"
                  alt="Option image"
                  class="option-image"
                />
                <div v-if="product.options.length > 3" class="more-count">
                  +{{ product.options.length - 3 }}
                </div>
              </div>
            </div>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <div
    v-if="popup.visible"
    class="popup-notification"
    :style="{ right: '100px', bottom: '450px', top: '100px',left: '900px' }"
  >
    {{ popup.message }}
    <v-btn text @click="goToCart" style="color: white;  font-size: 0.6rem;" class="text-none goster" elevation="0" plain>Göster</v-btn>
    <v-btn text @click="popup.visible = false" style="color: white;  font-size: 0.6rem;" elevation="0" plain>X</v-btn>
  </div>
  </v-container>

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
      products: [
        {
          isAdded: false,
          id: 16,
          title: "HYLTARP",
          description: "2'li kanepe ve uzanma koltuğu",
          price: 39999,
          image:  require('@/assets/kanepler-imgs/products-imgs/p1.png'),
          image1: {
            default: require('@/assets/kanepler-imgs/products-imgs/p1.png'),
            hover: require('@/assets/kanepler-imgs/products-imgs/p1-h.png'),
          },
          options: [
            require('@/assets/kanepler-imgs/products-imgs/p1.png'),
            require('@/assets/kanepler-imgs/product-options/opt1.png'),
            require('@/assets/kanepler-imgs/product-options/opt2.png'),
            require('@/assets/kanepler-imgs/products-imgs/p1.png'),
            require('@/assets/kanepler-imgs/products-imgs/p1.png'),
          ],
        },
        {
          isAdded: false,
          id: 17,
          title: "KIVIK",
          description: "2'li kanepe kılıfı",
          price: 5499,
          image: require('@/assets/kanepler-imgs/products-imgs/p2.png'),
          image1: {
            default: require('@/assets/kanepler-imgs/products-imgs/p2.png'),
            hover: require('@/assets/kanepler-imgs/products-imgs/p2-h.png'),
          },
          options: [
            require('@/assets/kanepler-imgs/product-options/opt2-1.png'),
            require('@/assets/kanepler-imgs/product-options/opt2-2.png'),
            require('@/assets/kanepler-imgs/product-options/opt2-3.png'),
            require('@/assets/kanepler-imgs/products-imgs/p1.png'),
          ],
        },
        {
          isAdded: false,
          id: 18,
          title: "AFJALL",
          description: "Çift kişilik yatak, 140x200 cm",
          price: 5499,
          image: require('@/assets/kanepler-imgs/products-imgs/p3.png'),
          image1: {
            default: require('@/assets/kanepler-imgs/products-imgs/p3.png'),
            hover: require('@/assets/kanepler-imgs/products-imgs/p3-h.png'),
          },
          options: []
        },
        {
          isAdded: false,
          id: 19,
          title: "VISKAFORS",
          description: "2'li Kanepe",
          price: 35999,
          image: require('@/assets/kanepler-imgs/products-imgs/p4.png'),
          image1: {
            default: require('@/assets/kanepler-imgs/products-imgs/p4.png'),
            hover: require('@/assets/kanepler-imgs/products-imgs/p4-h.png'),
          },
          options: [
            require('@/assets/kanepler-imgs/product-options/opt3-1.png'),
            require('@/assets/kanepler-imgs/product-options/opt3-2.png'),
            require('@/assets/kanepler-imgs/product-options/opt3-3.png'),
          ],
        },
        {
          isAdded: false,
          id: 20,
          title: "RÖDEBY ",
          description: "kolçak tepsisi",
          price: 399,
          image: require('@/assets/kanepler-imgs/products-imgs/r2-p1.png'),
          image1: {
            default: require('@/assets/kanepler-imgs/products-imgs/r2-p1.png'),
            hover: require('@/assets/kanepler-imgs/products-imgs/r2-p1-h.png'),
          },
          options: [
            require('@/assets/kanepler-imgs/product-options/r2-1-opt1.png'),
            require('@/assets/kanepler-imgs/product-options/r2-1-opt2.png'),
          ],
        },
        {
          isAdded: false,
          id: 21,
          title: "EKENÄSET ",
          description: "3'lü kanepe",
          price: 17999,
          image: require('@/assets/kanepler-imgs/products-imgs/r2-p2.png'),
          image1: {
            default: require('@/assets/kanepler-imgs/products-imgs/r2-p2.png'),
            hover: require('@/assets/kanepler-imgs/products-imgs/r2-p2-h.png'),
          },
          options: [
            require('@/assets/kanepler-imgs/product-options/r2-2-opt1.png'),
            require('@/assets/kanepler-imgs/product-options/r2-2-opt2.png'),
          ],
        },
        {
          isAdded: false,
          id: 22,
          title: "AFJALL ",
          description: "çift kişilik yatak, 140x200 cm",
          price: 5499,
          image: require('@/assets/kanepler-imgs/products-imgs/r2-p3.png'),
          image1: {
            default: require('@/assets/kanepler-imgs/products-imgs/r2-p3.png'),
            hover: require('@/assets/kanepler-imgs/products-imgs/r2-p3-h.png'),
          },
          options: [],
        },
        {
          isAdded: false,
          id: 23,
          title: "KIVIK ",
          description: "2'li kanepe kılıfı",
          price: 5499,
          image:require('@/assets/kanepler-imgs/products-imgs/r2-p4.png'),
          image1: {
            default: require('@/assets/kanepler-imgs/products-imgs/r2-p4.png'),
            hover: require('@/assets/kanepler-imgs/products-imgs/r2-p4-h.png'),
          },
          options: [
            require('@/assets/kanepler-imgs/product-options/r2-4-opt1.png'),
            require('@/assets/kanepler-imgs/product-options/r2-4-opt2.png'),
            require('@/assets/kanepler-imgs/product-options/r2-4-opt3.png'),
            require('@/assets/kanepler-imgs/product-options/r2-4-opt3.png'),
          ],
        },
      ],
    };
  },
  props: ['product'],
      methods: {
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

.hover-card {
  cursor: pointer;
}

.image-wrapper {
  position: relative;
  overflow: hidden;
}

.hover-img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.hover-card:hover .default-img {
  opacity: 0;
}

.hover-card:hover .hover-img {
  opacity: 1;
}

.hover-card:hover .card-title{
  text-decoration: underline;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #1b1b1b;
}

.card-description {
  font-sizE: 0.95em;
  font-weight: bold;
  margin-bottom: 40px;
  color: #3f3e3e;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
}

.more-options {
  margin-top: 16px;
}

.more-options p {
  font-size: 0.8rem;
  color: black;
  margin-bottom: 8px;
}

.option-images {
  display: flex;
  align-items: center;
  gap: 4px;
}

.option-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.more-count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  font-size: 0.9rem;
  font-weight: bold;
  color: #555;
  border: 1px solid #ddd;
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


</style>
