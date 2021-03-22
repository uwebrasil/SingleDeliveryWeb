<template>
  <b-container class="bv-container search" style="padding-top:10px;">
    <b-row>
      <!--SearchInput-->
      <b-col cols="11" class="">
                 <b-form-input v-model="searchText" id="searchtext" size="sm" placeholder="Buscar" trim></b-form-input>        
      </b-col>
       <!--SearchButton Image-->
       <b-col cols="1" class="">          
         <img src="../assets/search.png" 
                  alt="Buscar" 
                  width=30px; height=30px;   
                  v-on:click="search"
                  class="search-img"
                  />
       </b-col> 
    </b-row>
    <!-- Results -->
    <b-row>
      <div class="container pt-5">  
       <div v-for='result in results' v-bind:key='result.id' class="card" >
              
          <div class="row" style="text-align:left">
              <div class="col-3">{{ result.name }} </div>
              <div class="col-3">{{ result.city }} </div>
              <div class="col-3">{{ result.phone }} </div>
          </div>                
      </div>
    </div>

    </b-row> 
       
       <p>{{ errormessage }}</p>
      
  </b-container>
  
</template>
<script>
import axios from 'axios'
export default {
  name: 'Search',
  data() {
      return {
         errormessage: null,
         searchText: '',
         results: {},
         baseUrl: this.$root.$children[0].SERVERAPI.server,
         bearerToken: "Bearer " + this.$root.$children[0].LOGIN.token,
      }
  },
  methods: {
      search: function () {   
        var search_me = {};
        search_me.searchtext  = this.searchText;                                           
        axios.post(this.baseUrl + "merchants/searchfull", search_me,
                  { headers: { 'Authorization': this.bearerToken }}) 
             .then(response => { this.results = response.data })
             .catch(error => {   
                    this.errormessage = error.message;        
                    console.error("There was an error - SEARCHFULL!", error);
        });
       },
    } 
}
</script>
<style scoped>
.search-img{      
    cursor:pointer;
    background-color: rgba(23, 162, 184, 0.3);    
}
.search {
  background: whitesmoke;
}
</style>
