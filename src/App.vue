<template>
  <v-app>
    <v-toolbar class="blue darken-4">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Transfer Exchange, Inc.</v-toolbar-title>
    </v-toolbar>
    <v-parallax height="875" src="https://cdn.wallpapersafari.com/13/81/uewP6p.jpg">
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list>
          <v-list-tile class="headerTile" to="/">
            <img class="logo" src="/images/TransferExchangeInc.jpg">
          </v-list-tile>
          <v-list-tile class="addInfo">748 North Court Street</v-list-tile>
          <v-list-tile class="addInfo">Medina, Ohio 44256</v-list-tile>
          <v-list-tile class="addInfo">Phone: 330-722-9090</v-list-tile>
          <v-list-tile class="addInfo">Toll Free 800-731-1031</v-list-tile>
          <v-list-tile class="addInfo">Fax: 330-725-3145</v-list-tile>
          <v-divider></v-divider>

          <v-list-tile class="bodyTile">
            <v-btn flat to="/" class="blue darken-4 selector font-weight-bold white--text">HOME</v-btn>
          </v-list-tile>
          <v-list-tile class="bodyTile">
            <v-btn
              flat
              to="/about"
              class="blue darken-4 selector font-weight-bold white--text"
            >ABOUT US</v-btn>
          </v-list-tile>
          <v-list-tile class="bodyTile">
            <v-btn
              flat
              to="/the1031"
              class="blue darken-4 selector font-weight-bold white--text"
            >1031'S</v-btn>
          </v-list-tile>

          <v-list-tile class="bodyTile">
            <v-btn
              flat
              to="/why"
              class="blue darken-4 selector font-weight-bold white--text"
            >WHY EXCHANGE</v-btn>
          </v-list-tile>

          <v-list-tile class="bodyTile">
            <v-btn
              flat
              to="/pricing"
              class="blue darken-4 selector font-weight-bold white--text"
            >PRICING</v-btn>
          </v-list-tile>
          <v-list-tile class="bodyTile">
            <v-btn flat to="/tips" class="blue darken-4 selector font-weight-bold white--text">TIPS</v-btn>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <router-view></router-view>
    </v-parallax>

    <v-footer class="blue darken-4 app">
      <div class="white--text bottomLeft">748 North Court Street Medina, Ohio 44256</div>

      <v-spacer></v-spacer>

      <div class="white--text">Phone: (330-722-9090) Toll Free: (800-731-1031) Fax: (330-725-3145)</div>
      <v-spacer></v-spacer>
      <div class="white--text bottomRight">{{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>
<script>
// Don't forget to import your components

export default {
  name: "App",
  components: {
    // components also go here
  },
  data() {
    return {
      drawer: null
    };
  }
};
</script>
<style scoped>
.title {
  margin-top: 20px;
}
.headerTile {
  margin-top: 30px;
  margin-left: 45px;
  height: 100px;
}
.selector {
  width: 250px;
  margin-top: 60px;
}
.bodyTile {
  margin-bottom: 20px;
}
.bottomRight {
  margin-right: 20px;
}
.bottomLeft {
  margin-left: 20px;
}
.addInfo {
  display: flex;
  justify-content: center;
  margin-bottom: -10px;
  margin-top: -15px;
}
.logo {
  height: 100px;
}
.scrollable {
  overflow: scroll;
}
</style>

