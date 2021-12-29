<template>
    <div>
    <h1 id="titre">Homard en Chaud-Froid</h1>
    <div align="center">
        <img class="bateau-img" src="../assets/homardRecette_icon.png">
    </div>

    <div class="description" align="center">
        <p>Homard</p>
    </div>
    <div class="description-bateau" align="center">
        <p class="pdesc">Crustacé marin à dix pattes, qui vit dans les eaux froides</p>
        <p class="pdesc">Il mesure 30 cm environ, pour un poids de 300 à 500 g.</p>
        <p class="pdesc">Le homard est doté d'une épaisse carapace, ou test</p>
        <p class="pdesc"> Sa tête porte de longues antennes rouges.</p>
        <p class="pdesc"> L'abdomen, à sept anneaux, est rempli d'une chair blanche et dense</p>
        <p class="pdesc">La première paire de pattes porte des pinces puissantes, très charnues.</p>
    </div>
    </div>
</template>


<script>
    import { defineComponent} from 'vue'
    export default defineComponent({
        name: 'Vue40'
    })
</script>

<style scoped>
#titre {
    font-size: 38px;
    font-weight: 300;
    font-style: normal; 
    letter-spacing: 1.1px;
    font-weight: bold;
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
  font-family: "Times New Roman";
  font-weight: bold;
  color: #020202;
  font-size: 14;
  font-style: normal;
}
.description-bateau{
  margin-top: 20px;
  font-family: "Times New Roman";
  font-weight: bold;
  color: #020202;
  font-size: 11;
  font-style: normal;
}
.pdesc{
   margin: 0px 0px; 
}

</style>