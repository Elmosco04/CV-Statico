<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GeneralInformation from './views/GeneralInformation.vue';
</script>

<template>
  <div class="template">
  <aside class="generalInformation">
      
    <GeneralInformation />

    <!-- Navigazione -->
    <nav class="sidebar-nav">
      <RouterLink to="/">Lavoro</RouterLink>
      <RouterLink to="/attività">Attività</RouterLink>
    </nav>
  </aside>

  <main class="Dettaglio">
      <RouterView />
  </main>
</div>
</template>

<style scoped>
/* Navigazione Sidebar */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.sidebar-nav a {
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: var(--color-text);
  border-radius: 4px;
  transition: background-color 0.3s;
}

.sidebar-nav a:hover {
  background-color: var(--color-background);
}

.sidebar-nav a.router-link-exact-active {
  background-color: var(--vt-c-indigo);
  color: white;
  font-weight: 600;
}
</style>