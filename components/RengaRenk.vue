<template>
  <div>
  <div class="text-container" align="left" style="margin: 90px 98px 30px 98px">
    <h2 style="padding-bottom:30px ;">Rengarenk koleksiyonlarımız ile tanışmanızın zamanı geldi!</h2>
    <v-btn rounded outlined class="text-none hovering" @click="buttonClick">
      Tüm koleksiyonlar için tıklayın
    </v-btn>
  </div>

  <div class="image-container">
    <v-sheet class="mx-auto" elevation="0" max-width="100%">
      <v-slide-group v-model="model" show-arrows style="margin-left: 40px; background: transparent;">
        <v-slide-group-item v-for="(image, index) in images" :key="index">
          <v-card :class="['ma-2']" height="555px" width="444px" style="border-radius:0; background: transparent; box-shadow: none;">
            <div class="d-flex fill-height align-center justify-center">
              <v-img :src="image" :alt="'Image ' + (index + 1)" height="100%" width="100%" cover></v-img>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
      <v-slider thumb-size="0" rounded="xs" style="margin-left: 98px; max-width: 89%"></v-slider>
    </v-sheet>
  </div>

  <div class="second-img-container">
    <v-row>
      <v-col cols="3"><img class="sec-img-parent" src="../assets/rengarenk-imgs/ana-sayfa-surdurulebilirlik-TR.png" alt=""></v-col>
      <v-col cols="3"><img class="sec-img-parent" src="../assets/rengarenk-imgs/ana-sayfa-sosyal-sorumluluk-TR.png" alt=""></v-col>
      <v-col cols="3"><img class="sec-img-parent" src="../assets/rengarenk-imgs/ana-sayfa-evde-guvenlik-TR.png" alt=""></v-col>
      <v-col cols="3"><img class="sec-img-parent" src="../assets/rengarenk-imgs/ana-sayfa-onemli-bilgilendirme-TR.png" alt=""></v-col>
    </v-row>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    model: [],
    images: [
      require('@/assets/rengarenk-imgs/vinterfint.png'),
      require('@/assets/rengarenk-imgs/skogsduva.png'),
      require('@/assets/rengarenk-imgs/mavinn.png'),
      require('@/assets/rengarenk-imgs/nytillverkad.png'),
      require('@/assets/rengarenk-imgs/broggan.png'),
      require('@/assets/rengarenk-imgs/tesammans.png'),
      require('@/assets/rengarenk-imgs/gokvalla.png'),
      require('@/assets/rengarenk-imgs/dajlien.png'),
      require('@/assets/rengarenk-imgs/aftonsparv.png'),
    ],
  }),
  methods: {
    buttonClick() {
      console.log('Button clicked');
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

.image-container:hover {
  cursor: pointer;
}

.second-img-container {
  margin-left: 95px;
  margin-right: 50px;
  margin-top: 60px;
}

.sec-img-parent {
  width: 283px;
  height: 97px;
}

.sec-img-parent:hover {
  cursor: pointer;
}
</style>
