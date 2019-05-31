<template>
  <v-container>
    <v-flex xs12>
      <v-card class="center">
        <v-card-title class="bold">1031 DOs and DON'Ts:</v-card-title>
        <p class="tight">
          <b>DO:</b> advanced planning for the exchange. Talk to your accountant, attorney, broker, lender and Qualified Intermediary.
        </p>

        <p class="tight">
          <b>DO:</b> attempt to sell before you purchase. Occasionally Exchangers find the ideal replacement property before a buyer is found for the relinquished property. If this situation occurs, a reverse exchange (buying before selling) is the only option available. Although there is considerable legal precedent for reverse exchanges, Exchangers should be aware they are considered a more aggressive exchange variation because no clear IRS guidelines exist.
        </p>
        <p class="tight">
          <b>DO NOT:</b> miss your identification and exchange deadlines. Failure to identify within the 45 day identification period or failure to acquire replacement property within the 180 day exchange period will disqualify the entire exchange. Reputable Intermediaries will not act on back-dated or late identifications.
        </p>
        <p class="tight">
          <b>DO NOT:</b> plan to sell and invest the proceeds in property you already own. Funds applied toward property already owned purchase goods and services, not like-kind property.
        </p>

        <p class="tight">
          <b>DO NOT:</b>

           dissolve partnerships or change the manner of holding title during the exchange. A change in the Exchanger's legal relationship with the property may jeopardize the exchange.
        </p>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  name: "tips",
  data: () => ({})
};
</script>
<style scoped>
.center {
  display: flex;

  flex-direction: column;
  align-items: center;
}
.bold {
  font-weight: bold;
}
.tight {
  margin-left: 40px;
  margin-right: 40px;
}
.large {
  font-size: 30px;
}
</style>
