<template>
  <div>
  <div class="text-container" align="left" style="margin: 70px 98px 30px 98px">
    <h2 style="padding-bottom:20px ; ">Evinizi yeni yıla hazırlayın</h2>
  </div>

  <v-sheet
    class="mx-auto"
    elevation="0"
    max-width="100%"
  >
    <v-slide-group
      v-model="model"
      show-arrows
      style="margin-left: 40px; background: transparent;"
    >
      <v-slide-group-item
        v-for="(image, index) in images"
        :key="index"
      >
        <v-card
          :class="['ma-2']"
          height="315.75"
          width="240.5"
          style="border-radius:0; background: transparent; box-shadow: none;"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-img
              :src="image.src"
              :alt="'Image ' + (index + 1)"
              height="100%"
              width="100%"
              cover
            ></v-img>
            <v-btn
            class="image-button text-none"
            @click="buttonClick(index)"
            rounded="xl"
            > {{ image.label }}
        </v-btn>

          </div>
        </v-card>

      </v-slide-group-item>

    </v-slide-group>
    <v-slider thumb-size="0" rounded="xs" style="margin-left: 98px; max-width: 89%"></v-slider>
  </v-sheet>
</div>
</template>

<script>
export default {
  data: () => ({
    model: [],
    images: [
      { src: require('@/assets/yeni-yil-slider/cam-agaci-ve-susler.png'),label: 'Çam Ağaçları ve Süsler'},
      { src: require('@/assets/yeni-yil-slider/yilbasi-susleri.png'),label: 'Yılbaş Süslemeler'},
      { src: require('@/assets/yeni-yil-slider/yilbasi-aydinlatmasi.png'),label: 'Yılbaşı Aydınlatmaları'},
      { src: require('@/assets/yeni-yil-slider/yilbasi-dekorasyon-urunleri.png'),label: 'Dekorasyon Ürünleri'},
      { src: require('@/assets/yeni-yil-slider/sofra-ve-pisirme-aksesuarlari.png'),label: 'Sofra ve Pişirme Aksesuarları'},
      { src: require('@/assets/yeni-yil-slider/mumlar-ve-mumluklar.png'),label: 'Mumlar ve Mumluklar'},
      { src: require('@/assets/yeni-yil-slider/hediye-aksesuarlari.png'),label: 'Hediye Aksesuarları'},
      { src: require('@/assets/yeni-yil-slider/yilbasi-tekstili.png'),label: 'Yılbaşı Tekstilli Ürünleri'},
      { src: require('@/assets/yeni-yil-slider/yapay-bitkiler.png'), label: 'Yılbaşı için Yapay Bitkiler'},
    ],
  }),

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&display=swap');


.text-container {
  font-family: 'Noto IKEA Latin Regular', sans-serif;
  color: #242424;
}

.image-button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Noto IKEA Latin Regular', sans-serif;
    font-weight: 600;
    font-size: 12px;
}
</style>
