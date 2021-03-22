<!--
LogMeIn.vue
get login credentials, save them in App.LOGIN
redirect to main site
OBS.: 
todo: make it responsive ...
-->
<template>  
 <div class="container-fluid">
  <div class="row">   
    <div class="col-sm">
      <div class="bg-img"> 
       
            <form action="javascript:void(0);" class="centered">
                
                <label >                    
                  <img src="../assets/singledeliverywhite.png" alt="singleDelivery" 
                    width=100px; height=100px; 
                    style="position: absolute;left:-0px; top: -80px;z-index: 10;" />                    
                </label>                           

                <input v-model="form['user']" 
                       class="form-control input-sm" 
                       v-bind:class = "{ error : hasError }" 
                       type="text" placeholder="Login" required>                           
                <input v-model="form['password']" 
                       class="form-control input-sm" 
                       v-bind:class = "{ error : hasError }" 
                       type="password" placeholder="Senha" required>             
               
                <button v-on:click="logmein" type="button" class="btn btn-outline-primary py-2">Entrar</button>
              
            </form>           
      </div>
    </div>
  </div>
   <p> {{ info }} </p>
 </div>
</template>

<script>
import axios from 'axios'
 export default {  
  name: 'LogMeIn',   
  // create an object to hold all form values
  data() {
   return { form: {},
            info: null,
            hasError: false }
  },
  methods: {  
   logmein: function (event) {
      // `this` inside methods points to the Vue instance
      // `event` is the native DOM event
      // localhost:8088 => vs. 192.168.0.153:8088 
      // => CORS problem => use IP
    
      var user = this.form.user;
      var password = this.form.password;            
            
      var creds = {};
      creds.Login = this.form.user;
      creds.Password = this.form.password;                 
      // get base server URL from root components first child (App.vue)
      // [development|production]
      var base = this.$root.$children[0].SERVERAPI.server;
      // POST request using axios with error handling
      axios.post(base + "token/tokensuperuser", creds)
        .then(response => { 
                    this.info = response.data; 
                    this.hasError = false;
                    // set LOGIN with token in root components first child (App.vue)
                    this.$root.$children[0].LOGIN.user = user;
                    this.$root.$children[0].LOGIN.password = password;
                    this.$root.$children[0].LOGIN.token = response.data; // bearer token
                    //var baseURL = window.location.origin + "/";
                    var target = 'mainPage';
                    if (this.$router.mode == "hash")
                    {
                      target = "#/" + target;
                    }                    
                    // not working if in hash mode
                    // this.$router.push(target);
                    // redirect ...
                    console.log(target);
                    window.location.href = target;
                    })
        .catch(error => {
          this.errorMessage = error.message;
          this.info = error.message;
          this.hasError = true;
          console.error("There was an error!", error);
        });
     
    }
  }
 }
</script>

<style scoped>

.error {
  background: #e10000!important; 
}

.centered {
  position: fixed;
  top: 50%;
  left: 50%;  
  transform: translate(-50%, -50%);
}

.bg-img {
  /* The image used */
  background-image: url("../assets/backgroundlogin.png");

  /*min-height: 380px;*/
  min-height: 600px;
  height: 90%;
  max-height:90%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  max-width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  /*background: #f1f1f1;*/
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}


/* Set a style for the submit button */
.btn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.btn:hover {
  opacity: 1;
}

@media screen and (min-device-width:698px) {
  div#showgrid {
    /*width: 698px;*/
    width: 90%;
    height:90%;
    margin: auto;
  }
}
div.col-sm {
     border-style: solid;
  border-width: 1px;
}
div.column {
  border-style: solid;
  border-width: 1px;
  
}

.rowx {
  width: 100%;
  margin: auto;
  background: #d2c49b;

}

@media (min-device-width: 698px) {
  .column {
    display: inline;
    float: left;
  }
}

.column {
  width: 100%;
  
  margin: auto;
}
</style>