<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
const telemetryImg = import.meta.env.VITE_TELEMETRY_IMG;
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <div class="telemetry" v-if="telemetryImg">
        <img :src="telemetryImg" alt="">
      </div>
    </template>
  </Layout>
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
