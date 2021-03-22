<template>
  <div>
  
    <div v-for='prec in precs' v-bind:key='prec.id' class="card" >
      <div class="container-fluid">          
          <div class="row"><div class="col-12">{{ prec.merchantName }} </div></div>
          <div class="row"><div class="col-12">{{ prec.category }} </div></div>  
          <div class="row"><div class="col-12">{{ prec.city }} </div></div>                 
          <div class="row"><div class="col-12">{{ prec.email }} </div></div>
          <div class="row"><div class="col-12">{{ prec.phone }} </div></div>
          <div class="row"><div class="col-12">Responsável: {{ prec.name }} </div></div>

          <div class="row">
              <div class="col-2">&nbsp;</div> 
              <div class="col-5 mydanger" v-on:click="deletePreCadastrados(prec.id)">Apagar</div>             
              <div class="col-5 mysucess" v-on:click="cadastrarPreCadastrados(prec.id)">Cadastrar</div>                                
          </div>
      </div>
    </div>
  
 </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name : 'PreCadastrados',   
    data () {
      return {
        baseUrl: this.$root.$children[0].SERVERAPI.server,
        bearerToken: "Bearer " + this.$root.$children[0].LOGIN.token,
        precs: {}
      }
    },
    methods: { 
      preregister: function() {
        axios.get(this.baseUrl + "merchants/preregister", 
                { headers: { 'Authorization': this.bearerToken }})         
             .then(response => { this.precs = response.data; })
             .catch(error => {           
                  console.error("There was an error! :: PreCadastrados", error);
                  alert("PreCadastrados:\n" + error);
        });                 
      },   
      deletePreCadastrados: function(id) {         
         axios.delete(this.baseUrl + "merchants/preregister/" + id, 
                 { headers: { 'Authorization': this.bearerToken }})         
              .then( () => { this.precs = this.precs.filter(x => x.id !== id) })
              .catch(error => {          
                      console.error("There was an error! :: PreCadastrados - DELETE", error);                     
                      alert("PreCadastrados - DELETE :\n" + error);
         });                 
      },
      cadastrarPreCadastrados: function(id) {       
        var obj = this.precs.filter(x => x.id === id);
        this.precs = this.precs.filter(x => x.id !== id);   
        this.fillFormulario(obj);     
      }, 
      fillFormulario: function(obj) {
        this.$parent.$children[1].merchantName = obj[0].merchantName;
        this.$parent.$children[1].name = obj[0].name;
        this.$parent.$children[1].city = obj[0].city;
        this.$parent.$children[1].email = obj[0].email;
        this.$parent.$children[1].phone = obj[0].phone;
        //this.$parent.$children[1].category = obj[0].category;
      },
    },
    mounted() {
        console.log("mounted in PreCadastrados");
    },
    created() {
      this.preregister();       
    }
  }
</script>
<style scoped>
 .card {
     /*border: 1px solid black;*/
     background: azure;
     font: 12px Arial, sans-serif;
     text-align: left;
     margin-bottom:3px;
 }
 .mydanger { 
     color: white;
     background:crimson;
     cursor: pointer;
  }
  .mysucess { 
     color: white;
     background:green;
     cursor : pointer;
  }  
</style>