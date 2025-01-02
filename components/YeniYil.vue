<template>
  <div>
  <div class="text-container" align="left" style="margin: 70px 98px 30px 0px">
    <h2 style="padding-bottom:20px ; ">Depolama alanlarınızı genişletmek için kategorilerimizi keşfedin</h2>
  </div>

  <v-sheet
    class="mx-auto"
    elevation="0"
    max-width="100%"
  >
    <v-slide-group
      v-model="model"
      show-arrows
      style=" background: transparent;"
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
            rounded
            > {{ image.label }}
        </v-btn>

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
      { src: require('@/assets/new/1.png'),label: 'Gardıroplar'},
      { src: require('@/assets/new/2.png'),label: 'Açık Depolama Sistemleri'},
      { src: require('@/assets/new/3.png'),label: 'Şifoneyerler'},
      { src: require('@/assets/new/4.png'),label: 'Sepetler'},
      { src: require('@/assets/new/5.png'),label: 'Kutular'},
      { src: require('@/assets/new/6.png'),label: 'Askılar ve Askılıklar'},
      { src: require('@/assets/new/7.png'),label: 'Hurçlar'},
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
