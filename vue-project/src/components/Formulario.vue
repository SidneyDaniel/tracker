<script lang="ts">
import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';
export default defineComponent({
    name: 'Formulario',
    emits:['aoSalvarTarefa'],
    components: { Temporizador },
    data(){
        return{
            descricao: ''
        }
    },
    methods:{
        finalizarTarefa(tempoDecorrido: number) :void{
            this.$emit('aoSalvarTarefa', {duracaoEmSegundos: tempoDecorrido, descricao: this.descricao})
            this.descricao = ''
            
        }
    }
})
</script>

<template>
    <div class="box formulario">
        <div class="columns">
            <div class="colum is-8" role="form" aria-label="Formulario para criação de uma nova tarefa">
                <input 
                type="text" 
                class="input"  
                placeholder="Qual tarefa vc deseja iniciar?"
                v-model="descricao">
            </div>
            <Temporizador @ao-temporizador-finalizado="finalizarTarefa"/>            
        </div>
    </div>
</template>

<style>
.formulario{
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>