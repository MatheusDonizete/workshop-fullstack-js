<template>
  <header>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Menu Workshop</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/">Início</router-link>
        </li>
        <li>
          <router-link to="/about">Sobre</router-link>
        </li>
        <li>
          <router-link to="/signature/list">Assinaturas</router-link>
        </li>
      </ul>
    </nav>
  </header>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
