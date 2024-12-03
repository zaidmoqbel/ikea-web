<template>

  <div class="main-container" >

      <v-row>
          <v-col cols="6" style="border: 1px solid #ccc; padding: 60px; border-radius: 10px; margin-bottom: 60px;">

              <h2 class="hej-class"> <span style="color: #f26a2f;">IKEA Aile Hesabınız</span> Bir Tık Uzağınızda!</h2>
              <p style="padding-top: 20px; font-size: 1.1rem;">IKEA Aile üyeliğiniz ile; iyi tasarımlı, kullanışlı ve kaliteli binlerce mobilya ve ev aksesuarı alışverişinizi kolayca ve hızla tamamlayın.</p>
              <p style="padding-top: 20px; font-size: 1.1rem;">IKEA Aile hesabınıza giriş yaparak bilgilerinize erişebilir ve güncelleyebilir, siparişlerinizi ve kuponlarınızı takip edebilir, oluşturduğunuz favori listelerini kaydedip e-posta ile gönderebilir, IKEA Aile barkodunuzu ve paranızı görüntüleyebilir, IKEA’daki yenilik ve kampanyalardan haberdar olabilirsiniz.</p>
              <p style="padding-top: 20px; font-size: 1.1rem;">Henüz IKEA Aile üyesi değilseniz; üyeliğinizi oluşturabilir, IKEA Aile avantajlarından faydalanmaya hemen başlayabilirsiniz.</p>

            </v-col>


          <v-col cols="4" style="margin-left: 60px; margin-top: 70px;">
              <div class="header" style="line-height: 100px; font-weight: bolder; font-size: 0.9rem; color: black; "> <h2>Üye Girişi / Üye Ol</h2> </div>
                <div>
                  <v-label class="fill-box">Cep telefonu</v-label>
                  <v-textarea
                        hint="Cep telefon numaranızı başında 0 olmadan giriniz."
                        persistent-hint
                        row-height="15"
                        rows="1"
                        outlined
                        auto-grow
                        :placeholder="isHovered || isFocused ? '___ ___ __ __' : ''"
                        @mouseenter="isHovered = true"
                        @mouseleave="isHovered = false"
                        @focus="isFocused = true"
                        @blur="isFocused = false"
                        @keypress="onlyAllowNumbers"
                        :maxlength="10"
                        class="email-box"
                    ></v-textarea>


              <v-btn rounded size="large" style="width: 384.656px;height: 54px; margin-top: 40px;" class="text-none " color="#0058a3" dark>Devam Et</v-btn>
              <div class="yardim">Yardıma İhtiyacım Var</div>
            </div>
            </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  data() {
      return {
        isHovered: false,
        isFocused: false,
      };
  },
  methods: {
    onlyAllowNumbers(event){
            const char = String.fromCharCode(event. which);
            if (!/[0-9]/.test(char)) {
                event.preventDefault();
            }
     }
}}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&display=swap');

.main-container {
  text-align: left;
  margin-left: 13%;
  margin-top: 60px;
  font-family: 'Noto IKEA Latin Regular', sans-serif;
  color: #242424;
}

.hej-class {
  font-size: 2.3rem;
}

.fill-box {
  font-size: 15px;
  line-height: 45px;
  color: #141414;
  font-weight: bold;
}

.yardim {
  color: black;
  text-decoration: underline;
  padding-left:25%;
  padding-top: 30px;
  text-align: center;
  font-weight: bolder;
}

.yardim:hover {
  color: #0058a3;
  cursor: pointer;
}


</style>
