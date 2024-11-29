<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/persons">Persons</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  margin: 0;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      padding: 1rem 0;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
