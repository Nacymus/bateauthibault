<template>
    <div>
    <h1 id="titre">Villa 9 Trois</h1>
    <div align="center">
        <img class="bateau-img" src="../assets/villa9Trois.png">
    </div>

    <div class="description" align="center">
        <p>Villa Neuf</p>
    </div>
    <div class="description-bateau" align="center">
        <p class="pdesc">Ils sont à toi, ces yeux saphir,</p>
        <p class="pdesc">Si doux, si adorables.</p>
        <p class="pdesc">Oh, trois fois heureux, l’homme</p>
        <p class="pdesc">Qu’ils accueillent avec amour.</p>
        <p class="pdesc">Ton cœur, c’est un diamant</p>
        <p class="pdesc">Qui répand sa noble lumière.</p>
        <p class="pdesc">Oh, trois fois heureux l’homme</p>
        <p class="pdesc">Pour lequel il brûle d’amour.</p>
    </div>
    </div>
</template>


<script>
    import { defineComponent} from 'vue'
    export default defineComponent({
        name: 'Vue33'
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