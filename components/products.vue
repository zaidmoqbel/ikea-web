<template>

  <v-container class="py-5">
    <v-row dense justify="space-between">
      <v-col cols="12" sm="6" md="3" v-for="(product, index) in products" :key="index">

        <v-card class="hover-card" elevation="0">
          <div class="image-wrapper">
            <v-img
              :src="product.image.default"
              alt="Default img"
              class="default-img"
              contain
            ></v-img>
            <v-img
              :src="product.image.hover"
              alt="Hover img"
              class="hover-img"
              contain
            ></v-img>
          </div>

          <v-card-text>
            <h3 class="card-title">{{ product.title }}</h3>
            <p class="card-description">{{ product.description }}</p>
            <p class="price">{{ product.price }}₺</p>
            <v-btn style="background-color: #0058a3;" icon><v-icon color="white">mdi-basket-plus</v-icon></v-btn>

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
  </v-container>

</template>

<script>

export default {
  data() {
    return {
      products: [
        {
          title: "HYLTARP",
          description: "2'li kanepe ve uzanma koltuğu",
          price: "39.999",
          image: {
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
          title: "KIVIK",
          description: "2'li kanepe kılıfı",
          price: "5.499",
          image: {
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
          title: "AFJALL",
          description: "Çift kişilik yatak, 140x200 cm",
          price: "5.499",
          image: {
            default: require('@/assets/kanepler-imgs/products-imgs/p3.png'),
            hover: require('@/assets/kanepler-imgs/products-imgs/p3-h.png'),
          },
          options: []
        },
        {
          title: "VISKAFORS",
          description: "2'li Kanepe",
          price: "35.999",
          image: {
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
          title: "RÖDEBY ",
          description: "kolçak tepsisi",
          price: "399",
          image: {
            default: require('@/assets/kanepler-imgs/products-imgs/r2-p1.png'),
            hover: require('@/assets/kanepler-imgs/products-imgs/r2-p1-h.png'),
          },
          options: [
            require('@/assets/kanepler-imgs/product-options/r2-1-opt1.png'),
            require('@/assets/kanepler-imgs/product-options/r2-1-opt2.png'),
          ],
        },
        {
          title: "EKENÄSET ",
          description: "3'lü kanepe",
          price: "17.999",
          image: {
            default: require('@/assets/kanepler-imgs/products-imgs/r2-p2.png'),
            hover: require('@/assets/kanepler-imgs/products-imgs/r2-p2-h.png'),
          },
          options: [
            require('@/assets/kanepler-imgs/product-options/r2-2-opt1.png'),
            require('@/assets/kanepler-imgs/product-options/r2-2-opt2.png'),
          ],
        },
        {
          title: "AFJALL ",
          description: "çift kişilik yatak, 140x200 cm",
          price: "5.499",
          image: {
            default: require('@/assets/kanepler-imgs/products-imgs/r2-p3.png'),
            hover: require('@/assets/kanepler-imgs/products-imgs/r2-p3-h.png'),
          },
          options: [],
        },
        {
          title: "KIVIK ",
          description: "2'li kanepe kılıfı",
          price: "5.499",
          image: {
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

</style>
