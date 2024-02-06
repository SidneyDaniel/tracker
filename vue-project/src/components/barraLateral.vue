<script lang="ts">
    import { defineComponent } from 'vue';
    import { RouterLink } from 'vue-router';
    export default defineComponent({
        name: 'barraLateral',
        emits: ['aoTemaAlterado'],
        data(){
          return {
            modoEscuroAtivo: false
          }
        },
        computed:{
          textoBotao(){
            if (this.modoEscuroAtivo) {
              return 'Desativar Modo escuro'
            }
            return 'Ativar modo escuro'
          }
        },
        methods: {
          alterarTema(){
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
          }
        }
    });
</script>

<template>
    <header>
        <h1><img src="https://raw.githubusercontent.com/Muniz94/Alura-Tracker/main/src/assets/logo.png" alt="" srcset=""></h1>
        <div class="has-text-centered">
          <button class="button" @click="alterarTema">{{ textoBotao }}</button>
        </div>
        <nav class="panel mt-5">
          <ul>
            <li>
              <RouterLink to="/" class="link"><i class="fas fa-tasks">Tarefas</i></RouterLink>
            </li>
            <li>
              <RouterLink to="/projetos" class="link"><i class="fas fa-project-diagram">Projetos</i></RouterLink>
            </li>
          </ul>
        </nav>
    </header>
</template>

<style scoped>
   header {
      padding: 1rem;
      background: #0d3b66;
      width: 100%;
      height: 100vh;
      text-align: center;
    }
    @media only screen and (max-width: 768px) {
      header {
        padding: 2.5rem;
        height: auto;
      }
    }

    .panel li {
        margin: 8px 0;
    }
    .link {
        color: #fff;
    }
    .link:hover {
        color: #FAF0CA;
    }
    .link.router-link-active {
        color: #FAF0CA;
    }
</style>