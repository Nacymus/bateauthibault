<template>
    <div>
    <h1 id="titre">Tourteau Linguine</h1>
    <div align="center">
        <img class="bateau-img" src="../assets/linguine.jpeg">
    </div>

    <div class="description" align="center">
        <p>Tourteau de Rêves</p>
    </div>
    <div class="description-bateau" align="center">
        <p class="pdesc">Certains y voient un poisson à la chair</p>
        <p class="pdesc">D'autres le trouvent juste assez bon pour être grillé</p>
        <p class="pdesc">Nous on en fait iun rôti comme on envoir rarement sur les plages </p>
        <p class="pdesc">De Normandie. Tout cela bien sûr c'est grâce à nos eaux </p>
        <p class="pdesc"> Qui mettent du bon planctons dan sle bide de nos poissons merveilleux</p>
    </div>
    </div>
</template>


<script>
    import { defineComponent} from 'vue'
    export default defineComponent({
        name: 'Vue43'
    })
</script>

<style scoped>
#titre {
    font-size: 38px;
    font-weight: 300;
    font-style: normal; 
    font-weight: bold;
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