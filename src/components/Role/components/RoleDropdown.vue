<template>
  <div class="dropdown-container" ref="dropdownRef">
    <button
        class="dropdown-trigger"
        @click="toggleDropdown"
        :disabled="loading"
        type="button"
    >
      <span class="selected-text">{{ displayText }}</span>
      <i class="bi bi-chevron-down chevron-icon" :class="{ 'rotated': isOpen }"></i>
    </button>

    <div v-if="isOpen" class="custom-dropdown-menu">
      <div class="dropdown-content">
        <button class="add-role-btn" @click="handleAddNew" type="button">
          <i class="bi bi-plus plus-icon"></i>
          New role
        </button>

        <div v-if="loading" class="loading-state">
          <div class="spinner-border spinner-border-sm me-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          Loading roles...
        </div>

        <div v-else-if="roles && roles.length > 0" class="roles-list">
          <RoleItem
              v-for="role in roles"
              :key="role.id"
              :role="role"
              :selected="isRoleSelected(role.id)"
              @select="handleSelect"
          />
        </div>

        <div v-else class="no-roles">
          <p class="text-muted mb-0">No roles available</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import RoleItem from './RoleItem.vue'

export default {
  name: 'RoleDropdown',
  components: {
    RoleItem
  },

  props: {
    roles: {
      type: Array,
      default: () => []
    },
    selectedRoles: [String, Array],
    multiple: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  emits: ['select', 'add-new'],

  setup(props, { emit }) {
    const isOpen = ref(false)
    const dropdownRef = ref(null)

    const displayText = computed(() => {
      if (props.multiple) {
        const count = Array.isArray(props.selectedRoles) ? props.selectedRoles.length : 0
        return count === 0 ? 'Choose role' : `${count} role(s) selected`
      }

      const selectedRole = props.roles?.find(r => r.id === props.selectedRoles)
      return selectedRole ? selectedRole.name : 'Choose role'
    })

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value
      nextTick(() => {
        const menuEl = document.querySelector('.custom-dropdown-menu')
        if (menuEl) {
          console.log('Dropdown menu status:')
          console.log('Display:', getComputedStyle(menuEl).display)
          console.log('Visibility:', getComputedStyle(menuEl).visibility)
          console.log('Opacity:', getComputedStyle(menuEl).opacity)
        }
      })
    }

    const closeDropdown = () => {
      isOpen.value = false
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        closeDropdown()
      }
    }

    const isRoleSelected = (roleId) => {
      if (props.multiple) {
        return Array.isArray(props.selectedRoles) && props.selectedRoles.includes(roleId)
      }
      return props.selectedRoles === roleId
    }

    const handleSelect = (roleId) => {
      emit('select', roleId)
      if (!props.multiple) {
        closeDropdown()
      }
    }

    const handleAddNew = () => {
      emit('add-new')
      closeDropdown()
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      isOpen,
      dropdownRef,
      displayText,
      toggleDropdown,
      closeDropdown,
      isRoleSelected,
      handleSelect,
      handleAddNew
    }
  }
}
</script>

<style scoped>
.dropdown-container {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.2s;
  font-size: 14px;
}

.dropdown-trigger:hover:not(:disabled) {
  border-color: #d1d5db;
}

.dropdown-trigger:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.selected-text {
  color: #374151;
  font-weight: 500;
}

.chevron-icon {
  font-size: 16px;
  color: #6b7280;
  transition: transform 0.2s;
}

.chevron-icon.rotated {
  transform: rotate(180deg);
}

.custom-dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
  0 4px 6px -4px rgba(0, 0, 0, 0.1);
  z-index: 1050;
  min-width: 200px;
  max-height: 300px;
  overflow: hidden;
}

.dropdown-content {
  padding: 4px 0;
}

.add-role-btn {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 16px;
  border: none;
  background: none;
  cursor: pointer;
  color: #6b7280;
  border-bottom: 1px solid #f3f4f6;
  font-size: 14px;
  transition: background-color 0.2s;
}

.add-role-btn:hover {
  background-color: #f9fafb;
}

.plus-icon {
  font-size: 14px;
  margin-right: 8px;
}

.loading-state {
  padding: 16px;
  text-align: center;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.no-roles {
  padding: 16px;
  text-align: center;
}

.roles-list {
  max-height: 200px;
  overflow-y: auto;
}

.roles-list::-webkit-scrollbar {
  width: 6px;
}

.roles-list::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.roles-list::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.roles-list::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>
