<template>
  <div contenteditable="true" ref="postRef" class="post" @input="writeMd"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
    content:{
        type:String,
        default:""
    }
})
const emit = defineEmits(["sendPostText"])
const contentMd = ref(props.content)
const postRef = ref(null);
onMounted(()=>{
    if(props.content){
        postRef.target.innertext = props.content
    }
})
const writeMd = (e) => {
    emit("sendPostText",e.target.innerText)
};
</script>

<style lang="scss">
.post {
    height: 80vh;
    flex: 1;
    padding: 5px;
  }
</style>
