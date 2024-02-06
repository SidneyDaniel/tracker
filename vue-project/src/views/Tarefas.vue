<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from '../components/barraLateral.vue'
import Formulario from '../components/Formulario.vue'
import Tarefa from '../components/Tarefas.vue'
import type ITarefa from '../interface/ITarefa'
import Box from '../components/Box.vue';

export default defineComponent({
  name: 'app',
  components: { BarraLateral, Formulario, Tarefa, Box },
  data () {
    return {
      tarefas: [] as ITarefa[]
    }
  },computed: { 
    listaEstaVazia() :boolean{ 
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    }
  }
});
</script>

<template>
      <Formulario @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <Box v-if="listaEstaVazia">Você não está muito produtivo hoje 😢</Box>
      </div>
</template>

<style>

</style>