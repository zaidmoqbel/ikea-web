<template>
    <div class="app-footer">
        <v-footer color=grey-lighten-4 absolute class="pt-8">
            <v-container>
                <v-row>
                    <v-col cols="3 text-left" >
                        <v-card elevation="0" color="transparent" >
                            <v-card-title style="font-size: 20px; font-weight: 700; color:#3b3a3a;" >IKEA Aile</v-card-title>
                            <v-card-text class="pt-4 pb-5" style="color: #242424;">IKEA Aile üyeliğiniz ile her alışverişinizde IKEA Aile Para kazanın ve kampanyaları kaçırmayın.</v-card-text>
                            <v-btn rounded="xl" size="large" class="card-btn text-none">Aile Kart Başvurusu</v-btn>
                                <v-card elevation="0" color="transparent">
                                    <v-card-title style="font-size: 20px; font-weight: 700; color:#3b3a3a; padding-top: 40px;">IKEA Kurumsal Satış</v-card-title>
                                    <v-card-text class="pt-4 pb-5" style="color: #242424;">İş yeri mobilya ve aksesuar alışverişleriniz IKEA Kurumsal Kart ile daha hesaplı.</v-card-text>
                                    <v-btn rounded="xl" size="large" class="card-btn text-none ">Hemen Başvurun</v-btn>
                                </v-card>
                        </v-card>
                    </v-col>
                    <v-col cols="2.5 text-left">
                        <v-card elevation="0" color="transparent">
                            <v-card-title style="font-size: 20px; font-weight: 700; color:#3b3a3a;">Popüler Kategoriler</v-card-title>
                            <v-card-text class="card pt-4 pb-3" style="color: #242424;">Yatak Odası</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Oturma Odası</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Yemek Odası</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Çalışma Odası</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Çocuk Mobilyaları</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Dekorasyon</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Züccaciye</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="1.3 text-left">
                        <v-card elevation="0" color="transparent">
                            <v-card-title style="font-size: 20px; font-weight: 700; color:#3b3a3a;">Hakkımızda</v-card-title>
                            <v-card-text class="card pt-4 pb-3" style="color: #242424;">IKEA Konsepti</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">IKEA'da Alışveriş</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Sosyal Sorumluluk Projeleri</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Evde Güvenlik</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">IKEA’da Kariyer</v-card-text>                        
                        </v-card>
                    </v-col>
                    <v-col cols="2.5 text-left">
                        <v-card elevation="0" color="transparent">
                            <v-card-title style="font-size: 20px; font-weight: 700; color:#3b3a3a;">Müşteri Hizmetleri</v-card-title>
                            <v-card-text class="card pt-4 pb-3" style="color: #242424;">Garanti Koşulları</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">İade Politikası</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">İade/Değişim Talebi</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Sıkça Sorulan Sorular</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Stok Sorgula</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Öneri ve Şikayet İçin Bize Ulaşın</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Müşteri Memnuniyet Anketi</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="2 text-left">
                        <v-card elevation="0" color="transparent">
                            <v-card-title style="font-size: 20px; font-weight: 700; color:#3b3a3a;">Diğer</v-card-title>
                            <v-card-text class="card pt-4 pb-3" style="color: #242424;">Size En Yakın IKEA</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">IKEA Mobil</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">İnternetten Alışveriş</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Planlayıcılar</v-card-text>
                            <v-card-text class="card pt-0 pb-3" style="color: #242424;">Hizmetler</v-card-text> 
                        </v-card>
                    </v-col>
                </v-row>

                <v-row class="footer-icons py-4">
                    <v-btn variant="outlined" class="change-icon" icon="mdi-facebook" size="small"></v-btn>
                    <v-btn variant="outlined" class="change-icon" icon="mdi-twitter" size="small"></v-btn>
                    <v-btn variant="outlined" class="change-icon" icon="mdi-instagram" size="small"></v-btn>
                    <v-btn variant="outlined" class="change-icon" icon="mdi-pinterest" size="small"></v-btn>
                    <v-btn variant="outlined" class="change-icon" icon="mdi-youtube" size="small"></v-btn>
                    <v-btn variant="outlined" class="change-icon" icon="mdi-linkedin" size="small"></v-btn>
                    <img src="../../assets/footer-imgs/secure.png" style="height:34px;width:124px;">
                    <img src="@/assets/footer-imgs/pci.png" style="height:34px;width:70px;">
                    <img class="qr-pic" src="@/assets/footer-imgs/qr.png" style="height:35px;width:35px;">
                </v-row>
                
                <div class="border-line"></div>
                
                <v-row justify="end" class="link-cont py-2" style="font-size: 12px; margin-top:13px;">
                    <v-col class="foot-links" cols="auto"> Enerji Politikası</v-col>
                    <v-col class="foot-links" cols="auto">Bilgi Güvenliği Politikası</v-col>
                    <v-col class="foot-links" cols="auto">Kalite Politikası</v-col>
                    <v-col class="foot-links" cols="auto">Bilgi Toplumu Hizmetleri</v-col>
                    <v-col class="foot-links" cols="auto">Önemli Bilgilendirme</v-col>
                    <v-col class="foot-links" cols="auto">İnternet Sitesi Gizlilik Politikası</v-col>
                    <v-col class="foot-links" cols="auto">Kişisel Verilerin Korunması</v-col>
                    <v-col class="foot-links" cols="auto">Çerez Politikası</v-col>
                </v-row>
                
                <v-row justify="end" class="link-cont" style="font-size: 12px;">
                    <v-col cols="12" align="right" style="padding-bottom: 7px;">© Inter IKEA Systems B.V 1999-2024</v-col>
                    <v-col  align="right" style="padding-top: 0px;">Site Creation & Technology by <span style="font-weight: 600;"> MagiClick Digital Solutions</span></v-col>
                </v-row>
                
            </v-container>
        </v-footer>
    </div>
</template>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&display=swap');

.card-btn {
    background-color: #252424;
    color: white;
    font-size: 11px;
    font-family: 'Noto IKEA Latin Regular', sans-serif;
    margin-left: 13px;
}

.app-footer {
    font-family: 'Noto IKEA Latin Regular', sans-serif;
}

.card:hover {
    text-decoration: underline;
    cursor: pointer;
}

.footer-icons {
    margin-left: 13px;
    gap: 25px;
}

.change-icon {
    color: #1f1d1dcb;
    border-radius: 50%;
    border-color: #d6d6d6;
}

.change-icon:hover {
    border-color: #1f1d1dcb;
}

.qr-pic:hover {
    cursor:pointer;
}

.border-line {
    border-bottom: 2px solid #E5E4E2;
    width:100%;
    margin-top: 30px;
}

.foot-links:hover {
    cursor: pointer;
    text-decoration: underline;
}

.link-cont {
    color: #252424;
}

</style>