  <template>
  <!--Inicio do template geral-->
  <div id="app">
    <!--Inicio da Div app-->
    <Card class="grid">
      <!--Inicio do Card-->
      <template #content>
        <br>
        <!--Inicio da grid-->
        <panel>
          <template #header>
            <!--Configuração do Texto-->
            <div class="
            text-1000
            font-bold
            m-2
            flex
            align-items-center
            justify-content-center">Cadastro do Animal
            </div>
          </template>
          <br>
          <form>
            <div class="p-fluid grid formgrid ">
              <div class="grid">
                <!--class nome pessoa-->
                <div class="col-6">
                  <span class="p-float-label">
                    <InputText id="username1" type="text" v-model="v$.value1.$model"
                      :class="{ 'p-invalid': v$.value1.$invalid && submitted}" />
                    <label for="username1"> Nome </label>
                  </span>
                </div>
                <!--class telefone pessoa-->
                <div class="col-3">
                  <span class="p-float-label">
                    <InputMask id="telefone" mask="(99) 99999-9999" v-model="v$.tel.$model"
                      :class="{ 'p-invalid': v$.tel.$invalid && submitted}" />
                    <label for="telefone">Telefone</label>
                  </span>
                </div>
                <!--classe nome animal-->
                <div class="col-6 mt-4">
                  <span class="p-float-label">
                    <InputText id="username2" type="text" v-model="v$.value2.$model"
                      :class="{ 'p-invalid': v$.value2.$invalid && submitted}" />
                    <label for="username2">Nome do Animal</label>
                  </span>
                </div>
                <!--classe gênero do animal-->
                <div class="mt-4 col-3">
                  <Dropdown v-model="v$.selectGenero.$model" :class="{ 'p-invalid': v$.selectGenero.$invalid && submitted }"
                    :options="animal" optionLabel="nomeAnimal" placeholder="Gênero do Animal" />
                </div>
                <!--class sexo-->
                <div class="col-6">
                  <h5>Sexo do Animal</h5>
                  <div class="field-radiobutton">
                    <RadioButton id="sexo1" name="city" value="macho" v-model="v$.sexo.$model"
                      :class="{ 'p-invalid': v$.sexo.$invalid && submitted }" />
                    <label for="sexo1">Macho</label>
                  </div>
                  <div class="field-radiobutton">
                    <RadioButton id="sexo2" name="city" value="femea" v-model="v$.sexo.$model" />
                    <label for="sexo2">Fêmea</label>
                  </div>
                </div>
                <!--Class data de nascimento -->
                <div class="mt-3 col-6">
                  <div class="field col-12 md:col-4">
                    <label for="dateformat">Date de nascimento</label>
                    <Calendar id="dateformat" v-model="date1" dateFormat="dd-mm-yy" />
                  </div>
                </div>
              </div>
              <Toast />
              <!-- <div class="col-2 mr-2">
              <Button
                @click.prevent="submit"
                label="Salvar"
                class="p-button-raised"
              />
            </div> -->
              <div class="col-2 mr-2">
                <Button label="Salvar" icon="pi pi-external-link" @click="openConfirmation" />
                <Dialog header="Confirme seus Dados" v-model:visible="displayConfirmation" :style="{ width: '350px' }"
                  :modal="true">
                  <div class="confirmation-content">
                    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                    <span>Seus dados estão corretos?</span>
                  </div>
                  <template #footer>
                    <Button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text" />
                    <Button label="Yes" icon="pi pi-check" @click="closeConfirmation" class="p-button-text" autofocus
                      @click.prevent="submit" />
                  </template>
                </Dialog>
              </div>
            </div>
          </form>
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
      tel: null,
      sexo: null,
      selectGenero: null,
      animal: [{ nomeAnimal: "Canino" }, { nomeAnimal: "Felino" }],
      date1: null,
      displayConfirmation: false,
      submitted: false,
    };
  },
  validations() {
    return {
      value1: { required }, // Matches this.firstName
      tel: { required },
      value2: { required },
      selectGenero: { required },
      sexo: { required },
    };
  },

  methods: {
    submit() {
      this.v$.$touch();
      this.submitted=true;
      console.log(this.v$.$invalid);
      if (this.v$.$invalid) {
        console.log("submit!");
        this.$toast.add({
          severity: "error",
          summary: "Não foi possível salvar",
          detail: "Preencha os campos obrigatórios",
          life: 3000,
        });
      } else {
        console.log("else!");
        this.$toast.add({
          severity: "success",
          summary: "Cadastro salvo com sucesso",
          detail: "Seja bem vindo!",
          life: 3000,
        });
        this.resetForm();
      }
    },

    openConfirmation() {
      this.displayConfirmation = true;
    },
    closeConfirmation() {
      this.displayConfirmation = false;
    },
    resetForm(){
      this.value1= null;
      this.value2= null;
      this.tel= null;
      this.sexo= null;
      this.selectGenero= null;
      this.animal= [{ nomeAnimal: "Canino" }, { nomeAnimal: "Felino" }];
      this.date1= null;
      this.displayConfirmation= false;
    },
  },//fim de metodos
};
</script>

<style>
</style>

