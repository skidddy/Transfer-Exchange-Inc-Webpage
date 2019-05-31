<template>
  <v-container grid-list-xs text-xs-center fluid class="scrollable">
    <v-layout row wrap fluid>
      <v-flex xs6>
        <v-card class="aboutCard">
          <img class="size" src="/images/robsheadshot.jpg">

          <v-card-title>
            <B>Robert C. Skidmore, Esq. President</B>
          </v-card-title>

          <v-layout column wrap>
            <v-card-text>
              Current Areas of Practice:
              Real estate, deeds, mortgages, notes, purchase agreements, land development, zoning issues, title insurance, 1031 like-kind exchanges, commercial leases, real estate foreclosure, business development, consulting, as well as other areas. Practice not limited to the above.
            </v-card-text>
            <v-card-text>
              Education:
              Mount Vernon Nazarene College (University), 1992
              · Degree in Business Administration, History Minor, Cum Laude
              Ashland University, 1995
              · Master of Business Administration
              The University of Akron, School of Law, 2001
              · Juris Doctor
            </v-card-text>
            <v-card-text>
              Membership:
              · Admitted to practice law in the State of Ohio
              · Medina County Bar Association, serving on 3 committees, Vice President
              · Ohio State Bar Association
              · Licensed title insurance agent, State of Ohio
              · Ohio Land Title Association
              · American Land Title Association
              · Medina County Board of Realtors, Affiliate
              · Medina County Home Builders Association, Affiliate
            </v-card-text>
            <v-card-text>
              Community Involvement:
              · Medina Salvation Army - Board of Directors, 2006 - Vice Chairman
              · Medina County Land Title Association, Treasurer in 1992, Vice President in 2002.
              · Past member Kiwanis Club of Medina, 1995 - 2004, Co-Chair Chicken BBQ Committee 3 years
              · Medina Church of the Nazarene, 1994 - 2008, Board Member, Properties Committee, currently serving as an adult class teacher.
              · Past member of NCO Church of the Nazarene District Extension Board, 2001-2006.
              · Medina Soccer Association, Medina Rangers Soccer Club - coaching, 2005-current
            </v-card-text>
            <v-card-text>
              Professional Achievement:
              · CLE Speaker - Topic, “Real Estate Closings in Ohio” - Medina County Bar Association, 5/19/2006
            </v-card-text>
          </v-layout>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card class="aboutCard">
          <img class="size" src="/images/leesheadshot.jpg">
          <v-card-title>
            <B>Lee T.Skidmore, Esq. Vice President</B>
          </v-card-title>
          <v-layout column wrap>
            <v-card-text>Lee Skidmore currently serves as Vice President of Transfer Exchange, Inc, while serving as President of Medina County Title Agency. Since beginning with Medina County Title Agency in 1981, he has worked in all areas of the title field from examining titles to issuing legal opinions. Lee Skidmore is also a practicing attorney with the firm Skidmore & Hall a small town law practice working in several areas of law including real estate law.</v-card-text>
            <v-card-text>Lee earned a Bachelor of Arts degree from Mount Vernon Nazarene College in 1981. Following that, he graduated from the University of Akron School of Law in 1985. He has been a member of the Medina County Bar Association and Ohio Bar Association since that time.</v-card-text>
            <v-card-text>Lee has been a life long resident of Medina. He is married and has 3 children. Having played four years of college tennis he now stays in shape by playing, basketball, softball, racquetball, and golf.</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "about",
  data: () => ({})
};
</script>
<style scoped>
.aboutCard {
  margin: 20px;
  margin-top: 50px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 600px;
}
.scrollable {
  overflow: auto;
}
.size {
  max-height: 200px;
  max-width: 200px;
}
</style>
