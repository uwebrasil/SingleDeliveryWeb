<template>
<div style="padding-top:10px;">
  <b-container class="bv-container">
    <!--FIRST ROW -->
    <b-row>
      <!--Merchant Name-->  
      <b-col cols="5" class="border">
        <b-form-group description="Merchant Name">
          <b-form-input v-model="merchantName" id="merchantName" size="sm" placeholder="Merchant Name" :state="state" trim></b-form-input>
        </b-form-group>
      </b-col>
      <!--Status-->
      <b-col cols="2" class="border">
        <b-form-group description="Status">
          <b-form-select v-model="selected" id="status" size="sm" :options="options"></b-form-select>
        </b-form-group>
      </b-col>
      <!--Category-->
      <b-col cols="3" class="border">
        <b-form-group description="Category">
          <b-form-select v-model="selected_category" id="category" size="sm" :options="options_category"></b-form-select>
       </b-form-group>
      </b-col>
      <!--Commission-->     
      <b-col cols="2" class="border">
        <b-form-group description="Commission">
          <b-form-input v-model="commission" id="commission" size="sm" placeholder="Commission"  :state="state" trim></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <!--SECOND ROW -->
    <b-row>
      <!--Name-->     
      <b-col cols="5" class="border">
        <b-form-group description="Responsável">
          <b-form-input v-model="name" id="name" size="sm" placeholder="Name"  :state="state" trim></b-form-input>
        </b-form-group>
      </b-col>
      <!--Cnpj-->     
      <b-col cols="2" class="border">
        <b-form-group description="Cnpj/Cpf">
          <b-form-input v-model="cnpj" id="cnpj" size="sm" placeholder="Cnpj"  :state="state" trim></b-form-input>
        </b-form-group>
      </b-col> 
      <!--Email-->     
      <b-col cols="3" class="border">
        <b-form-group description="Email">
          <b-form-input v-model="email" id="email" size="sm" placeholder="Email"  :state="state" trim></b-form-input>
        </b-form-group>
      </b-col> 
      <!--Phone-->     
      <b-col cols="2" class="border">
        <b-form-group description="Phone">
          <b-form-input v-model="phone" id="phone" size="sm" placeholder="Phone"  :state="state" trim></b-form-input>
        </b-form-group>
      </b-col>        
    </b-row>

    <!-- SENHA -->
    <b-row style="margin-top:20px;"> 
       <b-col cols="12" class="border header text-left">SENHA</b-col>  
       <!--Senha-->     
       <b-col cols="7" class="border">       
          <b-form-input v-model="aleatoria" id="aleatoria" size="sm" placeholder="Aleatória"  :state="state" trim></b-form-input>      
       </b-col>        
       <b-col cols="3" class="border">  
         <b-button v-on:click="alea" size="sm" variant="outline-primary">Gerar Aleátoria</b-button>
       </b-col> 
    </b-row>

    <!-- ENDEREÇO -->
    <!-- FIRST ROW -->
    <b-row style="margin-top:10px;">
      <b-col cols="12" class="border header text-left">ENDEREÇO</b-col>  
      <!--CEP-->     
      <b-col cols="3" class="border">
        <b-form-group description="cep">
          <b-form-input v-model="cep" id="cep" size="sm" placeholder="CEP"  :state="state" trim></b-form-input>
        </b-form-group>
      </b-col>           
    </b-row>
    <!-- SECOND ROW -->
    <b-row>    
      <!--LOGRADOURO-->     
      <b-col cols="7" class="border">
        <b-form-group description="Logradouro">
          <b-form-input v-model="logradouro" id="logradouro" size="sm" placeholder="Logradouro"  :state="state" trim></b-form-input>
        </b-form-group>
      </b-col>   
       <!--NÚMERO-->     
      <b-col cols="2" class="border">
        <b-form-group description="Numero">
          <b-form-input v-model="numero" id="numero" size="sm" placeholder="Numero"  :state="state" trim></b-form-input>
        </b-form-group>
      </b-col>    
       <!--BAIRRO-->     
      <b-col cols="3" class="border">
        <b-form-group description="Bairro">
          <b-form-input v-model="bairro" id="bairro" size="sm" placeholder="Bairro"  :state="state" trim></b-form-input>
        </b-form-group>
      </b-col>                  
    </b-row>

    <!-- THIRD ROW -->
    <b-row>    
      <!--CITY-->     
      <b-col cols="7" class="border">
        <b-form-group description="City">
          <b-form-input v-model="city" id="city" size="sm" placeholder="City"  :state="state" trim></b-form-input>
        </b-form-group>
      </b-col>   
       <!--ESTADO-->     
      <b-col cols="3" class="border">
        <b-form-group description="Estado">
          <b-form-input v-model="estado" id="estado" size="sm" placeholder="Estado"  :state="state" trim></b-form-input>
        </b-form-group>
      </b-col>           
    </b-row>

    <!-- FOURTH ROW -->
    <b-row>    
      <!--LONGITUDE-->     
      <b-col cols="3" class="border mb-5">       
          <b-form-input v-model="longitude" id="longitude" size="sm" placeholder="Longitude"  :state="state" trim></b-form-input>      
      </b-col>   
       <!--LATITUDE-->     
      <b-col cols="3" class="border">       
          <b-form-input v-model="latitude" id="latitude" size="sm" placeholder="Latitude"  :state="state" trim></b-form-input>       
      </b-col> 
      <!--NOVO-->
       <b-col cols="3" class="border">  
         <b-button v-on:click="novo" size="sm" variant="outline-primary">Novo</b-button>
      </b-col> 
       <!--SALVAR-->
      <b-col cols="3" class="border">  
         <b-button v-on:click="salvar" size="sm" variant="outline-primary">Salvar</b-button>
      </b-col>             
    </b-row>
    

</b-container>

</div>
</template>      
<script>

export default {
  name: 'MyForm',
  data() {
      return {
        state: null,
        selected: null,
        options: [
          { value: null, text: '' },
          { value: 'a', text: 'Ativo' },
          { value: 'b', text: 'Desativo' },                   
        ],
        selected_category: null,
        options_category: [
          { value: null, text: '' },
          { value: 'a', text: 'Alimentação' },
          { value: 'b', text: 'Construção' },                   
        ],
        merchantName: '',
        commission:'',
        name:'',
        cnpj:'',
        phone:'',
        email:'',
        aleatoria:'',
        logradouro:'',
        cep:'',
        numero:'',
        bairro:'',
        city:'',
        estado:'',
        longitude:'',
        latitude:'',
      }
    },
    methods: {
      alea: function () {
        alert('Gerar Aleatória');
      },
      novo: function () {
        this.merchantName = '';
        this.name  = '';
        this.city  = '';
        this.email = '';
        this.phone = '';
        //this.$parent.$children[1].category = obj[0].category;
      },
      salvar: function () {
        alert('Salvar');
      },
    }
}
</script>

<style scoped>
.header {
  background: rgb(156, 156, 224);
  color : white;
}
</style>
