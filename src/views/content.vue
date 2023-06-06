<template>
    <div class="content-container">
    <router-view></router-view> 
    </div>
</template>
    
<script setup>
    
</script>
    
<style lang="scss" scoped>
@media screen and (max-width: 1000px) {
    .content-container{

        margin-right: 0 !important;
    }
}
    .content-container{
        // height: 100%;
        flex: 1;
        margin-right: 300px;
    }
</style>