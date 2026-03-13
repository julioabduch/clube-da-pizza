<template>
  <div style="padding: 40px; background: #3b82f6; color: white; min-height: 100vh;">
    <h1 style="font-size: 48px; margin-bottom: 20px;">✅ Vue Funciona!</h1>
    <p style="font-size: 24px;">Esta é uma página Vue sem Supabase</p>
    <button 
      @click="contador++" 
      style="background: white; color: #3b82f6; padding: 15px 30px; border: none; border-radius: 8px; font-size: 18px; cursor: pointer; margin-top: 20px;"
    >
      Cliques: {{ contador }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contador = ref(0)

console.log('✅ test-simple.vue carregado!')
</script>
