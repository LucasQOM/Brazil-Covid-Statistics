<template>
  <v-app>
    <v-container align="center">
      <v-row justify="center" class="mt-3">
        <v-col cols="12" sm="6">
          <v-row align="center">
            <v-col cols="6" class="getStates">
              <label class="red--text font-weight-bold headline">
                Buscar pelo Estado (UF)
              </label>
              <v-select
                hide-details=""
                :items="states"
                item-value="uf"
                item-text="name"
                label="--- SELECIONE UM ESTADO ---"
                class="rounded-lg"
                outlined
                filled
                v-model="selectedState"
                @change="getCovidStatus()"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="updatedAt">
              <h4
                v-if="selectedState"
                class="
                  red
                  darken-1
                  rounded-lg
                  white--text
                  font-weight-bold
                  subheading
                  center-align
                  text-height
                "
              >
                Atualizado em:
                {{ statusStates.datetime | moment("D/MM/YYYY [às] HH[h]mm") }}
              </h4>
            </v-col>
          </v-row>
          <v-row class="center-align" v-if="selectedState">
            <v-col cols="12" sm="6">
              <label class="red--text font-weight-bold headline"
                >Número de casos (Confirmados)</label
              >
              <v-text-field
                :value="statusStates.cases"
                filled
                class="rounded-lg"
                disabled
                dense
                outlined
                height="55"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" align-self="end">
              <label class="red--text font-weight-bold headline"
                >Número de óbitos</label
              >
              <v-text-field
                :value="statusStates.deaths"
                filled
                class="rounded-lg"
                disabled
                dense
                outlined
                height="55"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" v-if="selectedState">
            <v-col cols="12" sm="6">
              <label class="red--text font-weight-bold headline"
                >Número de casos (Suspeitos)</label
              >
              <v-text-field
                :value="statusStates.suspects"
                filled
                class="rounded-lg"
                disabled
                dense
                outlined
                height="55"
              ></v-text-field>
            </v-col>
            <v-col v-if="selectedState" cols="12" sm="6" class="rejectedCases">
              <label class="red--text font-weight-bold headline"
                >Casos rejeitados</label
              >
              <v-text-field
                :value="statusStates.refuses"
                filled
                class="status rounded-lg"
                disabled
                dense
                outlined
                height="55"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="d-flex justify-center mt-3">
            <v-banner
              style="border: dashed; border-color: grey"
              max-height="200"
              max-width="400"
              v-if="!selectedState"
            >
              <v-icon x-large color="grey"> mdi-help-circle </v-icon>
              <div class="col-md-12 text-center">
                <div class="title text-h4 font-weight-bold grey--text">
                  COVID 2019
                </div>
              </div>
              <div class="col-md-12 text-center">
                <div class="text text-center text-h5 grey--text">
                  Fique em casa e se cuide!
                </div>
              </div>
            </v-banner>
            <v-banner
              style="border: dashed; border-color: red"
              max-height="200"
              max-width="400"
              v-if="error"
            >
              <v-icon x-large color="red"> mdi-exclamation-thick </v-icon>
              <div class="col-md-12 text-center">
                <div class="title text-h4 font-weight-bold red--text">OPS</div>
              </div>
              <div class="col-md-12 text-center">
                <div class="text text-center text-h5 red--text">
                  Não foi possível carregar os dados para apresentação
                </div>
              </div>
            </v-banner>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      statusStates: {
        uf: "",
        state: "",
        cases: "",
        deaths: "",
        suspects: "",
        refuses: "",
        datetime: "",
      },
      states: [],
      selectedState: "",
      error: false,
    };
  },
  mounted() {
    this.getUf();
  },
  methods: {
    getCovidStatus() {
      axios
        .get(
          `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${this.selectedState}`
        )
        .then((response) => {
          if (response.data.error != "state not found") {
            this.error = false;
            this.statusStates = response.data;
          } else {
            this.error = true;
          }
        });
    },
    getUf() {
      axios
        .get("https://covid19-brazil-api.now.sh/api/report/v1")
        .then((response) => {
          response.data.data.forEach((item) => {
            this.states.push({
              name: item.state,
              uf: item.uf,
            });
          });
        });
    },
  },
};
</script>