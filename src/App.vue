<template>
<Panel>
    <div class="grid">
    <div class="col">Formulário</div>
    
    </div>

  <div id="app">
    <h1>Formulario</h1>

    <span class="p-float-label">
      <InputText id="username" type="text" v-model="value" />
      <label for="username">Nome Completo</label>
    </span>
    
    <span class="p-float-label">
      <InputMask id="cpf" mask="999-999-999-99" v-model="val1" />
      <label for="cpf">CPF</label>
    </span>

    <span class="p-float-label">
    <InputMask id= "Telefone" mask="(999) 999-9999" v-model="val4" />
    <label for="Phone">Telefone</label>
    </span>
    <!--
    <div class="field col-12 md:col-4">
      <label for="basic">CPF</label>
      <InputMask mask="999-999-999-99" v-model="val1" placeholder="CPF" />
    </div>
    -->

    <h5>Raised Buttons</h5>
    <Button label="Primary" class="p-button-raised" />
    <Button label="Secondary" class="p-button-raised p-button-secondary" />
  </div>

</Panel>

</template>

<script>
export default {
  components: {},
};
</script>

<style>
</style>