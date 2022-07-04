<template>
  <div class="team">
    <h1>Team page</h1>
    <nav>
      <router-link to="/team/projects">Projects</router-link> |
      <router-link to="/team/profile">Profile</router-link>
    </nav>
    <router-view></router-view>
    <h2>Team</h2>
  </div>
</template>

<style scoped>
</style>