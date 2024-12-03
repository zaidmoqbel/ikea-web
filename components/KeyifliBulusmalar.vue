<template>
  <div>
     <div class="text-container" align="left" style="margin: 80px 98px 30px 98px">
        <h2 style="padding-bottom:20px ; ">Keyifli buluşmalar başlasın!</h2>
        <p style="padding-bottom:15px ;font-size: 0.83rem;">Geleneksel HAUGA yemek masası ve yemek sandalyeleri ile sofrayı
                                                            kurmanıza yardımcı olacak sofra ürünlerini tek bir yerde
                                                            depolayabileceğiniz HEMNES vitrin sayesinde sevdiklerinizle
                                                            birlikte vakit geçirmeye odaklanabilirsiniz.</p>
        <v-btn rounded outlined class="text-none hovering">
            Tüm yemek odası mobilyalarını inceleyin
        </v-btn>
    </div>

    <v-row style="margin-left: 65px; margin-right: 25px;">
      <v-col cols="6">
        <div class="image-parent">
          <img
            class="img"
            src="../assets/keyifli-imgs/hauga-beyaz-mutfak-masasi-takimi.png"
            alt=""
            style="width: 100%; height: auto; object-fit: cover;"
          >
          <div class="info-box" style="margin-left: 350px;">
            <h3 class="padd" style="background-color: #ef7d00;">Yeni</h3>
            <h3>HAUGA</h3>
            <h4>mutfak masası takımı,<br>beyaz</h4>
            <h3>9.995₺</h3>
            <v-btn
              rounded
              size="large"
              class="text-none"
              base-color="#0058a3"
            >
              <img src="../assets/add-to-basket.png" style="height: 24px;width: 24px;">Sepete Ekle
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-col cols="6">
        <div class="image-parent">
          <img
            class="img"
            src="../assets/keyifli-imgs/hemnes-kirmizi-vitrin.png"
            alt=""
            style="width: 100%; height: auto; object-fit: cover;"
          >
          <div class="info-box" style="margin-left: 350px;">
            <h4 class="padd" style="background-color: #00853e;"> Sürdürülebilir </h4>
            <h3>HEMNES</h3>
            <h4>vitrin, kırmızı vernikli-<br>açık kahverngi boyalı</h4>
            <h3>19.999₺</h3>
            <v-btn
              rounded
              size="large"
              class="text-none"
              base-color="#0058a3"
            >
              <img src="../assets/add-to-basket.png" style="height: 24px;width: 24px;">Sepete Ekle
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>


<style>

.text-container {
    font-family: 'Noto IKEA Latin Regular', sans-serif;
    color: #242424;
}

.info-box {
    text-align: left;
}

.info-box h3 ,h4{
    width: fit-content;

}

.padd {
    padding-left: 10px;
    padding-right: 10px;
}

</style>
