<template>
  <div class="app-container">
    <div class="demo-section">
      <h2>Multiple Role Selection</h2>
      <RoleSelector
          v-model="multipleRoles"
          :multiple="true"
      />
      <p class="selected-info">
        Selected: {{ multipleRoles.length > 0 ? multipleRoles.join(', ') : 'None' }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import RoleSelector from '../components/Role/RoleSelector.vue'

export default {
  name: 'App',
  components: {
    RoleSelector
  },

  setup() {
    const singleRole = ref('')
    const multipleRoles = ref([])

    return {
      singleRole,
      multipleRoles
    }
  }
}
</script>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-section h2 {
  margin-bottom: 16px;
  color: #111827;
  font-size: 20px;
  font-weight: 600;
}

.selected-info {
  margin-top: 12px;
  padding: 8px 12px;
  background-color: #f3f4f6;
  border-radius: 6px;
  color: #374151;
  font-size: 14px;
}
</style>