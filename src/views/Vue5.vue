<template>
<div>
    <nav class="navbar"> 
        <button class="buttonhome" @click="toHome"/>
        <button class="buttonpanier"/>
    </nav>
    <div class="description" align="center">
    <p>Choisissez vos produits</p>
    </div>
    
    <div class="products-type">
        <button class="product-type1" @click="to0"><div class="product-button-text" align="left">Poissons</div></button>
        <button class="product-type2"><div class="product-button-text" align="left">Coquillages</div></button>
        <button class="product-type3"><div class="product-button-text" align="left">Crustacés</div></button>
        <button class="product-type4"><div class="product-button-text" align="left">Promotions</div></button>
    </div>
</div>
</template>

<script>
import { defineComponent} from 'vue'
export default defineComponent({
    
   name:'Vue5',
   methods:{
       to0(){
            this.$router.push({name:'Vue50'})

        },
        toHome(){
            this.$router.push({name:'Vue0'})

        }
   }
})
</script>


<style>
.navbar{
    display:grid;
    grid-template-columns: 100px auto 100px;
    grid-template-rows: 50px;
    background-image: url("../assets/navbarbg.png") ;
    background-repeat: no-repeat; 
    background-position: center;
    background-size:200px 50px;
    
    background-color:black;
   
}
.buttonhome{
    background-image: url("../assets/homeLogo.png") ;
    background-repeat: no-repeat; 
    background-position: center;
    background-size: 30px 30px;
    border-style: none;
    grid-column: 1 ;
  grid-row: 1;
  
}
.buttonpanier{
    background-image: url("../assets/cartLogo.png") ;
    background-repeat: no-repeat; 
    background-position: center;
    background-size: 30px 30px;
    border-style: none;
    grid-column:3;
    grid-row: 1;
}

.products-type{
  display: grid;
  grid-template-columns: auto  ;
  grid-template-rows: 110px 110px 110px 110px;
  grid-gap: 20px;
  
}
.product-type1{
 background-image: url("../assets/poulpe.png") ;
 grid-row: 1;
 background-repeat: no-repeat; 
 background-size: 100px 100px;
  background-position-x: 10px;
}
.product-type2{
 background-image: url("../assets/poulpe.png") ;
 grid-row: 2;   
 background-repeat: no-repeat; 
  background-size: 100px 100px;
  background-position-x: 10px;
}
.product-type3{
 background-image: url("../assets/poulpe.png") ;
 grid-row: 3;
 background-repeat: no-repeat; 
  background-size: 100px 100px;
  background-position-x: 10px;
}
.product-type4{
 background-image: url("../assets/poulpe.png") ;
 grid-row: 4; 
 background-repeat: no-repeat; 
  background-size: 100px 100px;
  background-position-x: 10px;
}

.product-button-text{
    margin-left: 110px;
    font-size: 17px;
}
</style>