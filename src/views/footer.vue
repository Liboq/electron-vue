<template>
  <div class="footer" @click="toSetting">设置</div>
  <Dialog @close="cancel" :visible="visibles">
    <div class="dialog">
      key<input type="text" v-model="key">
    keyID <input type="text" v-model="keyID">
    <button @click="setting">保存</button>
    <button @click="cancel">取消</button>
    </div>
    <o-button size=""    ></o-button>
    <o-button></o-button>
    <o-button type=" "></o-button>
    <a-button ></a-button>
   <o-button ></o-button>
   <a-button size=""></a-button>
   <o-button-group type="default" ></o-button-group>
  </Dialog>
</template>

<script setup>
import Dialog from '@/components/dialog/dialog.vue';
import {setItem} from '@/host/common/storage.js'
import { ref } from 'vue';
const visibles = ref(false)
const key = ref()
const keyID= ref()
const toSetting = ()=>{
  visibles.value = !visibles.value
}
const setting = ()=>{
  if(key.value){
  setItem('key',key.value)
  }
}
const cancel = ()=>{
  visibles.value = false
}
</script>

<style lang="scss">
.footer {
    height: 9vh;
    padding: 10px;
}
</style>
