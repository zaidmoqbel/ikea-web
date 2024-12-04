<template>
  <div class="img-slider">
    <div class="slider" :style="sliderStyle">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="'Image ' + index"
      />
    </div>

    <button @click="prevImage" class="nav prev"> <img class="arrow-img" src="../assets/left-arrow.png" alt=""> </button>
    <button @click="nextImage" class="nav next"> <img class="arrow-img" src="../assets/right-arrow.png" alt="sdasd"> </button>

    <div class="indicators">
      <span
            v-for="(image, index) in images"
            :key="index"
            :class="{'active': index === currentIndex}"
            @click="goToImage(index)"
      ></span>
    </div>
  </div>

</template>


<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        require('@/assets/slider-imgs/slider1.png'),
        require('@/assets/slider-imgs/slider2.png'),
        require('@/assets/slider-imgs/slider3.png'),
        require('@/assets/slider-imgs/slider4.png'),
        require('@/assets/slider-imgs/slider5.png'),
      ],
      autoSlideInterval: null,
    };
  },computed:{
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: 'transform 0.5s ease-in-out',
      };
    },
  },
  methods: {
    prevImage() {
      this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
      this.resetAutoSlide();
    },
    nextImage() {
      this.currentIndex = (this.currentIndex === this.images.length -1) ? 0 : this.currentIndex + 1;
      this.resetAutoSlide();
    },
    goToImage(index) {
      this.currentIndex = index;
      this.resetAutoSlide();
    },
    autoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextImage();
      }, 3000);
    },
    resetAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.autoSlide();
    }
  },
  mounted(){
    this.autoSlide();
  },
  beforeUnmount(){
    clearInterval(this.autoSlideInterval);
  }
};
</script>

<style>
 .img-slider {
  padding-top: 100px;
  position: relative;
  margin: auto;
  overflow: hidden;
  cursor: pointer;
 }

 .img-slider:hover {
  button.nav {
    background-color: black;
    color: white;
    border-radius: 50%;
    font-size: 20px;
  }

  .arrow-img {
    width: 24px;
    height: 24px;
  }
 }

 .arrow-img {
    width: 0px;
    height: 0px;
  }

 .slider {
  width: 3200;
  height: 1250;
  display: flex;

 }

 .slider img {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
 }

 button.nav {
  padding: 10px 10px 5px 10px;
  cursor: pointer;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  }

  button.nav.prev {
    left: 30px;
  }

  button.nav.next {
    right: 30px;
  }

  .indicators {
    width: 100%;
    position: absolute;
    bottom: 40px;
    display: flex;
    justify-content: center;
  }

  .indicators span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #dddddd;
    margin: 0px 5px;
    cursor: pointer;
  }

  .indicators span.active {
    background: blue;
  }


</style>
