<template>
  <div class="container-fluid">
      
          <div class="row">
            <div class="col-3 all">
              <div class="container">
                <div class="row">
                  <div class="col-3  estabelicimentos">
                  Estabelecimentos
                  </div>
                </div>
                <div class="row align-items-end">
                 
                  <div class="col-10  precadastrados">
                    Pré-cadastrados                   
                  </div>
                  <div class="col-2">                
                  <img v-on:click="refresh" src="../assets/refresh.png" alt="refresh" 
                    width=20px; height=20px;  
                    style="cursor:pointer;"                    
                     />                    
                  </div>   
                </div>
                <div class="row">
                  <div class="col-12 list-precadastrados">
                     <pre-cadastrados></pre-cadastrados>
                  </div>
                </div>
              </div>
            </div>
              
            <div class="col-9 all">
               <div class="container mr-auto" style="padding-top:120px;">

                <div class="row" >
                  <div class="col-11 ">  
                    &nbsp;
                    </div>
                  <div class="col-1 ">                   
                   
                    <img src="../assets/search.png" 
                    alt="Buscar" 
                    width=30px; height=30px;   
                    v-on:click="toggle"
                    class="search-img"
                    />
                  </div>  
                
                </div>
                <div class="row" id="id-myform" style="border:1px solid black;display:block;"> 
                   <formulario ></formulario>               
                 </div>
                <div class="row" id="id-search" style="border:1px solid black;display:none;">
                   <search ></search>               
                 </div>          
              </div>
            </div>
          </div> 
      
  </div> 
</template>

<script>

import PreCadastrados from '@/components/Precadastrados'
import Formulario from '@/components/Formulario'   
import Search from '@/components/Search' 

import jQuery from 'jquery'
const $ = jQuery
window.$ = $

export default {
  name: 'MainPageRight',
  components : {PreCadastrados, Formulario, Search},
  data() {
   return { 
            
          }
  },
  methods: {
      refresh: function () {        
        this.$children[0].preregister();
      },
      toggle: function (event) {
        
            var display_myform = $("#id-myform").css("display");
            if (display_myform == "block") {
              $("#id-myform").css("display","none");
            }
            else {
              $("#id-myform").css("display","block");
            }

            var display_search = $("#id-search").css("display");
            if (display_search == "block") {
              $("#id-search").css("display","none");
            }
            else {
              $("#id-search").css("display","block");
            }
       
         },

    },
}
</script>

<style scoped>

.search {
  display:block;
}
.estabelicimentos {
   font: 24px Arial, sans-serif;
   padding-top:50px;  
}
.precadastrados {
   font: 18px Arial, sans-serif;
   padding-top:30px; 
  
}
.list-precadastrados {  
   padding-top:20px;  
}
.all {
  background: rgb(235, 235, 224);   
  border : 1px solid black;
}
.search-img{   
   
    cursor:pointer;
    background-color: rgba(23, 162, 184, 0.3);    
}
</style>