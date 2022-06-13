  <template>
  <!--Inicio do template geral-->
  <div id="app">
    <!--Inicio da Div app-->
    <Card class="grid">
      <!--Inicio do Card-->
      <template #content>
        <!--Configuração do Texto-->
        <div
          class="
            text-1000
            font-bold
            m-2
            flex
            align-items-center
            justify-content-center
          "
        >
          Cadastro do Animal
        </div>
        <br />
        <!--Inicio da grid-->
        <panel>
          <div class="p-fluid grid formgrid">
            <div class="grid">
              <!--class nome pessoa-->
              <div class="col-6">
                <span class="p-float-label">
                  <InputText
                    id="username1"
                    type="text"
                    v-model="v$.value1.$model"
                    :class="{ 'p-invalid': v$.value1.$invalid}"/>
                  <label for="username1"> Nome </label>
                </span>
              </div>
              <!--class telefone pessoa-->
              <div class="col-3">
                <span class="p-float-label">
                  <InputMask
                    id="telefone"
                    mask="(99) 99999-9999"
                    v-model="val1"
                  />
                  <label for="telefone">Telefone</label>
                </span>
              </div>
              <!--classe nome animal-->
              <div class="col-6 mt-4">
                <span class="p-float-label">
                  <InputText id="username2" type="text" v-model="value2" />
                  <label for="username2">Nome do Animal</label>
                </span>
              </div>
              <!--classe gênero do animal-->
              <div class="mt-4 col-3">
                <Dropdown
                  v-model="selectCategoria"
                  :options="animal"
                  optionLabel="nomeAnimal"
                  placeholder="Gênero do Animal"
                />
              </div>
              <!--class sexo-->
              <div class="col-6">
                <h5>Sexo do Animal</h5>
                <div class="field-checkbox">
                  <Checkbox id="binary1" v-model="checked1" :binary="true" />
                  <label for="binary1">Macho</label>
                </div>
                <div class="field-checkbox">
                  <Checkbox id="binary2" v-model="checked2" :binary="true" />
                  <label for="binary2">Fêmea</label>
                </div>
              </div>
              <!--Class data de nascimento -->
              <div class="mt-3 col-6">
                <div class="field col-12 md:col-4">
                  <label for="dateformat">Date de nascimento</label>
                  <Calendar
                    id="dateformat"
                    v-model="date1"
                    dateFormat="dd-mm-yy"
                  />
                </div>
              </div>
            </div>
            <Toast />
            <div class="col-2 mr-2">
              <Button @click.prevent="submit" label="Salvar" class="p-button-raised" />
            </div>
          </div>
          <!--Final da grid-->
        </panel>
      </template>
      <!--Final do tamplete #content-->
    </Card>
    <!--Final do Card-->
  </div>
  <!--Final da Div app-->
</template> <!--Final do template geral-->


<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      value1: null,
      value2: null,
      val1: null,
      checked1: false,
      checked2: false,
      selectCategoria: null,
      animal: [{ nomeAnimal: "Canino" }, { nomeAnimal: "Felino" }],
      date1: null,
    };
  },
  validations() {
    return {
      value1: { required }, // Matches this.firstName
    };
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        console.log("submit!");
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Erro ao enviar",
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "success",
          summary: "Success Message",
          detail: "Order submitted",
          life: 3000,
        });
      }
    },
  },
};
</script>

<style>
</style>

