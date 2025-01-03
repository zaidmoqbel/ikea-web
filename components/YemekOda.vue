<template>
  <div>
  <div class="text-container" align="left" style="margin: 70px 98px 30px 0px">
    <h2 style="padding-bottom:20px ; ">Çocuk odası için tamamlayıcı mobilyalar</h2>
  </div>

  <v-sheet class="mx-auto" elevation="0" max-width="100%">
    <v-slide-group v-model="model" show-arrows style="background: transparent;">
      <v-slide-group-item v-for="(image, index) in images" :key="index">
        <v-card :class="['ma-2']" height="315.75" width="240.5" style="border-radius:0; background: transparent; box-shadow: none;">
          <div class="d-flex fill-height align-center justify-center">
            <v-img :src="image.src" :alt="'Image ' + (index + 1)" height="100%" width="100%" cover></v-img>
            <v-btn class="image-button text-none" @click="buttonClick(index)" rounded small>{{ image.label }}</v-btn>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</div>
</template>

<script>
export default {
  data: () => ({
    model: [],
    images: [
      { src: require('@/assets/new/c1.png'), label: 'Ranzalar' },
      { src: require('@/assets/new/c2.png'), label: 'Çocuk Yatakları' },
      { src: require('@/assets/new/c3.png'), label: 'Çocuk Tekstili' },
      { src: require('@/assets/new/c4.png'), label: 'Çocuk Masa Sandalye Takımları' },
      { src: require('@/assets/new/c5.png'), label: 'Çocuk Oyuncakları' },
      { src: require('@/assets/new/c6.png'), label: 'Çocuk Odası Aydınlatmaları' },
      { src: require('@/assets/new/c7.png'), label: 'SMASTAD Sistemleri' },
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
  font-weight: 500;
  font-size: 8px;
}
</style>
