<template>
  <div style="background: yellow; padding: 30px; margin: 20px;">
    <h1 style="color: blue; font-size: 32px;">
      TESTE BÁSICO - SEM TAILWIND
    </h1>
    <p style="color: green; font-size: 18px;">
      Esta página não usa Tailwind - só CSS inline
    </p>
    <div style="margin-top: 20px;">
      <p>Data: {{ new Date().toLocaleString() }}</p>
      <p>Contador: {{ counter }}</p>
      <button 
        @click="counter++" 
        style="background: blue; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer;"
      >
        Incrementar: {{ counter }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const counter = ref(0)

console.log('Página teste-basico carregada SEM TAILWIND!')
</script>
