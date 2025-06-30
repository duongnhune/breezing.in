import { ref } from 'vue'

export function useRoles() {
    const roles = ref([])
    const loading = ref(false)
    const error = ref(null)

    // Mock API endpoints
    const API_BASE = '/api/roles'

    const fetchRoles = async () => {
        loading.value = true
        error.value = null
        console.log('Fetching roles...') // Debug log

        try {
            // Mock data - replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 500))

            roles.value = [
                { id: '1', name: 'Admin' },
                { id: '2', name: 'Editor' },
                { id: '3', name: 'Designer' },
                { id: '4', name: 'Marketer' },
                { id: '5', name: 'Developer' }
            ]

            console.log('Roles loaded:', roles.value) // Debug log
        } catch (err) {
            error.value = err.message
            console.error('Failed to fetch roles:', err)
        } finally {
            loading.value = false
        }
    }

    const addRole = async (roleName) => {
        loading.value = true
        error.value = null

        try {
            await new Promise(resolve => setTimeout(resolve, 300))

            const newRole = {
                id: Date.now().toString(),
                name: roleName,
                isNew: true
            }

            roles.value.push(newRole)

            setTimeout(() => {
                const role = roles.value.find(r => r.id === newRole.id)
                if (role) {
                    role.isNew = false
                }
            }, 3000)

        } catch (err) {
            error.value = err.message
            console.error('Failed to add role:', err)
        } finally {
            loading.value = false
        }
    }

    const deleteRole = async (roleId) => {
        loading.value = true
        error.value = null

        try {
            // Mock API call
            await new Promise(resolve => setTimeout(resolve, 300))

            const index = roles.value.findIndex(r => r.id === roleId)
            if (index > -1) {
                roles.value.splice(index, 1)
            }
        } catch (err) {
            error.value = err.message
            console.error('Failed to delete role:', err)
        } finally {
            loading.value = false
        }
    }

    return {
        roles,
        loading,
        error,
        fetchRoles,
        addRole,
        deleteRole
    }
}