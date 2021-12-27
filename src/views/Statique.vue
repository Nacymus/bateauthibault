<template>
    <div>
    <h1 id="titre">De la brise</h1>
    
    <div align="center">
        <img class="bateau-img" src="../assets/deLaBrise.png">
    </div>

   

    <div class="description" align="center">
        <p>XXX YYY ZZZ</p>
    </div>

    <div class="description-bateau" align="center">
        <p class="pdesc">Qu'il est chaud le soleil</p>
        <p class="pdesc">Quand nous sommes en vacances</p>
        <p class="pdesc">Y a d' la joie, des hirondelles</p>
        <p class="pdesc">C'est le sud de la France</p>
        <p class="pdesc">Papa bricole au garage</p>
        <p class="pdesc">Maman lit dans la chaise longue</p>
        <p class="pdesc">Dans ce joli paysage</p>
        <p class="pdesc">Moi, je me balade en tongs</p>
        <p class="pdesc">Que de bonheur!</p>
        <p class="pdesc">Que de bonheur!</p>
   
        
        
    </div>
    </div>
</template>


<script>
import { defineComponent} from 'vue'

export default defineComponent({
    name: 'Statique'
})
</script>

<style scoped>

.bateau-img{
    height: auto;
    width: auto;
    margin-bottom: 20px;
}

.description-bateau{
    margin-top: 20px;
      font-family: "Noteworthy", "Times New Roman";
  color: #505050;
  font-size: 10;
  
  font-style: italic;
}
.pdesc{
   margin: 0px 0px; 
}

</style>
