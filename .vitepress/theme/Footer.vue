<script setup lang="ts">
const telemetryImg = import.meta.env.VITE_TELEMETRY_IMG;
</script>

<template>
  <div class="telemetry" v-if="telemetryImg">
    <img :src="telemetryImg" alt="">
  </div>
</template>

<style scoped>
.telemetry {
  text-align: center;
}
.telemetry img {
  display: inline-block;
  max-width: 66px;
}
</style>
