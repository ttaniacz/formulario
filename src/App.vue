<template>
<Panel>
    
  <div id="app">
    <h1>Formulario</h1>

    <span class="p-float-label">
      <InputText id="username" type="text" v-model="value" />
      <label for="username">Nome Completo</label>
    </span>
    
<br>
    
    <span class="p-float-label">
      <InputMask id="cpf" mask="999-999-999-99" v-model="val1" />
      <label for="cpf">CPF</label>
    </span>

<br>
    
    <span class="p-float-label">
    <InputMask id= "telefone" mask="(999) 999-9999" v-model="val4" />
    <label for="telefone">Telefone</label>
    </span>

<br>

    <div class="field-checkbox">
    <Checkbox id="city1" name="city" value="Chicago" v-model="cities" />
    <label for="city1">Macho</label>
    </div>

    <div class="field-checkbox">
    <Checkbox id="city2" name="city" value="Los Angeles" v-model="cities" />
    <label for="city2">Fêmea</label>
    </div>
    
    </div>

    <div>
    <Button label="Editar" class="p-button-raised" />
    <Button label="Salvar" class="p-button-raised p-button-secondary" />
    </div>

    <!--
    <div class="field col-12 md:col-4">
      <label for="basic">CPF</label>
      <InputMask mask="999-999-999-99" v-model="val1" placeholder="CPF" />
    </div>
    -->

    

</Panel>

</template>

<script>
export default {
  components: {},
};
</script>

<style>
</style>