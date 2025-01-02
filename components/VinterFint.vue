<template>
  <div>
    <div class="text-container" align="left" style="margin: 0px">
        <h2 style="padding-bottom:20px ; ">Nasıl bir gardıroba sahip olmak istersiniz?</h2>
        <p style="padding-bottom:15px ;font-size: 13px;">Kapaklı gardıroplar yatak odanızdan antrenize kadar bulundukları alanda doğrudan bir düzenleme etkisine sahiptir. Gardıroplarınızı alanınızda koordineli bir görünüm oluşturmak ve renk kontrastlarıyla ruh halinize uygun bir görünüm yaratmak için kullanın. Hangi tarzda bir gardırop seçerseniz seçin, dağınıklığı azaltabilir ve odanızda ferah bir his yaratabilirsiniz.</p>
        <v-btn rounded class="text-none hovering" outlined style="margin-bottom: 45px;">
                Tüm Kapaklı gardıropları inceleyin
        </v-btn>
    </div>

    <div class="vinter-images-container" style="margin-right: 40px;">
        <v-row class="grid-images">
            <v-col cols="6" md="6">
                <div class="image-parent">
                    <img
                    src="../assets/new/leftbig.png"
                    style="width: 555px; height: 663px; object-fit: cover;"
                    >
                    <div class="info-box">
                        <h3>KLEPPSTAD</h3>
                        <h4>gardırop, beyaz</h4>
                        <h2>4.099₺</h2>
                        <v-btn
                        rounded
                        size="large"
                        class="text-none"
                        style="font-weight: 500; background-color: #0058a3; color: white;"
                        ><img src="../assets/add-to-basket.png" style="height: 24px;width: 24px;">Sepete Ekle</v-btn>
                    </div>
                  </img>
                </div>
            </v-col>
            <v-col cols="3">
                <div class="image-parent" style="position: relative;">
                    <img src="../assets/new/centertop.png" alt="" style="height: 275px;width: 275px;">
                </div>
                <div class="image-parent" style="position: relative;">
                    <img src="../assets/new/centerbottom.png" alt="" style="height: 378px;width: 275px;">
                    <div class="shoppable-image-dot"></div>
                </div>
            </v-col>
            <v-col cols="3">
                <div class="image-parent" style="position: relative;">
                    <img src="../assets/new/righttop.png" alt=""  style="height: 378px;width: 275px;">
                    <div class="shoppable-image-dot"></div>
                </div>
                <div class="image-parent" style="position: relative;">
                    <img src="../assets/new/rightbottom.png" alt="" style="height: 275px;width: 275px;">
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
    font-size: 8px;
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

.info-box {
  margin-left: 30px;
  margin-bottom: 100px;
  color: black;
}



</style>
