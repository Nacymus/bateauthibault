<template>
    <div>
    <h1 id="titre">Le bateau de Thibault</h1>
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
      <button class="grid-item1" @click="toShop"><div class="button-text" align="left">Produits et promotions</div></button>
      <button class="grid-item2"><div class="button-text" align="left">Bateaux</div></button>
      <button class="grid-item3"><div class="button-text" align="left">Restaurants</div></button>
      <button class="grid-item4"><div class="button-text" align="left">Recettes</div></button>
      <button class="grid-item5"><div class="button-text" align="left">Contact</div></button>
    </div>

    </div>
</template>

<script>
import { defineComponent} from 'vue'

export default defineComponent({
    name: 'Vue0',
    methods:{
        toShop(){
            this.$router.push({name:'Vue5'})

        }
    }
})
</script>



<style>
body{
    
    background-image: url("../assets/background.png") ;
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
  background-image: url("../assets/poisson.png") ;
  background-repeat: no-repeat; 
  background-size: 60px 60px;
  background-position-x: 10px;
  grid-column: 1 / span 2;
  grid-row: 1;
  border-radius: 0;
  
}
.grid-item2{
  background-image: url("../assets/ancre.png") ;
  background-repeat: no-repeat; 
  background-size: 60px 60px;
  background-position-x: 10px;
  grid-column: 1 ;
  grid-row: 2;
  border-radius: 0;
}
.grid-item3{
  background-image: url("../assets/restaurant.png") ;
  background-repeat: no-repeat; 
  background-size: 60px 60px;
  background-position-x: 10px;
  grid-column: 2 ;
  grid-row: 2;
  border-radius: 0;
}
.grid-item3{
  background-image: url("../assets/restaurant.png") ;
  background-repeat: no-repeat; 
  background-size: 60px 60px;
  background-position-x: 10px;
  grid-column: 2 ;
  grid-row: 2;
  border-radius: 0;
}
.grid-item4{
  background-image: url("../assets/recette.png") ;
  background-repeat: no-repeat; 
  background-size: 60px 60px;
  background-position-x: 10px;
  grid-column: 1 ;
  grid-row: 3;
  border-radius: 0;
}
.grid-item5{
  background-image: url("../assets/tourteau.png") ;
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
