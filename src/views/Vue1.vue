<template>
    <div>
        <nav class="navbar"> 
            <button class="buttonhome" @click="toHome"/>
            <button class="buttonpanier"/>
        </nav>
        <h1 id="titre">Le Bateau de Thibault</h1>
        <div align="center">
            <img class="bateau-img" src="../assets/TIG.png">
        </div>

        <div class="description" align="center">
            <p>Nos Champions Son Nombreux</p>
        </div>
        <div class="description-bateau" align="center">
            <p class="pdesc">Je m'appelle Thiebault</p>
            <p class="pdesc">Je suis derrière le projet des Bateaux</p>
            <p class="pdesc">YJ'ai commencé jeune</p>
            <p class="pdesc">Dès que je suis tombé amoureux</p>
            <p class="pdesc">De la Normandie et de sa faune </p>
            <p class="pdesc">Maritime</p>
        </div>
    </div>
</template>


<script>
    import { defineComponent} from 'vue'
    export default defineComponent({
        name: 'Vue1',
        methods: {
            toHome(){
                this.$router.push({name:'Vue0'})
            }
        }
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