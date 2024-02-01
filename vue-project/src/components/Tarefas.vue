<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import Cronometro from './Cronometro.vue';
import type ITarefa from '@/interface/ITarefa';
import Box from './Box.vue';

export default defineComponent({
    name: 'Tarefa',
    components: { Cronometro,Box },
    props:{
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    }
})

</script>

<template>
    <Box>
        <div class="columns">
            <div class="columns is-7">
                {{ tarefa.descricao || 'Tarefa sem descrição' }}
            </div>
        </div>
        <div class="colum">
            <Cronometro :tempo-em-segundos="tarefa.duracaoEmSegundos"/>
        </div>
    </Box>
</template>

<style scoped>
   
</style>