<template>
  <div>
  <nav class="breadcrumb">
    <ul>
      <li><a href="/">Ana Sayfa</a></li>
      <li><a href="/bizeulasin">Müşteri Hizmetleri</a></li>
      <li><span>Öneri ve Şikayet için Bize Ulaşın</span></li>
    </ul>
  </nav>
  <div class="page-container" style="margin-top: 50px; color: #242424;text-align: center">
    <h1>Müşteri Hizmetleri İletişim Formu</h1>
    <div class="border-line"></div>

    <div class="dropdown">
      <v-row>
        <v-col cols="6">
          <h5 style="font-size: 15px; padding-bottom: 10px;">Alışveriş Kanalı</h5>
          <p>Yardım konularını görmek için alışveriş kanalı seçiniz.</p>
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="uppvalue"
            :items="uppitems"
            outlined
            style="margin-right: 160px;margin-left: -80px;"
            item-color="#0058a3"
            @change="resetValue2"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <h5 style="font-size: 15px; padding-bottom: 10px;">Konu</h5>
          <p>Alışverişiniz ile ilgili bize iletmek istediğiniz bilgiler için bir <br> konu seçerek formu doldurmaya başlayabilirsiniz.</p>
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="uppvalue2"
            :items="filteredItems2"
            outlined
            style="margin-right: 160px;margin-left: -80px;"
            item-color="#0058a3"
          ></v-select>
        </v-col>
      </v-row>
    </div>
    <div class="border-line"></div>

        <div class="dynamic-section">

          <template v-if="isShoppingChannelSelected">
            <v-row>
              <v-col cols="5">
                <v-select
                  v-model="value3"
                  :items="currentItems"
                  outlined
                  item-color="#0058a3"
                ></v-select>
              </v-col>

              <v-col cols="5">
                <v-select
                  v-model="magazasec"
                  :items="magazalar"
                  outlined
                  item-color="#0058a3"
                ></v-select>
              </v-col>
            </v-row>
            <v-textarea
              v-model="comment"
              label="*Yorumlarınız"
              outlined
              style="width:70%"
              :disabled= "value3 === '*Konu seçiniz'"
            ></v-textarea>
          </template>
          <template v-else-if="isInternetShoppingSelected">
            <v-row>
              <v-col cols="5">
                <v-select
                  v-model="value3"
                  :items="currentItems"
                  outlined
                  item-color="#0058a3"
                ></v-select>
              </v-col>
            </v-row>
            <v-textarea
              v-model="orderNumber"
              row-height="15"
              rows="1"
              outlined
              auto-grow
              placeholder="*Sipariş Numaranız"
              @keypress="onlyAllowNumbers"
              @input="validateOrderNumber"
              :maxlength="16"
              style="width: 70%;"
            ></v-textarea>
            <v-textarea
              v-model="comment"
              label="*Yorumlarınız"
              outlined
              style="width: 70%;"
              :disabled= "value3 === '*Konu seçiniz'"
            ></v-textarea>
          </template>

        </div>

        <div class="personel-info">
            <h5 style="text-align: left;margin-left: 150px;margin-bottom: 20px;">Kişisel Bilgiler</h5>
            <v-row>
                <v-col cols="6">
                    <v-textarea
                        row-height="15"
                        rows="1"
                        outlined
                        auto-grow
                        placeholder="*Ad"
                        style="margin-left: 150px; width: 70%;"
                    ></v-textarea>

                    <v-textarea
                        row-height="15"
                        rows="1"
                        outlined
                        auto-grow
                        placeholder="*Cep Telefonu (Başında 0 olmadan giriniz.)"
                        @keypress="onlyAllowNumbers"
                        :maxlength="10"
                        style="margin-left: 150px; width: 70%;"
                    ></v-textarea>
                    <v-select
                        placeholder="*il"
                        :items="city"
                        outlined
                        style="margin-left: 150px;margin-right: 48px;"
                        item-color="#0058a3"
                    ></v-select>
                    <v-textarea
                        row-height="15"
                        rows="1"
                        outlined
                        auto-grow
                        placeholder="IKEA Aile Kart"
                        @keypress="onlyAllowNumbers"
                        style="margin-left: 150px; width: 70%;"
                    ></v-textarea>
                    <v-checkbox v-model="checkbox" style="margin-left: 140px;">
                  <template v-slot:label>
                    <div>
                      <span @click="openDialog" style="cursor: pointer; color: blue; text-decoration: none;">
                        Aydınlatma metnini
                      </span>
                      okudum.
                    </div>
                  </template>
                </v-checkbox>

                <v-dialog v-model="dialog" max-width="600px" style=" font-family: 'Noto IKEA Latin Regular', sans-serif;">
                  <v-card>
                    <v-card-title style="font-weight: bold;">Mapa Mobilya ve Aksesuar Pazarlama Anonim Şirketi</v-card-title>
                    <v-card-text>
                      <h3>Kişisel Verilerin Korunması Ve İşlenmesi Talep Şikayet Yönetimi Aydınlatma Metni</h3>
                      <br>
                      <p style="font-weight: bold;">1. Veri Sorumlusu</p>
                      <br>
                      <p>Kişisel verileriniz veri sorumlusu sıfatıyla Mapa Mobilya ve Aksesuar Pazarlama Anonim Şirketi (“IKEA” veya “Şirket”) tarafından, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca aşağıda açıklanan kapsamda işlenebilecektir.</p>
                      <br>
                      <p style="font-weight: bold;">2. Kişisel Verilerinizin İşlenme Amacı</p>
                      <br>
                      <p>Toplanan kişisel verileriniz, Kanun tarafından öngörülen temel ilkelere ve Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçlarına uygun olarak, IKEA tarafından talep ve şikayet kayıtlarınızın oluşturulması ve sonuçlandırılması amaçları kapsamında ve aşağıda yer alan amaçlarla işlenebilecektir:</p>
                      <ul>
                        <li>Şirket tarafından sunulan ürün ve hizmetlerden ilgili kişileri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması ve ilgili iş süreçlerinin yürütülmesi</li>
                        <li>Şirket tarafından yürütülen ticari faaliyetlerin gerçekleştirilmesi için ilgili iş birimlerimiz tarafından gerekli çalışmaların yapılması ve buna bağlı iş süreçlerinin yürütülmesi</li>
                        <li>Şirket’in ticari ve/veya iş stratejilerinin planlanması ve icrası</li>
                        <li>Şirket’in ve Şirket’le iş ilişkisi içerisinde olan ilgili kişilerin hukuki, teknik ve ticari-iş güvenliğinin temini</li>
                      </ul>
                      <p>Kişisel verilerinizin IKEA tarafından işlenme amaçları konusunda detaylı bilgiler, <a href="#">www.IKEA.com.tr/kisisel-verilerin-korunmasi</a>  adresinden erişilebilen Mapa Mobilya ve Aksesuar Pazarlama Anonim Şirketi Kişisel Verilerin Korunması ve İşlenmesi Politikası’nda yer almaktadır.</p>
                      <br>
                      <p style="font-weight: bold;">3. Kişisel Verilerinizin Aktarıldığı Taraflar Ve Aktarım Amaçları</p>
                      <br>
                      <p>Toplanan kişisel verileriniz, Kanun tarafından öngörülen temel ilkelere ve Kanun’un 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçlarına uygun olarak, IKEA tarafından talep ve şikayet kayıtlarınızın oluşturulması ve sonuçlandırılması amaçları kapsamında ve aşağıda yer alan amaçlarla tedarikçilerimize, IKEA iştiraklerine, kanunen yetkili kamu kurumlarına ve yetkili özel kurumlara aktarılabilecektir:</p>
                      <ul>
                        <li>Şirket tarafından sunulan ürün ve hizmetlerden ilgili kişileri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması ve ilgili iş süreçlerinin yürütülmesi</li>
                        <li>Şirket tarafından yürütülen ticari faaliyetlerin gerçekleştirilmesi için ilgili iş birimlerimiz tarafından gerekli çalışmaların yapılması ve buna bağlı iş süreçlerinin yürütülmesi</li>
                        <li>Şirket’in ticari ve/veya iş stratejilerinin planlanması ve icrası</li>
                        <li>Şirket’in ve Şirket’le iş ilişkisi içerisinde olan ilgili kişilerin hukuki, teknik ve ticari-iş güvenliğinin temini</li>
                      </ul>
                      <p>Kişisel verilerinizin Şirket tarafından aktarımı konusunda detaylı bilgilere,  <a href="#">www.IKEA.com.tr/kisisel-verilerin-korunmasi</a> adresinde yer alan Mapa Mobilya ve Aksesuar Pazarlama Anonim Şirketi Kişisel Verilerin Korunması ve İşlenmesi Politikası’ndan ulaşabilirsiniz.</p>
                      <br>
                      <p style="font-weight: bold;">4. Kişisel Verilerinizin Toplanma Yöntemi Ve Hukuki Sebebi</p>
                      <br>
                      <p>Süreç kapsamında toplanan kişisel verileriniz fiziki ortamda mağazalarımızda, internet ortamında internet sitemiz ve sosyal medya, mobil ortamda mobil uygulamalarımız ve çağrı merkezimiz kanallarıyla; talep ve şikayet kayıtlarınızın oluşturulması ve sonuçlandırılmasına yönelik yükümlülüklerimizi yerine getirmek yöntemiyle, Kanun m. 5/2 (f) hükmü uyarınca temel hak ve özgürlüklerinize zarar vermemek kaydıyla Şirket’in meşru menfaati için veri işlemenin zorunlu olması hukuki sebepleriyle toplanmaktadır. Toplanan kişisel verileriniz, Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında işbu Aydınlatma Metninde belirtilen amaçlarla işlenebilmekte ve aktarılabilmektedir.</p>
                      <br>
                      <p style="font-weight: bold;">5. KİŞİSEL VERİ SAHİBİ OLARAK KANUN’UN 11. MADDESİNDE SAYILAN HAKLARINIZ</p>
                      <br>
                      <p>Kişisel veri sahibi olarak Kanun’un 11. maddesi uyarınca aşağıdaki haklara sahip olduğunuzu belirtiriz:</p>
                      <ul>
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                        <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
                        <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                        <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
                        <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                        <li>Kanun’a ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                        <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkması durumunda buna itiraz etme,</li>
                        <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
                        <p>Yukarıda sıralanan haklarınıza yönelik başvurularınızı Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ uyarınca Şirket’e iletebilirsiniz. Başvularınızı aynı zamanda,  <a href="#">www.IKEA.com.tr/kisisel-verilerin-korunmasi</a> adresinden ulaşabileceğiniz Mapa Mobilya ve Aksesuar Pazarlama Anonim Şirketi Veri Sahibi Başvuru Formu’nu doldurmak suretiyle de Şirket’e iletebilirsiniz. Talebinizin niteliğine göre en kısa sürede ve en geç otuz gün içinde başvurularınız ücretsiz olarak sonuçlandırılacaktır; ancak işlemin ayrıca bir maliyet gerektirmesi halinde Kişisel Verileri Koruma Kurulu tarafından belirlenecek tarifeye göre tarafınızdan ücret talep edilebilecektir.</p>
                    </ul>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" @click="closeDialog">Kapat</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-checkbox
                  v-model="photoUploadChecked"
                  label="Fotoğraf eklemek istiyorum."
                  style="margin-left: 140px;"
                ></v-checkbox>

                <div v-if="photoUploadChecked" style="margin-left: 140px;">
                  <div class="border-line"></div>

                  <v-checkbox
                    v-model="agreeTerms"
                    label="Eklediğim fotoğrafın tüm sorumluluğunun tarafıma ait olduğunu kabul ve taahhüt ederim."
                    style="font-size: 11px;"
                  ></v-checkbox>Dosya Ekle
                  <v-file-input
                    v-model="file"
                    label="Dosya Ekle"
                    accept=".jpg, .jpeg, .png, .gif, .tif"
                    show-size
                    max-size="4000000"
                    prepend-icon="mdi-cloud-upload-outline"
                    hide-input
                  ></v-file-input>

                  <p style="font-size: 12px; color: #666;">
                    *Sadece .jpg, .jpeg, .png, .gif, .tif dosya formatları gönderilebilir (Maksimum dosya boyutu 4 MB)
                  </p>
                </div>

                <p style="text-align: left; margin-left: 140px">* ile belirtilen alanların doldurulması zorunludur.</p><br>
                <p style="text-align: left; margin-left: 150px; font-size: 14px;">IKEA Çağrı Merkezi'ne, haftanın her günü 09:00-22:00</p>
                <p style="text-align: left; margin-left: 150px; font-size: 14px;">saatleri arasında 444 4 532 nolu telefondan ulaşabilirsiniz.</p>
                <v-btn rounded size="large" style="width: 172px;height: 54px;margin-bottom: 50px;margin-left: 1000px;" class="text-none " color="#0058a3" dark>Gönder</v-btn>

              </v-col>

                <v-col cols="6">
                    <v-textarea
                        row-height="15"
                        rows="1"
                        outlined
                        auto-grow
                        placeholder="*Soyad"
                        style=" width: 70%;"
                    ></v-textarea>
                    <v-textarea
                        row-height="15"
                        rows="1"
                        outlined
                        auto-grow
                        placeholder="*E-Posta"
                        style="width: 70%;"
                    ></v-textarea>
                    <v-select
                        placeholder="*ilçe"
                        :items="district"
                        outlined
                        style="margin-right: 198px;"
                        item-color="#0058a3"
                    ></v-select>
                </v-col>
            </v-row>
        </div>


    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      uppitems: ['İnternetten Alışveriş', 'Mağazadan Alışveriş'],
      uppvalue: 'Mağazadan Alışveriş',
      uppitems2: {
        'İnternetten Alışveriş': ['Soru ve Talepler', 'Öneri ve Teşekkür', 'Kargo ve Teslimat', 'Sipariş Hakkında'],
        'Mağazadan Alışveriş': ['Bilgi Talebi', 'Şikayet', 'Teşekkür', 'Öneri', 'Yedek Parça veya Sabitleme Aparatı Talebi'],
      },
      uppvalue2: 'Konu seçiniz',
      value: 'Mağazadan Alışveriş',
      items2: ['Bilgi Talebi', 'Şikayet', 'Teşekkür' , 'Öneri', 'Yedek Parça veya Sabitleme Aparatı Talebi'],
      value2: 'Konu seçiniz',
      value3: '*Konu seçiniz',
      magazalar: ['Adana Sipariş ve Teslim Noktası', 'Bodrum Sipariş ve Teslim Noktası', 'IKEA Ankara Mağazası', 'IKEA Antalya Mağazası', 'IKEA Bayrampaşa Mağazası', 'IKEA Bursa Mağazası', 'IKEA İzmir Mağazası', 'IKEA Kartal Mağazası', 'IKEA Ümraniye Mağazası'],
      magazasec:'Mağaza Seçiniz',
      comment:'',
      items:{
        'Mağazadan Alışveriş': {
          'Konu seçiniz': ['Sonuç bulunamadı'],
          'Bilgi Talebi': ['Ürün Stoğu', 'Mutfak Planlama Randevusu', 'Fiyat Bilgisi', 'Nakliye/Montaj', 'Kurumsal','Diğer'],
          'Şikayet': ['Ürün', 'Nakliye', 'Montaj', 'Personel', 'Restoran ve Gıda Market','Diğer'],
          'Teşekkür': ['Teşekkür'],
          'Öneri': ['Öneri', 'Öneri'],
          'Yedek Parça veya Sabitleme Aparatı Talebi': ['Yedek Parça Talepleri'],
        },
        'İnternetten Alışveriş': {
          'Konu seçiniz': ['Sonuç bulunamadı'],
          'Soru ve Talepler': ['Ürün Stok', 'Ürün Hakkında Bilgi', 'Üyelik İşlemleri', 'Alışveriş Adımları', 'Montaj Talebi', 'Yedek Parça Talebi', 'Fatura Talebi', 'Ürün Garanti Koşulları', 'Kampanyalar', 'Teslimat Tarihi' , 'Ödeme İşlemleri', 'Nakliye Hizmeti', 'Diğer'],
          'Öneri ve Teşekkür': ['Öneri', 'Teşekkür'],
          'Kargo ve Teslimat': ['Sipariş Durumu', 'Eksik Ürün', 'Yanlış Ürün', 'Hasarlı Ürün', 'Adres Değişikliği'],
          'Sipariş Hakkında': ['İade Talebi', 'Değişim Talebi', 'Sipariş Düzenleme', 'Sipariş İptali', 'Montaj İptali'],
        },
      },
      city:[
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara",
  "Antalya", "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman",
  "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale",
  "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ",
  "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari",
  "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir", "Kahramanmaraş", "Karabük",
  "Karaman", "Kars", "Kastamonu", "Kayseri", "Kırıkkale", "Kırklareli", "Kırşehir",
  "Kilis", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin",
  "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya",
  "Samsun", "Şanlıurfa", "Siirt", "Sinop", "Şırnak", "Sivas", "Tekirdağ",
  "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
],
      district:[
  "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy",
  "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece",
  "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa",
  "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe",
  "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Üsküdar", "Zeytinburnu"
],
      orderNumber: '',
      checkbox:false,
      dialog:false,
      photoUploadChecked:false,
      agreeTerms:false,
      file:null,
    }),
    computed: {
    filteredItems2() {
      return this.uppitems2[this.uppvalue] || [];
    },
    currentItems() {
      return this.items[this.uppvalue][this.uppvalue2] || [];
    },
    isShoppingChannelSelected() {
      return this.uppvalue === 'Mağazadan Alışveriş';
    },
    isInternetShoppingSelected() {
      return this.uppvalue === 'İnternetten Alışveriş';
    },
    isHomeShoppingSelected() {
      return this.uppvalue === 'Evden Alışveriş Yap, Mağazadan Teslim Al';
    }
  },
    methods: {
      resetValue2() {
      this.uppvalue2 = null;
    },
        onlyAllowNumbers(event){
            const char = String.fromCharCode(event. which);
            if (!/[0-9]/.test(char)) {
                event.preventDefault();
            }
        },
        validateOrderNumber() {
            if (this.orderNumber.length > 16) {
                this.orderNumber = this.orderNumber.slice(0, 16);
            }
        },
        openDialog() {
            this.dialog = true;
        },
        closeDialog() {
            this.dialog = false;
        }
    }
  }
</script>



<style scoped>


.breadcrumb {
  font-size: 14px;
  color: #666;
  margin-left: 115px;
  padding-top: 10px;
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
    font-family: 'Noto IKEA Latin Regular', sans-serif;
    color: #242424;
}

.border-line {
  border-bottom: 2px solid #E5E4E2;
  width: 94%;
  margin-top: 30px;
  margin-left: 3%;
  margin-bottom: 30px;
}

.dropdown  {
    text-align: left;
    margin-left: 160px;
    padding-top: 10px;
    line-height: 25px;
}

.dynamic-section {
  margin-left: 150px;
}

</style>
