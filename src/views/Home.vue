<template>
  <div>
    <h1>Home</h1>
    <button class="button is-danger" @click="login()">Google Auth</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "home",
  methods: mapActions("auth", ["login"]),
};
</script>

<style lang="scss">
</style>
