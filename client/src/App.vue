<template>
  <nav>
    <router-link to="/">Employee</router-link>
    <router-link to="/client">CLient</router-link>
  </nav>
  <router-view></router-view>
</template>

<script setup></script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  gap: 16px;
  & a {
    padding: 10px 15px;

    &.active {
      background-color: hsla(160, 100%, 37%, 1);
      color: white;
    }
  }
}
</style>
