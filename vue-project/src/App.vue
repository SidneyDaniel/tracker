<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/barraLateral.vue'
import Formulario from './components/Formulario.vue'
import Tarefa from './components/Tarefas.vue'
import type ITarefa from './interface/ITarefa'
import Box from './components/Box.vue';

export default defineComponent({
  name: 'App',
  components: { BarraLateral, Formulario, Tarefa, Box },
  data () {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },computed: { 
    listaEstaVazia() :boolean{ 
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    trocarTema(modoEscuroAtivo :boolean){
      this.modoEscuroAtivo = modoEscuroAtivo;
    }
  }
});
</script>

<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro' :modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <Box v-if="listaEstaVazia">Você não está muito produtivo hoje 😢</Box>
      </div>
    </div>
  </main>
</template>

<style>
.lista {
  padding: 1.25rem;
}

main{
  --br-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro{
  --br-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo{
  background-color: var(--br-primario);
}
</style>