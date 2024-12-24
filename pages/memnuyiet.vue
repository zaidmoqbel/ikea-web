<template>

  <div class="page-container">

    <nav class="breadcrumb">
      <ul>
        <li><a href="/">Ana Sayfa</a></li>
        <li><a href="/bizeulasin">Müşteri Hizmetleri</a></li>
        <li><span>Müşteri Memnuniyet Anketi</span></li>
      </ul>
    </nav>

    <h1 style="padding-bottom: 60px;">Geri Bildirim ve Müşteri Hizmetleri İletişim Formu</h1>
    <div class="border-line"></div>

    <v-row class="row">
      <v-col cols="6">
        <h3 style="padding-bottom: 30px;">Müşteri Memnuniyet Anketi</h3>
        <img src="../assets/musteri-memnuniyet/musteri-anketi.jpg" alt="musteri-anketi" style="width: 550px;padding-bottom:50px;">
        <v-btn
        outlined
        rounded
        class="text-none"
        @click="goto('https://www.ikea.com.tr/musteri-memnuniyeti-anketi')"
        ><span class="text-btn">Geri Bildirim vermek için tıklayın</span></v-btn>
      </v-col>
      <v-col cols="6">
        <h3 style="padding-bottom: 30px;">Müşteri Hizmetleri İletişim Formu</h3>
        <img src="../assets/musteri-memnuniyet/message.jpg" alt="message" style="width: 550px;padding-bottom:50px;">
        <v-btn
        outlined
        rounded
        class="text-none"
        @click="goToContact"
        ><span class="text-btn">Bize ulaşmak için tıklayın</span></v-btn>
      </v-col>
    </v-row>

  </div>

</template>

<script>
export default {
  methods: {
    goToContact() {
      this.$router.push('/bizeulasin')
    },
    goto(url) {
      window.open(url, '_blank');
    },
  }
};
</script>

<style scoped>

.breadcrumb {
font-size: 14px;
color: #666;
margin-left: 50px;
padding-top: 10px;
padding-bottom: 30px;
}

.breadcrumb ul {
list-style: none;
padding: 0;
margin: 0;
display: flex;
gap: 5px;
}

.breadcrumb li {
display: inline;
}

.breadcrumb a {
text-decoration: underline;
color:#666
}

.breadcrumb a:hover {
text-decoration: none;
}

.breadcrumb li::after {
content: "›";
margin: 0 5px;
}

.breadcrumb li:last-child::after {
content: "";
}

.page-container {
  text-align: center;

}

.border-line {
    border-bottom: 2px solid #E5E4E2;
    width:100%;
    margin-top: 30px;
}

.row {
  padding-top: 40px;
}

.text-btn {
  font-weight: bold;
  font-size: 12px;

}
</style>
