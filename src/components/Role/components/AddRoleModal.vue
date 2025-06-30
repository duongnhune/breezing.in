<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3 class="modal-title">Add New Role</h3>
        <button
            class="close-btn"
            @click="$emit('close')"
        >
          <XMarkIcon class="close-icon" />
        </button>
      </div>

      <div class="modal-body">
        <input
            v-model="roleName"
            ref="inputRef"
            type="text"
            placeholder="Enter role name"
            class="role-input"
            @keyup.enter="handleAdd"
        />
      </div>

      <div class="modal-footer">
        <button
            class="cancel-btn"
            @click="$emit('close')"
        >
          Cancel
        </button>
        <button
            class="add-btn"
            :disabled="!roleName.trim()"
            @click="handleAdd"
        >
          Add Role
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, nextTick, onMounted } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'AddRoleModal',
  components: {
    XMarkIcon
  },

  emits: ['add-role', 'close'],

  setup(props, { emit }) {
    const roleName = ref('')
    const inputRef = ref(null)

    const handleAdd = () => {
      if (roleName.value.trim()) {
        emit('add-role', roleName.value.trim())
        roleName.value = ''
      }
    }

    onMounted(async () => {
      await nextTick()
      inputRef.value?.focus()
    })

    return {
      roleName,
      inputRef,
      handleAdd
    }
  }
}
</script>
<!--<style lang="scss" scoped>-->
<!--@use '@/assets/styles/components/modal';-->
<!--@use '@/assets/styles/variables' as vars;-->

<!--///* Override nếu cần */-->
<!--//.modal-overlay {-->
<!--//  z-index: 1050; /* Cao hơn giá trị mặc định */-->
<!--//}-->
<!--//-->
<!--//.add-btn {-->
<!--//  background-color: vars.$primary;-->
<!--//  border-color: vars.$primary-dark;-->
<!--//-->
<!--//  &:hover:not(:disabled) {-->
<!--//    opacity: 0.9;-->
<!--//  }-->
<!--//}-->
<!--</style>-->
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal-content {
  background: white;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 90%;
  max-width: 400px;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
}

.close-btn:hover {
  background-color: #f3f4f6;
}

.close-icon {
  width: 20px;
  height: 20px;
  color: #6b7280;
}

.modal-body {
  padding: 20px;
}

.role-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
}

.role-input:focus {
  outline: none;
  border-color: #3b82f6;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px;
  border-top: 1px solid #e5e7eb;
}

.cancel-btn, .add-btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.cancel-btn {
  background: none;
  border: 1px solid #d1d5db;
  color: #374151;
}

.cancel-btn:hover {
  background-color: #f9fafb;
}

.add-btn {
  background-color:  #ff4400;
  border: 1px solid #e03a00;
  color: white;
}

.add-btn:hover:not(:disabled) {
  border: 1px solid  #ff4400;
  opacity: 0.8;
}

.add-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
