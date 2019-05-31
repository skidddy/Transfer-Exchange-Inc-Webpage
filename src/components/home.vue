<template>
  <v-container class="titleSpace">
    <v-flex xs10 offset-xs1>
      <v-card class="carousel outerCard">
        <v-carousel class="carousel" hide-delimiters>
          <v-carousel-item class="carousel" v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>

        <v-card flat>
          <v-card-title class="headline bold titleSpace">Complete 1031 Exchange Service</v-card-title>
        </v-card>
        <span class="titleSpace">Handling Exchanges Nationwide Since 1997</span>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            icon
            large
            class="blue darken-4 white--text"
            href="mailto:rskidmore@eztransfer.com?subject=1031 Exchange"
          >
            <v-icon>email</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            icon
            large
            class="blue darken-4 white--text"
            href="http://www.eztransfer.com/"
            target="_top"
          >
            <v-icon>home</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            icon
            large
            class="blue darken-4 white--text"
            href="http://maps.yahoo.com/py/maps.py?multipleCityState=MEDINA%2C+OH&Get%A0Map=Get+Map&BFCat=&Pyt=Tmap&newFL=Use+Address+Below&addr=748+N.+Court+St.&csz=MEDINA%2C+OH&Country=us"
            target="_blank"
          >
            <v-icon>map</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    items: [
      {
        src: "/images/TransferExchangeInc.jpg"
      },
      {
        src:
          "https://thetylt.com/attachments/ef2230631fe99501efd051333cee303c41743106/store/fillq/707/471/North/c44f128fafc7ba2969f93e61f47445baf69574c49bc2c19b9011cf28d2cd/medina+tylt.jpg"
      },
      {
        src:
          "https://images1.apartments.com/i2/lWCCqOvWscFJ1Z_fOdXYjGAeQ2Y-Y3VQDWjde7XxcOY/117/28-public-square-unit-a-medina-oh-building-photo.jpg"
      }
    ]
  })
};
</script>

<style scoped>
.carousel {
  max-width: 900px;
  height: auto;
}
.outerCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.bold {
  font-weight: bold;
}
.titleSpace {
  display: flex;
  justify-content: center;
}
</style>
