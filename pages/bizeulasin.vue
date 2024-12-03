<template>
  <div>
  <nav class="breadcrumb">
 <ul>
   <li><a href="/">Ana Sayfa</a></li>
   <li><a href="/bizeulasin">Müşteri Hizmetleri</a></li>
   <li><span>Bize Ulaşın</span></li>
 </ul>
</nav>
 <div class="page-container">
     <h1 style="padding-bottom: 10px; ">Bize Ulaşın</h1>
     <p>Size nasıl yardımcı olabiliriz?<br>Bu konulardan herhangi biriyle ilgili sorunuz mu var?</p>

     <div class="search-input-container" style="width: 100%; position: relative; padding-left: 17%;">

              <input
                type="search"
                name="navSearch"
                id="navSearch"
                ref="searchInput"
                class="search-input"
                placeholder="Yardım almak istediğiniz konu"
              />


            </div>

     <div class="iletisem">
         <p>Müşteri Hizmetleri İletişim Formu için <router-link to="/İletisimFormu" class="click-link">tıklayın</router-link >.</p>
         <p>IKEA Çağrı Merkezine haftanın her günü 09:00 – 22:00 saatleri arasında <span class="number">444 4 532</span> nolu telefondan ulaşabilirsiniz.</p>
     </div>
     <div class="dropdown">
         <v-row>
             <v-col cols="6">
                 <h5 style="font-size: 15px;">Alışveriş Kanalı</h5>
                 <p>Yardım konularını görmek için alışveriş kanalı seçiniz.</p>
             </v-col>
             <v-col cols="6">
                 <v-select
                     v-model="value"
                     :items="items"
                     outlined
                 ></v-select>
             </v-col>
         </v-row>
     </div>

     <div class="cards-container">

           <div v-if="value === 'İnternetten Alışveriş'" class="card" style="margin-top: 30px;">
             <div class="border-line"></div>
             <v-row>
               <v-row>
                 <v-col v-for="(card, index) in cards" :key="index" cols="2.3">
                   <v-card
                     tonal
                     width="180px"
                     height="244px"
                     color="#e9edf5"
                   >
                   <template v-slot:default >
                     <div v-html="card.title" style="padding-top: 30px;"></div> <!-- Use v-html to render HTML content -->
                     <div v-html="card.subtitle" style="padding-top: 10px; font-weight: bolder; padding-bottom: 10px;color: black;"></div> <!-- Use v-html to render HTML content -->
                     <div v-html="card.text" style="text-align: left;padding-left: 30px;color: black; font-size: 14px;"  class="itm"></div> <!-- Use v-html to render HTML content -->
                   </template>
                 </v-card>
                 </v-col>
               </v-row>
             </v-row>

             <v-row>
               <v-col cols="3">

                 <v-list>
                   <h4>İnternetten Alışveriş</h4>

                   <v-list-item
                     v-for="(item, index) in categories"
                     :key="index"
                     @click="selectedCategory = item"
                     :class="{ 'selected-item' : selectedCategory === item}"
                   >
                   <v-list-item-title style="text-align: left;">{{ item }}</v-list-item-title>
                 </v-list-item>
                 </v-list>
               </v-col>
               <v-divider vertical></v-divider>

               <v-col cols="9">
                 <h2>Alışveriş Adımları</h2>

               </v-col>
             </v-row>


           </div>


           <div v-else-if="value === 'Mağazadan Alışveriş'" class="card" style="margin-top: 30px;">
             <div class="border-line"></div>
             <v-row>
               <v-row>
                 <v-col v-for="(card, index) in cards2" :key="index" cols="2.3">
                   <v-card
                     tonal
                     width="220px"
                     height="274px"
                     color="#e9edf5"
                   >
                   <template v-slot:default >
                     <div v-html="card.title" style="padding-top: 30px;"></div>
                     <div v-html="card.subtitle" style="padding-top: 10px; font-weight: bolder; padding-bottom: 10px;color: black;"></div>
                     <div v-html="card.text" style="text-align: left;padding-left: 30px;color: black; font-size: 14px;"  class="itm"></div>
                   </template>
                 </v-card>
                 </v-col>
               </v-row>
             </v-row>

             <v-row>
               <v-col cols="3">

                 <v-list>
                   <h4>IKEA Mağazaları</h4>

                   <v-list-item
                     v-for="(item, index) in categories2"
                     :key="index"
                     @click="selectedCategory = item"
                     :class="{ 'selected-item' : selectedCategory2 === item}"
                   >
                   <v-list-item-title style="text-align: left;">{{ item }}</v-list-item-title>
                 </v-list-item>
                 </v-list>
               </v-col>
               <v-divider vertical></v-divider>

               <v-col cols="9">
                <h2>Hizmetler</h2>

               </v-col>
             </v-row>
           </div>


         </div>

 </div>
