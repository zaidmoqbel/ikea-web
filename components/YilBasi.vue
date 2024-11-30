<template>
    <div class="features">
        <h2 align="left" style="margin: 95px 98px 30px 98px; color: #171717;">Yılbaşı ışıltısını evinize getirin</h2>
        <div class="parent">
        <v-container>
            <v-row>
                <v-col cols="3" class="box">
                    <div class="content-box">
                        <span
                        style="padding-bottom: 10px;
                        font-size: 13px;
                        color: red">
                        YENİ</span>
                        <p
                        align="left"
                        style="font-size: 15px;
                        padding-right: 10px;
                        padding-bottom: 30px">
                        Tüm yılbaşı dekorasyon ürünlerini inceleyin</p>
                        <button class="arrow-button">
                        <img src="../assets/arrow.png" alt=""></button>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        </div>
    </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&display=swap');


.features {
    .parent {
        height: 645px;
        background-image: url(../assets/yilbasi.png);
        background-size: contain;
        background-position: top;
        .content-box {
            color: #171717;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-weight: bold;
            font-family: 'Noto IKEA Latin Regular', sans-serif;
            height: 160px;
            width: 300px;
            padding-left: 20px;
            padding-top: 15px;
        }
    }
}

.box {
    margin-left: 30px;
    margin-top: 450px;
}

.content-box:hover {
    cursor: pointer;
    p {
    text-decoration: underline;
    }
}

.arrow-button img{
    width: 20px;
    height: 20px;
}

</style>
