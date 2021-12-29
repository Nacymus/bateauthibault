<template>
    <div>
    <h1 id="titre">Recette Mystère</h1>
    <div align="center">
        <img class="bateau-img" src="../assets/tourteau.png">
    </div>

    <div class="description" align="center">
        <p>???????????</p>
    </div>
    <div class="description-bateau" align="center">
        <p class="pdesc">Inconne Jusque la </p>
        <p class="pdesc">Une recette mystère </p>
        <p class="pdesc">est à dévoiler tous les jours </p>
        <p class="pdesc">dans un restau de la ville </p>
        <p class="pdesc"> vvivement Demain</p>
    </div>
    </div>
</template>


<script>
    import { defineComponent} from 'vue'
    export default defineComponent({
        name: 'Vue44'
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