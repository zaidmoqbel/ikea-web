<template>
  <div>
    <div class="text-container" align="left" style="margin: 40px 98px 30px 0px">
        <h2 style="padding-bottom:20px ; ">Yeni yılı aksesuarlarla karşılayın</h2>
        <p style="padding-bottom:15px ;font-size: 0.85rem;">İndirimli yeni yıl ürünlerimizi keşfetmeye başlayın. Çam ağacınızın üzerini süsleyebilir, yeni yıl sofranızı mumlarla özelleştirebilirsiniz.</p>
        <v-btn rounded outlined class="text-none hovering">
          Tüm indirimli yılbaşı ürünleri için tıklayın
        </v-btn>
    </div>

    <div class="images-container">
        <v-row>

            <v-col cols="6" md="6">
                <div class="image-parent">
                    <img src="../assets/dekorasyon-imgs/vinterfint-karisik-renkli-agac-susu.png" alt="" style="width: 555px; height: 663px; object-fit: cover;">
                    <div class="info-box">
                      <h4 style="background-color: #FFC000; font-size:15px ;">FIRSAT GÜNLERİ</h4>
                        <h3>VINTERFINT</h3>
                        <h4>ağaç süsü, karışık renkler</h4>
                        <h5 style="text-decoration: line-through;">499₺</h5>
                        <h2>429₺</h2>
                        <v-btn
                        rounded
                        size="large"
                        class="text-none"
                        style="font-weight: 500; background-color: #0058a3; color: white;"
                        ><img src="../assets/add-to-basket.png" style="height: 24px;width: 24px;">Sepete Ekle</v-btn>
                    </div>
                </div>
            </v-col>

            <v-col cols="3">
                <div class="image-parent" >
                    <img src="../assets/dekorasyon-imgs/vinterfint-cam-11-cm-mumluk.png" alt="" style="height: 275px;width: 275px;">
                </div>
                <div class="image-parent" >
                    <img src="../assets/dekorasyon-imgs/vinterfint-hayvan-figurlu-agac-susu.png" alt="" style="height: 378px;width: 275px;">
                </div>
            </v-col>
            <v-col cols="3">
                <div class="image-parent" >
                    <img src="../assets/dekorasyon-imgs/vinterfint-naturel-takvim.png" alt="" style="height: 378px;width: 275px;">
                </div>
                <div class="image-parent" >
                    <img src="../assets/dekorasyon-imgs/vinterfint-kirmizi-yesil-agac-susu.png" alt="" style="height: 275px;width: 275px;">
                </div>
            </v-col>
        </v-row>
    </div>

    <div class="yilbasi-container" align="left" style="margin: 70px 98px 30px 0px">
        <h2 style="padding-bottom:20px ;margin-bottom: 40px ">Yılbaşı hediye önerileri</h2>
        <v-row class="boxes" style="gap: 0px;">
            <v-col
                cols="4"
                class="inner-box"
                :class="{ 'hovered': hoveredBox ===1 }"
                @mouseover="hoveredBox = 1"
                @mouseleave="hoveredBox = null"
                style="background-color: #ab1818; height: 260px; width: 400px;"
                >
                <div>
                500 TL Altı Yılbaşı dekorasyon <br> ürünleri
                </div>
                <div style="padding-top: 20px;">
                <v-btn size="x-large" icon><v-icon>mdi-arrow-right</v-icon></v-btn>
                </div>
            </v-col>

            <v-col
                cols="4"
                class="inner-box"
                :class="{ 'hovered': hoveredBox ===2 }"
                @mouseover="hoveredBox = 2"
                @mouseleave="hoveredBox = null"
                style="background-color: #0f4811; height: 260px; width: 400px;"
                >
                <div>
                1.000 TL Altı Yılbaşı dekorasyon <br> ürünleri
                </div>
                <div style="padding-top: 20px;">
                    <v-btn size="x-large" icon><v-icon>mdi-arrow-right</v-icon></v-btn>
                 </div>
            </v-col>

            <v-col
                cols="4"
                class="inner-box"
                :class="{ 'hovered': hoveredBox ===3 }"
                @mouseover="hoveredBox = 3"
                @mouseleave="hoveredBox = null"
                style="background-color: #ab1818; height: 260px; width: 400px;"
                >
                <div>
                1.500 TL Altı Yılbaşı dekorasyon <br> ürünleri
                </div>
                <div style="padding-top: 20px;">
                    <v-btn size="x-large" icon><v-icon>mdi-arrow-right</v-icon></v-btn>
                </div>
            </v-col>
        </v-row>

    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            hoveredBox: null
        };
    }
}
</script>

<style>

.text-container , .yilbasi-container{
    font-family: 'Noto IKEA Latin Regular', sans-serif;
    color: #242424;
}

.image-parent {
    position: relative;
}

.info-box {
    position: absolute;
    bottom: 0;
    left: 0;
    width: fit-content;
    padding: 10px 30px 90px 10px;
    margin-left: 230px;
    color: #fff;
    text-align: center;
    font-family: 'Noto IKEA Latin Regular', sans-serif;
}

.info-box h3,
.info-box h4 {
    margin: 5px 0;
}

.boxes {
    color: white;
    text-align: left;
}

.inner-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  font-weight: 600;
  font-size: 23px;
  padding-left: 50px;
  padding-top: 40px;
  line-height: 40px;
  transition: text-decoration 0.3s;
}

.inner-box.hovered {
    text-decoration: underline;
    cursor: pointer;
}

</style>
