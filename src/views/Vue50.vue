<template>
    <div>
    <nav class="navbar"> 
        <button class="buttonhome" @click="toHome"/>
        <button class="buttonpanier"/>
    </nav>
    <div class="description" align="center">
    <p>Choisissez vos produits</p>
    </div>
    <div class="products-1">
        <button class="product-1"/>
        <button class="product-1"/>
        <button class="product-1"/>
        <button class="product-1"/>
        <button class="product-1"/>
        <button class="product-1"/>
        <button class="product-1"/>
        <button class="product-1"/>

    </div>
    </div>

</template>

<script>
import { defineComponent} from 'vue'
import json from './json.products.json'
export default defineComponent({
    
   name:'Vue50',
   
})

</script>

<style>
.products-1{
    display:grid;
    grid-template-columns: auto  ;
    grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;
    
    background-color: rgba(0,0,0,.3);

}


</style>