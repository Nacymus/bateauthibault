<template>
    <div>
    <h1 id="titre">Nos Restaurants Partenaires</h1>
    <div class="description" align="center">
    <p>Vente en direct de notre bateau</p>
    <p>Produits selon la saison, Livraisons sur Paris</p>
    </div>
    <div class="tel">
      <p>06.63.99.99.78</p>
    </div>
    <div class="mail">
      <p>lebateaudethibault@gmail.com</p>
    </div>
    <div class="face">
      <p>www.facebook.com/lebateaudethibault</p>

    </div>
    <div class="spacer"/>
    <div class="grid">
      <button class="grid-item1" @click="toE"><div class="button-text" align="left">Le Bistrot des GAscons</div></button>
      <button class="grid-item2" @click="toF"><div class="button-text" align="left">Les Fous de l'Ile</div></button>
      <button class="grid-item3" @click="toG"><div class="button-text" align="left">Le Bistrot Landais</div></button>
      <button class="grid-item4" @click="toH"><div class="button-text" align="left">L Villa 9 Trois</div></button>
      <button class="grid-item5" @click="toI"><div class="button-text" align="left">Bistrot Du Sommellier</div></button>
      <button class="grid-item6" @click="toContact"><div class="button-text" align="left">Contact</div></button>

    </div>

    </div>
</template>

<script>
import { defineComponent} from 'vue'

export default defineComponent({
    name: 'Vue2',
    methods:{
        toContact(){
            this.$router.push({name:'Vue1'})
        },
        toE(){
            this.$router.push({name:'Vue30'})
        },
        toF(){
            this.$router.push({name:'Vue31'})
        },
        toG(){
            this.$router.push({name:'Vue32'})
        },
        toH(){
            this.$router.push({name:'Vue33'})
        },

        toI(){
            this.$router.push({name:'Vue34'})
        }    
    }
})
</script>



<style>
body{
    
    background-image: url("../assets/fond.jpeg") ;
     background-repeat: no-repeat; 
    background-position: center;
    background-attachment: fixed;       
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height:100%;
    width:100%;
}
#titre{
  font-family: "Snell Roundhand", "Noteworthy", "Times New Roman";
  margin-top: 12%;
  margin-bottom: 10%;
  color: white;
  font-size: 30;
  font-weight:bold;
  font-style: italic;
}
.description{

  font-family: "Noteworthy", "Times New Roman";
  color: #505050;
  font-size: 12;
  font-weight: bold;
  font-style: italic;

  
  
}
p{
  margin: 6px 0px;
}
.grid{
  display: grid;
  grid-template-columns: auto auto ;
  grid-template-rows: 70px 70px 70px;
  grid-gap: 10px;
  
}
.grid-item1{
  background-image: url("../assets/desGascons.png") ;
  background-repeat: no-repeat; 
  background-size: 60px 60px;
  background-position-x: 10px;
  grid-column: 1 ;
  grid-row: 1;
  border-radius: 0;
  
}
.grid-item2{
  background-image: url("../assets/fousDeLile.png") ;
  background-repeat: no-repeat; 
  background-size: 60px 60px;
  background-position-x: 10px;
  grid-column: 1 ;
  grid-row: 2;
  border-radius: 0;
}
.grid-item3{
  background-image: url("../assets/bistrotLandais.png") ;
  background-repeat: no-repeat; 
  background-size: 60px 60px;
  background-position-x: 10px;
  grid-column: 2 ;
  grid-row: 1;
  border-radius: 0;
}
.grid-item4{
  background-image: url("../assets/villa9Trois.png") ;
  background-repeat: no-repeat; 
  background-size: 60px 60px;
  background-position-x: 10px;
  grid-column: 2 ;
  grid-row: 2;
  border-radius: 0;
}

.grid-item5{
  background-image: url("../assets/duSommelier.png") ;
  background-repeat: no-repeat; 
  background-size: 60px 60px;
  background-position-x: 10px;
  grid-column: 1 ;
  grid-row: 3;
  border-radius: 0; 
}
.grid-item6{
  background-image: url("../assets/ancre.png") ;
  background-repeat: no-repeat; 
  background-size: 60px 60px;
  background-position-x: 10px;
  grid-column: 2 ;
  grid-row: 3;
  border-radius: 0; 
}

.tel{
  font-family: "Noteworthy", "Times New Roman";
  color: #505050;
  font-size: 12;
  margin-top: 0%;
  margin-bottom: 0;
}
.face{
  font-family: "Noteworthy", "Times New Roman";
  color: #505050;
  font-size: 12;
  font-style: italic;
  margin-top: 0;
}
.mail{
  font-family: "Noteworthy", "Times New Roman";
  color: #505050;
  font-size: 12;
  font-style: italic;
  margin-top: 0;
}
.spacer{
  padding-bottom: 10%;
}

button{
  border-radius: 0;
  background-color: rgba(0,0,0,.3);
  color: white;
  font-size:14px;
}

img{
  margin-left: 0;
  align-self: left;
}

.button-text{

  margin-left: 70px;

}

</style>