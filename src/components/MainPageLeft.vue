<template>
            <div class="container">
                 <div class="row" style="padding:50px;">
                    <div class="col">
                   <img src="../assets/singledeliverywhite.png" alt="singleDelivery" 
                    width=100px; height=100px; 
                     />  
               </div>  
               </div>

                <div class="row" style="padding:50px;">
                    <div class="col">
                   Estabelecimentos
               </div>
               </div>
               <div class="row">
                    <div class="col">
                   <router-link to="/logmein">Sair</router-link>
               </div>
               </div>
            </div>
                           
</template>
<script>

export default {
  name: 'MainPageLeft' 
}
</script>
<style scoped>
a {
  color: black;
}
</style>