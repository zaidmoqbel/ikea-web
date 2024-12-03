<template>
  <div>
    <div class="text-container" align="left" style="margin: 70px 98px 30px 98px">
        <h2 style="padding-bottom:20px ; ">VINTERFINT Koleksiyonu ile evinize sıcaklık katın</h2>
        <p style="padding-bottom:15px ;font-size: 0.83rem;">Karşınızda her ev için ideal olan VINTERFINT yılbaşı dekorasyonu ürünleri. Eski süslere veda edin ve daha eğlenceli yılbaşı dekorasyon ürünlerine merhaba deyin. En iyi kısmı ise düzgün bir şekilde depolandığında bir sonraki yıl da kullanabilirsiniz!</p>
        <v-btn rounded="xl" class="text-none hovering" outlined>
                Tüm çam ağaçları ve süsleri inceleyin
        </v-btn>
    </div>

    <div class="vinter-images-container" style="margin-right: 40px;">
        <v-row class="grid-images">
            <v-col cols="6" md="6">
                <div class="image-parent">
                    <video
                    src="../assets/main-imgs/cam-agaci-video.mp4"
                    controls
                    style="width: 455px; height: 663px; object-fit: cover; margin-left: 98px;"
                    loop
                    muted
                    ></video>
                </div>
            </v-col>
            <v-col cols="3">
                <div class="image-parent" style="position: relative;">
                    <img src="../assets/main-imgs/yilbasi-tr.png" alt="" style="height: 275px;width: 275px;">
                </div>
                <div class="image-parent" style="position: relative;">
                    <img src="../assets/main-imgs/agac.png" alt="" style="height: 378px;width: 275px;">
                    <div class="shoppable-image-dot"></div>
                </div>
            </v-col>
            <v-col cols="3">
                <div class="image-parent" style="position: relative;">
                    <img src="../assets/main-imgs/vinterfint-cok-renkli-agac.png" alt=""  style="height: 378px;width: 275px;">
                    <div class="shoppable-image-dot"></div>
                </div>
                <div class="image-parent" style="position: relative;">
                    <img src="../assets/main-imgs/vinterfint-siyah-noel-corabi.png" alt="" style="height: 275px;width: 275px;">
                </div>
            </v-col>
        </v-row>

    </div>
  </div>
</template>

<script>
export default{
    data() {
        return {
            infoVisible: false,
            infoText: 'This is a sample text.',
        };
    },
    methods: {
        showInfo(text) {
            this.infoVisible = true;
            this.infoText = text;
        },
        hideInfo() {
            this.infoVisible = false;
            this.infoText = '';
        }
    }
}
</script>

<style>

.text-container {
    font-family: 'Noto IKEA Latin Regular', sans-serif;
    color: #242424;
}

.hovering {
    font-size: 11px;
    color: black;
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


</style>
