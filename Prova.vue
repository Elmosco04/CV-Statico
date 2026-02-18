<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="cv-container">
    <aside class="sidebar">
      <!-- Foto Profilo -->
      <div class="profile-photo">
        <img alt="Foto profilo" src="@/assets/logo.svg" />
      </div>

      <!-- Informazioni Personali -->
      <section class="personal-info">
        <h2>Informazioni Personali</h2>
        <div class="info-item">
          <label>Nome</label>
          <p>Alessandro</p>
        </div>
        <div class="info-item">
          <label>Cognome</label>
          <p>Moschini</p>
        </div>
        <div class="info-item">
          <label>Data di nascita</label>
          <p>01/03/2004</p>
        </div>
        <div class="info-item">
          <label>Sesso</label>
          <p>Maschile</p>
        </div>
        <div class="info-item">
          <label>Nazionalità</label>
          <p>Italiana</p>
        </div>
      </section>

      <!-- Informazioni di Contatto -->
      <section class="contact-info">
        <h2>Contatti</h2>
        <div class="info-item">
          <label>Email</label>
          <p>alessandro.moschini@gmail.com</p>
        </div>
        <div class="info-item">
          <label>Telefono</label>
          <p>+39 391 400 4403</p>
        </div>
        <div class="info-item">
          <label>Città</label>
          <p>Italia</p>
          <p>Fiorenzuola D'Arda</p>
          <p>29075</p>
        </div>
      </section>

      <!-- Azienda Attuale -->
      <!-- <section class="company-info">
        <h2>Lavoro attuale</h2>
        <div class="info-item">
          <label>Azienda</label>
          <p>Elfo SRL</p>
        </div>
        <div class="info-item">
          <label>Posizione</label>
          <p>junior Developer</p>
        </div>
        <div class="info-item">
          <label>Settore</label>
          <p>Software custom</p>
        </div>
      </section> -->

      <!-- Navigazione -->
      <nav class="sidebar-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </aside>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.cv-container {
  display: flex;
}

/* Sidebar Styling */
.sidebar {
  width: 40%;
  min-width: 250px;
  background-color: var(--color-background-soft, #f5f5f5);
  padding: 1rem;
  overflow-y: auto;
  border-right: 1px solid var(--color-border);
}

.profile-photo {
  text-align: center;
  margin-bottom: 2rem;
}

.profile-photo img {      
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-border);
}

/* Sezioni Info */
section {
  margin-bottom: 2rem;
}

section h2 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid var(--color-text);
  padding-bottom: 0.5rem;
}

.info-item {
  margin-bottom: 1rem;
}

.info-item label {
  display: block;
  font-weight: 600;
  color: var(--color-text);
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
}

.info-item p {
  color: var(--color-text-secondary, #666);
  margin: 0;
  font-size: 0.9rem;
}

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

/* Main Content Area */
.main-content {
  flex:auto;
  overflow-y: auto;
  padding: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cv-container {
    flex-direction: column;
    height: auto;
  }

  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }

  .main-content {
    padding: 1rem;
  }
}
</style>
