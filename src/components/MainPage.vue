<template>
<div class="container-fluid fullscreen">
   <div class="d-flex flex-row bg-secondary">
        <div class="p-2 bg-info one">          
           <main-page-left>  </main-page-left>
        </div>
       
        <div class="container-fluid">
         <div class="p-2 two">Gestor Delivery</div>         
          <main-page-right>  </main-page-right>
        </div> 
        
    </div>
</div>
</template>

<script>

import MainPageLeft from '@/components/MainPageLeft' 
import MainPageRight from '@/components/MainPageRight' 
export default {
  name: 'MainPage',
  components: {MainPageLeft, MainPageRight}, 
}
</script>

<style scoped>
a {
  color: black;
}
.one {
    min-width:15%;
    height:99vh;
    padding-top: 20px;   
    background: rgb(255, 0, 0);   
}
.two {
    min-width:80%;
    background: darkblue !important;
    color :white !important
}
.three {
    min-width:85%;
    height:94vh;
    background: rgb(30, 158, 158);    
}
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: azure; 
  border: 1px solid black;
}

</style>