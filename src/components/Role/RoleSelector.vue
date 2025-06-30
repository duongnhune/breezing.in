<template>
  <div class="role-selector">
    <RoleDropdown
        :roles="roles"
        :selected-roles="selectedRoles"
        :multiple="multiple"
        :loading="loading"
        @select="handleRoleSelect"
        @add-new="showAddRoleModal = true"
    />

    <AddRoleModal
        v-if="showAddRoleModal"
        @add-role="handleAddRole"
        @close="showAddRoleModal = false"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import RoleDropdown from './components/RoleDropdown.vue'
import AddRoleModal from './components/AddRoleModal.vue'
import { useRoles } from '../../composables/useRoles.js'

export default {
  name: 'RoleSelector',
  components: {
    RoleDropdown,
    AddRoleModal
  },

  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Array],
      default: () => []
    }
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const { roles, loading, addRole, fetchRoles } = useRoles()
    const showAddRoleModal = ref(false)
    const selectedRoles = ref(props.modelValue)

    const handleRoleSelect = (roleId) => {
      if (props.multiple) {
        const index = selectedRoles.value.indexOf(roleId)
        if (index > -1) {
          selectedRoles.value.splice(index, 1)
        } else {
          selectedRoles.value.push(roleId)
        }
      } else {
        selectedRoles.value = roleId
      }
      emit('update:modelValue', selectedRoles.value)
    }

    const handleAddRole = async (roleName) => {
      await addRole(roleName)
      showAddRoleModal.value = false
    }

    onMounted(() => {
      fetchRoles()
    })

    return {
      roles,
      loading,
      selectedRoles,
      showAddRoleModal,
      handleRoleSelect,
      handleAddRole
    }
  }
}
</script>

<style scoped>
.role-selector {
  position: relative;
  width: 100%;
  max-width: 300px;
}
</style>