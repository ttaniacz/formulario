  <template>
  <div id="app">
    <Card>
      <template #title> Cadastro do Animal </template>
      <template #content>
        <div class="p-fluid grid">
          <div class="col-12 md:col-6">
            <span class="p-float-label">
              <InputText id="username1" type="text" v-model="pessoa.nomeDono" />
              <label for="username1">Nome do dono do animal</label>
            </span>
          </div>
          <div class="col-12 md:col-6">
            <span class="p-float-label">
              <InputMask
                id="telefone"
                mask="(99) 99999-9999"
                v-model="pessoa.telefone"
              />
              <label for="telefone">Telefone</label>
            </span>
          </div>
          <div class="col-12 md:col-6">
            <span class="p-float-label">
              <InputText
                id="username2"
                type="text"
                v-model="pessoa.nomeAnimal"
              />
              <label for="username2">Nome do Animal</label>
            </span>
          </div>
          <div class="col-12 md:col-6">
            <Dropdown
              v-model="pessoa.genero"
              :options="animal"
              optionLabel="nomeAnimal"
              placeholder="Gênero do Animal"
            />
          </div>
          <div class="col-12 md:col-6">
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
          <div class="col-12 md:col-6">
            <div class="field col-12 md:col-4">
              <label for="dateformat">Date de nascimento</label>
              <Calendar
                id="dateformat"
                v-model="pessoa.dtNascimento"
                dateFormat="dd-mm-yy"
              />
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <Button label="Salvar" class="p-button-raised" @click="send" />
      </template>
    </Card>
  </div>
</template>

<script>
import Pessoa from "./models/pessoa";
export default {
  data() {
    return {
      pessoa: new Pessoa(),
      checked1: false,
      checked2: false,
      selectCategoria: null,
      animal: [{ nomeAnimal: "Canino" }, { nomeAnimal: "Felino" }],
      date1: null,
    };
  },
  created() {
    console.log(this.pessoa);
  },
  methods: {
    send(){
      console.log(this.pessoa);
    }
  },
};
</script>

<style>
</style>

