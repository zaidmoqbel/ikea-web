<template>
  <div>
    <div class="text-container" align="left" style="margin: 70px 98px 30px 98px">
      <h2 style="padding-bottom:20px ; ">Hizmetler</h2>
    </div>

    <v-sheet class="mx-auto" elevation="0" max-width="100%" style="margin-bottom: 60px;">
      <v-slide-group v-model="model" show-arrows style="margin-left: 40px; background: transparent;">
        <v-slide-group-item v-for="(image, index) in images" :key="index">
          <v-card :class="['ma-2']" height="320.453" width="240.5" style="border-radius:0; background: transparent; box-shadow: none;">
            <div class="d-flex fill-height align-center justify-center">
              <v-img :src="image.src" :alt="'Image ' + (index + 1)" height="100%" width="100%" cover></v-img>
              <v-btn class="image-button text-none" @click="buttonClick(index)" rounded="xl">{{ image.label }}</v-btn>
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
      { src: require('@/assets/hizmetler-imgs/anasayfa-hizmetler-magazadan-teslimat.png'), label: 'Mağazadan Teslim Hizmeti' },
      { src: require('@/assets/hizmetler-imgs/anasayfa-hizmetler-montaj.png'), label: 'Montaj Hizmeti' },
      { src: require('@/assets/hizmetler-imgs/anasayfa-hizmetler-planlayicilar.png'), label: 'Planlayıcılar' },
      { src: require('@/assets/hizmetler-imgs/anasayfa-hizmetler-iptal-iade.png'), label: 'İptal & İade' },
      { src: require('@/assets/hizmetler-imgs/anasayfa-hizmetler-odeme-secenekleri.png'), label: 'Ödeme Seçenekleri' },
      { src: require('@/assets/hizmetler-imgs/anasayfa-hizmetler-hediye-kart.png'), label: 'Hediye Kart ve Dijital Kupon' },
      { src: require('@/assets/hizmetler-imgs/anasayfa-hizmetler-nakliye.png'), label: 'Nakliye Hizmeti' },
      { src: require('@/assets/hizmetler-imgs/anasayfa-hizmetler-mutfak-olcum.png'), label: 'Mutfak Montaj ve Ölçüm Hizmeti' },
      { src: require('@/assets/hizmetler-imgs/anasayfa-hizmetler-dikis.png'), label: 'Dikiş Hizmeti' },
      { src: require('@/assets/hizmetler-imgs/anasayfa-hizmetler-urun-toplama.png'), label: 'Ürün Toplama ve Nakliye Hizmeti' },
      { src: require('@/assets/hizmetler-imgs/anasayfa-hizmetler-yedek-parca.png'), label: 'Yedek Parça' },
    ],
  }),
  methods: {
    buttonClick(index) {
      console.log(`Button ${index} clicked`);
    },
  },
};
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
  box-shadow: none;
}

.image-button:hover {
    box-shadow: none;
}
</style>
