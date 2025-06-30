<template>
  <label class="role-item" :class="{ 'selected': selected }">
    <div class="role-info">
      <input
          type="checkbox"
          class="checkbox"
          :checked="selected"
          @change="$emit('select', role.id)"
      />
      <span class="role-name">{{ role.name }}</span>
    </div>

    <div v-if="role.isNew" class="new-badge">
      New
    </div>
  </label>
</template>

<script>
export default {
  name: 'RoleItem',
  props: {
    role: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: ['select']
}
</script>

<style scoped>
.role-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  user-select: none;
}

.role-item:hover {
  background-color: #f9fafb;
}

.role-item.selected {
  background-color: #eff6ff;
}

.role-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox {
  width: 16px;
  height: 16px;
  accent-color: #ff4400;
}

.role-name {
  color: #374151;
  font-weight: 500;
}

.new-badge {
  padding: 2px 8px;
  background-color: #fef3c7;
  color: #d97706;
  font-size: 12px;
  font-weight: 500;
  border-radius: 12px;
}
</style>
