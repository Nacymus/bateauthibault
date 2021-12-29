<template>
    <div>
    <h1 id="titre">De la Brise</h1>
    <div align="center">
        <img class="bateau-img" src="../assets/deLaBrise.png">
    </div>

    <div class="description" align="center">
        <p>Brise d'été</p>
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
        name: 'Vue20'
    })
</script>

<style scoped>
#titre {
    font-size: 38px;
    font-weight: 300;
    font-weight: bold;
    font-style: normal; 
    letter-spacing: 1.1px;
    color: #050505;
    margin: 0 22px 0 0;
    padding: 0;
    line-height: 55px;
}
.bateau-img{
  width : 275px; height : 275px;
  border: none;
  -moz-border-radius : 550px;
  -webkit-border-radius : 550px;
  border-radius : 550px;
}
.decription{
  margin-top: 20px;
  font-weight: bold;
  font-family: "Times New Roman";
  color: #020202;
  font-size: 14;
  font-style: normal;
}
.description-bateau{
  margin-top: 20px;
  font-weight: bold;
  font-family: "Times New Roman";
  color: #020202;
  font-size: 11;
  font-style: normal;
}
.pdesc{
   margin: 0px 0px; 
}

</style>