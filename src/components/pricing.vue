<template>
  <v-container>
    <v-flex xs12>
      <v-card class="center">
        <v-card-title class="bold">Pricing Information:</v-card-title>

        <p class="tight">
          Transfer Exchange prices are quoted based on your individual transaction. We factor in complexity, amount of sales price, risk, and other factors. Please call or e-mail for a competitive quotation.
          We invest all proceeds from the exchange in a savings account and allow the client to retain all interest upon the close of the replacement property. Many of our competitors retain half of the interest in addition to their exchange fee.
        </p>
        <v-card-title class="bold">Fee Schedule:</v-card-title>
        <p>
          <b>Exchange Fee Schedule</b>
        </p>
        <p>
          <b>call for up to date prices</b>
        </p>
        <p>
          <b>330-722-9090 or 800-731-1031</b>
        </p>
        <p>
          <b>Simple Deferred Exchanges</b>
        </p>
        <p class="large">
          <b>Starting at $850.00</b>
        </p>

        <p>
          <b>Additional fees charged depending on the value of the property and complexity of the transaction.</b>
        </p>
        <p>
          <b>*Wire Fees & Overnight Delivery additional</b>
        </p>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  name: "pricing",
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
  display: flex;
  justify-content: center;
  margin-left: 40px;
  margin-right: 40px;
}
.large {
  font-size: 30px;
}
</style>
