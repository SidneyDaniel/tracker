<script lang="ts">
    import { defineComponent } from 'vue';
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
        <button class="button" @click="alterarTema">{{ textoBotao }}</button>
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
</style>