</div>

</template>

<script>
export default {
 data: () => ({
   items: ['İnternetten Alışveriş', 'Mağazadan Alışveriş'],
   value: 'Konu seçiniz',
   cards: [
     { title: '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M101.17-390.22v-83.17H673.3q42.22 0 72.29-30.12 30.06-30.13 30.06-72.42 0-43.45-30.06-73.09-30.07-29.63-72.29-29.63H220.96l61.91 61.35-59.35 59.34L61.17-720.3l162.35-162.35 59.35 58.35-61.91 61.91H673.3q77.25 0 131.67 54.82 54.42 54.82 54.42 131.27 0 76.46-54.42 131.27-54.42 54.81-131.67 54.81H101.17Zm0 329.05v-266h758.22v266H101.17Zm83.18-83.18h150.78v-99.08H184.35v99.08Zm226.04 0h139.78v-99.08H410.39v99.08Zm215.48 0h149.78v-99.08H625.87v99.08Z"/></svg>',
       subtitle: 'İade',
       text: '<ul><li>Ücret İadesi</li><li>İade Talebi</li><li>İade Takibi</li><li>Sipariş İptali</li></ul>' },
     { title: '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M216.44-101.17q-28.96 0-51.5-17.26-22.55-17.27-29.68-43.53l-113-404.34q-5.56-20.27 6.8-36.53t34.29-16.26h196.17l180.57-266.3q6.56-9.7 16.93-15.11 10.36-5.41 21.8-5.41 11.44 0 21.95 5.35 10.5 5.35 16.71 15.17l180 266.3h201.17q20.93 0 33.29 16.26t6.8 36.53L827.3-161.96q-8.69 26.26-31.03 43.53-22.33 17.26-49.57 17.26H216.44Zm-1.57-83.18h530.26l98.17-351H117.7l97.17 351Zm265.24-107.87q28.06 0 47.65-19.69 19.59-19.7 19.59-48.04 0-28.35-19.7-47.66-19.69-19.3-47.76-19.3-28.06 0-47.65 19.3-19.59 19.29-19.59 48.15 0 28.07 19.7 47.66 19.69 19.58 47.76 19.58ZM359.7-619.09h238.6L478.87-792.35 359.7-619.09ZM481-359.57Z"/></svg>',
       subtitle: 'Siparişler',
       text: '<ul><li>Sipariş Takibi</li><li>Sipariş Düzenleme</li><li>Fatura Talebi</li><li>Değişim Talebi</li></ul>'},
     { title: '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M227.98-143.17q-51.09 0-87.9-34.45-36.82-34.45-37.95-85.6H23.04v-471.43q0-32.71 24.84-57.94 24.84-25.24 58.34-25.24h581.35v162.7h103.82L936.96-461.6v198.38h-79.83q-1.13 51.1-37.8 85.58-36.68 34.47-87.78 34.47-50.92 0-87.58-34.45-36.67-34.45-37.8-85.6H352.96q-1.13 50.87-37.52 85.46-36.38 34.59-87.46 34.59Zm-.17-70.74q22.94 0 39.24-16.68t16.3-39.39q0-22.72-16.35-39.41-16.35-16.7-39.39-16.7t-39.46 16.68q-16.41 16.68-16.41 39.39 0 22.72 16.44 39.41 16.45 16.7 39.63 16.7ZM106.22-346.39h25.32q16.98-23.87 41.88-37.37 24.9-13.5 53.3-13.5 28.41 0 53.61 13.86 25.21 13.87 42.41 37.01h281.65v-388.26H106.22v388.26Zm625.2 132.48q22.94 0 39.24-16.68t16.3-39.39q0-22.72-16.35-39.41-16.36-16.7-39.4-16.7t-39.45 16.68q-16.41 16.68-16.41 39.39 0 22.72 16.44 39.41 16.45 16.7 39.63 16.7Zm-43.85-212.7h171.26L749.74-571.39h-62.17v144.78ZM356.3-529.74Z"/></svg>',
       subtitle: 'Kargo ve Teslimat',
       text: '<ul><li>Teslimat Süresi</li><li>Kargo Ücreti</li><li>Eksik Teslimat</li><li>Adres Değişikliği</li></ul>' },
     { title: '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M220.78-165.3h288.35v-70H220.78v70Zm35.26-397.53h198.39q9.89 0 17.73-7.86t7.84-17.78q0-9.92-7.84-17.99-7.84-8.06-17.73-8.06H256.04q-10.56 0-18.34 7.98-7.79 7.99-7.79 18.07t7.79 17.86q7.78 7.78 18.34 7.78Zm0-105.56h198.39q9.89 0 17.73-7.78 7.84-7.79 7.84-18.07 0-10.28-7.84-18.06-7.84-7.79-17.73-7.79H256.04q-10.56 0-18.34 7.84-7.79 7.84-7.79 17.73 0 10.56 7.79 18.35 7.78 7.78 18.34 7.78Zm392.53 155.56v-74.69h84.3v-107.87h-84.3v-74.7h75.82q28.15 0 50.9 18.13 22.75 18.12 29.58 44.44v30H890q15.38 0 26.76 11.13 11.37 11.13 11.37 26.42 0 14.55-11.37 25.85-11.38 11.29-26.76 11.29h-86.7v30q-7.26 26.32-29.4 43.16-22.13 16.84-49.51 16.84h-75.82ZM489.13-310h-74.7v-182.83h160v-297.26H236.51q-42.47 0-71.47 29t-29 71v97.26q0 42 29 71t71 29h80V-310h-75.26v-109.13h-20q-69.13-5-114.56-55.07-45.44-50.06-45.44-118.63v-97.26q0-72 51.49-123.63 51.48-51.63 123.77-51.63h328.79q34.96 0 59.35 24.39 24.39 24.38 24.39 59.35v280.31q0 34.96-24.39 59.35-24.39 24.38-59.35 24.38h-75.7V-310ZM208.89-90.04q-27.61 0-45.21-18.24-17.59-18.23-17.59-44.68v-95.69q0-25.56 17.59-43.46Q181.28-310 208.89-310h313.59q25.8 0 43.85 17.89 18.06 17.9 18.06 43.46v95.69q0 26.45-18.06 44.68-18.05 18.24-43.85 18.24H208.89Zm146.85-551.92ZM509.13-165.3H220.78h288.35Z"/></svg>',
       subtitle: 'Hizmetler',
       text: '<ul><li>Montaj Hizmeti</li><li>Ölçü Alma Hizmeti</li><li>Evden Alışveriş Yap, Mağazadan Teslim Al Hizmeti</li></ul>' },
     { title: '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M141.96-101.39v-674.04q0-34.97 24.22-59.36 24.22-24.38 58.95-24.38h510.74q33.97 0 58.85 24.38 24.89 24.39 24.89 59.36v674.04h-83.74v-80.13H225.13v80.13h-83.17Zm83.17-429.22H444v-244.82H225.13v244.82ZM517.57-690.3h218.3v-85.13h-218.3v85.13Zm0 159.69h218.3v-86.13h-218.3v86.13ZM398.91-318.78h163.18v-73.57H398.91v73.57ZM225.13-457.04v201.95h510.74v-201.95H225.13Zm0 0v201.95-201.95Z"/></svg>',
       subtitle: 'Ürün',
       text: '<ul><li>Ürün Stok</li><li>Ürün Garanti Koşulları</li><li>Hasarlı Ürün</li></ul>' },
   ],
   cards2: [
    {
      title: '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M482-247q18 0 32-14t14-32.64q0-18.64-14-32T481.5-339q-18.5 0-32 13.28T436-293.14Q436-275 449.63-261T482-247Zm-43-146h74q0-24 6.5-45.5T557-486q29-22 41.5-48.21t12.5-57.91q0-55.88-32.8-89.38Q545.41-715 488-715q-52 0-93 28.5t-60 75.65L404-585q12-29 32.49-44 20.48-15 44.51-15 24.5 0 41.75 14.65T540-590.32q0 18.32-11.5 36.82T497-519q-28 24-43 52.57T439-393Zm41.14 338Q392-55 314.51-88.08q-77.48-33.09-135.41-91.02-57.93-57.93-91.02-135.27Q55-391.72 55-479.86 55-569 88.08-646.49q33.09-77.48 90.86-134.97 57.77-57.48 135.19-91.01Q391.56-906 479.78-906q89.22 0 166.83 33.45 77.6 33.46 135.01 90.81t90.89 134.87Q906-569.34 906-480q0 88.28-33.53 165.75t-91.01 135.28q-57.49 57.8-134.83 90.89Q569.28-55 480.14-55Zm-.14-94q138 0 234.5-96.37T811-480q0-138-96.5-234.5t-235-96.5q-137.5 0-234 96.5t-96.5 235q0 137.5 96.37 234T480-149Zm0-331Z"/></svg>',
      subtitle: 'Sık Sorulan Sorular',
      text:'<ul><li>İade Politikası</li><li>Garanti Koşulları</li><li>Stok Sorgulama</li><li>Mağaza Çalışma Saatleri</li><li>IKEA Çağrı Merkezi</li></ul>'
    },
    {
      title: '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M551-443q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM255-280q-39.73 0-67.36-27.64Q160-335.27 160-375v-376q0-39.19 27.64-67.09Q215.27-846 255-846h594q38.77 0 66.39 27.91Q943-790.19 943-751v376q0 39.73-27.61 67.36Q887.77-280 849-280H255Zm88-83h417q0-42 29-71t71-29v-200q-42 0-71-29.5T760-763H343q0 41-29 70.5T243-663v200q42 0 71 29t29 71Zm457 226H111q-38.78 0-66.39-27.61T17-231v-449h94v449h689v94ZM243-363v-400 400Z"/></svg>',
      subtitle: 'Ödeme Seçenekleri ve Kart Avantajları',
      text:'<ul><li>Ödeme Seçenekleri</li><li>IKEA Kurumsal Kart</li><li>IKEA Aile Kart</li><li>Hediye Kart</li></ul>'
    },
    { title: '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M702-623h60v-60h-60v60Zm0 171h60v-60h-60v60Zm0 170h60v-60h-60v60Zm-56 173v-82h208v-578H482v105l-83-60v-127h538v742H646Zm-624 0v-407l283-202 281 202v407H358v-223H252v223H22Zm83-82h87v-201h226v201h85v-282L305-615 105-472.33V-191Zm541-358ZM418-191v-201H192v201-201h226v201Z"/></svg>',
    subtitle: 'Evden Alışveriş Yap, Mağazadan Teslim Al',
    text:'<ul><li>Hizmet Ücreti</li><li>Geçerli Ürünler</li><li>Mağaza Seçimi</li><li>Mağazadan Teslim Almak için Gerekli Bilgiler</li></ul>'

    },
    { title: '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M220.78-165.3h288.35v-70H220.78v70Zm35.26-397.53h198.39q9.89 0 17.73-7.86t7.84-17.78q0-9.92-7.84-17.99-7.84-8.06-17.73-8.06H256.04q-10.56 0-18.34 7.98-7.79 7.99-7.79 18.07t7.79 17.86q7.78 7.78 18.34 7.78Zm0-105.56h198.39q9.89 0 17.73-7.78 7.84-7.79 7.84-18.07 0-10.28-7.84-18.06-7.84-7.79-17.73-7.79H256.04q-10.56 0-18.34 7.84-7.79 7.84-7.79 17.73 0 10.56 7.79 18.35 7.78 7.78 18.34 7.78Zm392.53 155.56v-74.69h84.3v-107.87h-84.3v-74.7h75.82q28.15 0 50.9 18.13 22.75 18.12 29.58 44.44v30H890q15.38 0 26.76 11.13 11.37 11.13 11.37 26.42 0 14.55-11.37 25.85-11.38 11.29-26.76 11.29h-86.7v30q-7.26 26.32-29.4 43.16-22.13 16.84-49.51 16.84h-75.82ZM489.13-310h-74.7v-182.83h160v-297.26H236.51q-42.47 0-71.47 29t-29 71v97.26q0 42 29 71t71 29h80V-310h-75.26v-109.13h-20q-69.13-5-114.56-55.07-45.44-50.06-45.44-118.63v-97.26q0-72 51.49-123.63 51.48-51.63 123.77-51.63h328.79q34.96 0 59.35 24.39 24.39 24.38 24.39 59.35v280.31q0 34.96-24.39 59.35-24.39 24.38-59.35 24.38h-75.7V-310ZM208.89-90.04q-27.61 0-45.21-18.24-17.59-18.23-17.59-44.68v-95.69q0-25.56 17.59-43.46Q181.28-310 208.89-310h313.59q25.8 0 43.85 17.89 18.06 17.9 18.06 43.46v95.69q0 26.45-18.06 44.68-18.05 18.24-43.85 18.24H208.89Zm146.85-551.92ZM509.13-165.3H220.78h288.35Z"/></svg>',
    subtitle: 'Mağaza Hizmetleri',
    text:'<ul><li>Montaj Hizmeti</li><li>Nakliye Hizmeti</li><li>Ölçü Alma Hizmeti</li><li>Ürün Toplama ve Nakliye Hizmeti</li></ul>'
    },
   ],
   selectedCategory: "Mağazadan Alışveriş",
   categories: [
     'Alışveriş Adımları',
     'Ödeme Seçenekleri',
     'Kargo Hizmeti ve Sipariş Takibi',
     'İade Politikası',
     'Montaj Hizmeti',
     'IKEA Kurumsal Kart',
     'Mağazadan Teslimat',
   ],
   selectedCategory2: "İnternetten Alışveriş",
   categories2: [
     'Hizmetler',
     'IKEA Aile',
     'IKEA Kurumsal',
     'Garanti Şartları',
     'Nakliye ve Montaj',
     'Mağaza İade Politikası',
     'Mağaza Ödeme Seçenekleri',
     'IKEA Ürünleri',
     "IKEA'da Alışveriş",
     'IKEA Mağazaları',
   ]
 }),
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
 padding: 90px;
 font-family: 'Noto IKEA Latin Regular', sans-serif;
 color: #242424;
 text-align: center;
}

.iletisem {
 padding-top: 35px;
 text-align: left;
 margin-left: 160px;
 line-height: 40px;
}

.click-link, .number {
 text-decoration: none;
 color: #015197;
 cursor: pointer;
}

.click-link:hover {
 text-decoration: underline;
}

.dropdown  {
 text-align: left;
 margin-left: 160px;
 padding-top: 10px;
 line-height: 35px;
}

.border-line {
border-bottom: 2px solid #E5E4E2;
width: 100%;
margin-top: 30px;
margin-left: 3%;
margin-bottom: 30px;
}

.cards-container {
font-family: 'Noto IKEA Latin Regular', sans-serif;
}

.itm:hover {
cursor: pointer;
}

.search-input {
  width: 100%;
  padding-left: 30px;
  border-radius: 30px;
  background-color: #f5f5f5;
  outline: none;
  padding: 20px 40px;
  color: grey;
  background-image: url('@/assets/header-imgs/search.png');
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 20px;
}



</style>
