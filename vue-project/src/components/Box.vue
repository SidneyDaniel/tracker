<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name:'box',
        data(){
            return{ 
                estilos:{
                    background: '#faf0ca'
                }
            }
        }
    })
</script>

<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot>
    </div>
</template>

<style scoped>
 
</style>