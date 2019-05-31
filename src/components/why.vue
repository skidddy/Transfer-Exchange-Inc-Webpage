<template>
  <v-container>
    <v-flex xs12>
      <v-card class="center">
        <v-card-title class="bold">Reasons to Exchange:</v-card-title>
        <p>
          <b>Cash Flow:</b> Exchange land for improved property.
        </p>

        <p>
          <b>Appreciation:</b> Exchange commercial property for single family rentals that appreciate faster.
        </p>
        <p>
          <b>Easier Sale:</b> Exchange for a property that is easier to market and sell.
        </p>
        <p>
          <b>Less Management:</b>Exchange rentals for raw land or for property that can be professionally managed.
        </p>

        <p>
          <b>Better Location:</b> Exchange property from a run-down location to a better location.
        </p>

        <p>
          <b>Accomplish Goals:</b> Exchange one large property into multiple properties to leave for heirs.
        </p>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  name: "why",
  data: () => ({})
};
</script>
<style scoped>
.center {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  margin: 30px;
}
.bold {
  font-weight: bold;
}
</style>
