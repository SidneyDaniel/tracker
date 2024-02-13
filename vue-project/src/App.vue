<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/barraLateral.vue'
import { RouterView } from 'vue-router';
import NotificacoesVue from './views/Projetos/Notificacoes.vue';

export default defineComponent({
  name: 'App',
  components: { BarraLateral, NotificacoesVue },
  data () {
    return {
      modoEscuroAtivo: false
    }
  },
  methods: {
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
      <NotificacoesVue></NotificacoesVue>
      <RouterView></RouterView>
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