<template>
  <v-container class="scrollable">
    <v-layout column flex align-center>
      <v-card flat class="titleCard">
        <v-card-title>
          <B>What’s a 1031 Exchange ?</B>
        </v-card-title>Section 1031 of the tax code provides one of the best strategies for the deferral of capital gain taxes which would ordinarily arise from the sale of investment property. Exchanging defers the realization of the capital gain tax, leaving the property owner with substantially more proceeds to reinvest in a replacement property.
        <v-card-title>
          <B>Exchange Terminology</B>
        </v-card-title>

        <v-expansion-panel class="flashPanel">
          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>Assignment Agreement</div>
            </template>
            <v-card>
              <v-card-text>A document used to transfer contractual rights (but not necessarily obligations) to a third party. Often used to assign the Purchase/Sales Contract between the exchanger, the Qualified Intermediary and either the buyer or seller.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>Basis</div>
            </template>
            <v-card>
              <v-card-text>Method of measuring investment in an investment property for tax purposes. The following formula provides an approximate estimate of the adjusted basis: [Purchase Price + Improvements] - Depreciation Deducted = Adjusted Basis.</v-card-text>
            </v-card>
          </v-expansion-panel-content>

          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>Boot</div>
            </template>
            <v-card>
              <v-card-text>Fair market value of non-qualified (not like-kind) property received in an exchange. Examples: cash, notes [seller financing], furniture, supplies, reduction in debt obligations.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>Capital Gain/Loss</div>
            </template>
            <v-card>
              <v-card-text>The increase (or decrease) in the amount received from a sale or exchange over the adjusted basis of the property.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>Constructive Receipt</div>
            </template>
            <v-card>
              <v-card-text>A term referring to the control of proceeds by a taxpayer even though funds may not directly be in their possession.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>Exchange Agreement</div>
            </template>
            <v-card>
              <v-card-text>A document used to establish the contractual relationship between the parties to an exchange which restricts the Exchanger's access to the exchange funds and outlines the responsibilities of the Qualified Intermediary.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>Exchanger</div>
            </template>
            <v-card>
              <v-card-text>The party completing the exchange. The IRS uses the term "taxpayer."</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>"Like-kind" Property</div>
            </template>
            <v-card>
              <v-card-text>Any property used for the productive use in a trade or business or for investment is deemed to be like-kind with any other property to be used for the productive use in a trade or business or for investment. The way the property is utilized, and not the type of property, determines if it is like-kind. Like-kind refers to the nature or character of the property and not its grade or quality. Examples of like-kind property can include: single family residential, multi-family residential, retail, manufacturing, condominiums, offices, industrial warehouses and bare land. As a general rule, real property is like-kind as to all other real property except: (1) An interest in a partnership (2) Primary residences and vacation and/or second homes (3) Inventory (defined as property held for sale).</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>Qualified Intermediary</div>
            </template>
            <v-card>
              <v-card-text>An entity who is not an agent of the taxpayer or a is qualified person and enters into a written agreement with the taxpayer (the "Exchange Agreement"). The Exchange Agreement must require that the Qualified Intermediary acquires the relinquished property from the taxpayer, transfer the relinquished property, acquire the replacement property, and transfer the replacement property to the taxpayer.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>Relinquished Property</div>
            </template>
            <v-card>
              <v-card-text>The property "sold" by the exchanger. This is also called the "exchange," "downleg," or the "phase I " property.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>Replacement Property</div>
            </template>
            <v-card>
              <v-card-text>The property acquired by the exchanger. This is also called the "acquisition," "upleg," or "phase II" property.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>"Starker" Type Exchanges</div>
            </template>
            <v-card>
              <v-card-text>Popular term for the delayed exchange variation upheld in Starker v. United States, 602 F.2d 1341 (9th Cir. 1979).</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content class="center">
            <template v-slot:header>
              <div>Section 1031 Tax Deferred Exchange</div>
            </template>
            <v-card>
              <v-card-text>A deferred exchange is defined as an exchange in which, pursuant to an agreement, the taxpayer transfers property held for productive use in a trade or business or for investment (the "relinquished property") and subsequently receives property to be held for productive use in a trade or business or for investment (the "replacement property").</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "the1031",
  data: () => ({
    items: []
  })
};
</script>
<style scoped>
.titleCard {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
}
.flashPanel {
  display: flex;
  flex-direction: column;
  margin: 20px;
  max-width: 600px;
  margin-bot: 50px;
}
.center {
  display: flex;

  flex-direction: column;
  align-items: center;
}
.scrollable {
  overflow: scroll;
}
</style>
