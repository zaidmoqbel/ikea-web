<template>
  <div>
     <div class="text-container" align="left" style="margin: 80px 98px 30px 0px">
        <h2 style="padding-bottom:20px ; ">Çocuklar için rahat bir karyola</h2>
        <p style="padding-bottom:15px ;font-size: 0.83rem;">Çocuğunuzun güvenli bir şekilde kendi yatağında olduğunu bilmek, iyi bir gece uykusu uyumanıza yardımcı olacak en iyi koşullardan biridir. Çocuğunuzun karyolası küçük mü geliyor? O zaman karyolayı uzatabilirsiniz veya tabii ki daha büyük bir karyolaya geçebilirsiniz. Bu da ailedeki herkes için geçerli olan bir başka iyi uyku çözümüdür.</p>
        <v-btn rounded outlined class="text-none hovering">
          Tüm çocuk karyolalarını inceleyin
        </v-btn>
    </div>

    <v-row style=" margin-right: 25px;">
      <v-col cols="6">
        <div class="image-parent">
          <img
            class="img"
            src="../assets/new/left.png"
            alt=""
            style="width: 100%; height: auto; object-fit: cover;"
          >
          <div class="info-box" style="margin-left: 50px;margin-bottom: 280px; color: black;">
            <h3>SUNDVIK/LURÖY</h3>
            <h4>uzayabilen çocuk <br> karyolası, beyaz</h4>
            <h3>9.699₺</h3>
            <v-btn
              rounded
              size="large"
              class="text-none"
              style="background-color: #0058a3; color: white;"
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
            src="../assets/new/right.png"
            alt=""
            style="width: 100%; height: auto; object-fit: cover;"
          >
          <div class="info-box" style="margin-left: 0px;">
            <h4 class="padd" style="background-color: #ef7d00;"> Yeni </h4>
            <h3>SKOGSDUVA</h3>
            <h4>çocuk nevresim takımı,<br> beyaz-yeşil</h4>
            <h3>599₺</h3>
            <v-btn
              rounded
              size="large"
              class="text-none"
              style="background-color: #0058a3; color: white;"
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
    color: white;
}

.info-box h3 ,h4{
    width: fit-content;

}

.padd {
    padding-left: 10px;
    padding-right: 10px;
}

</style>
