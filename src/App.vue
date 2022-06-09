  <template>
<Panel>
    
<div id="app">
<h1>Cadastro do Animal</h1>

<div>
    <span class="p-float-label">
      <InputText id="username1" type="text" v-model="value1" />
      <label for="username1">Nome do dono do animal</label>
    </span>
</div>

<br>

<div>
     <span class="p-float-label">
    <InputMask id= "telefone" mask="(99) 99999-9999" v-model="val1" />
    <label for="telefone">Telefone</label>
    </span>
</div>

<br>

<div>
    <span class="p-float-label">
      <InputText id="username2" type="text" v-model="value2" placeholder="Digite do animal" />
      <label for="username2">Nome do Animal</label>
    </span>
</div>
    
<br>
    
<div>
      <Dropdown v-model="selectCategoria" :options="animal" optionLabel="nomeAnimal" placeholder="Gênero do Animal" />
</div>

<div>
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

<br>

<div>
      <div class="field col-12 md:col-4">
      <label for="dateformat">Date de nascimento</label>
      <Calendar id="dateformat" v-model="date1"  dateFormat="dd-mm-yy" />
      </div>
</div>

    <div>
    <Button label="Salvar" class="p-button-raised" />
    </div>   

  
</div>


 </Panel>

</template>

<script>
export default {
  data(){
     return {
            checked1: false,
            checked2: false,
            selectCategoria: null,
            animal: [
                {nomeAnimal: 'Canino',},
                {nomeAnimal: 'Felino'},
            ],  
            date1: null,     
                 
  }
}
}
</script>

<style>

</style>

