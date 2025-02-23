import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore(
  'xr-user',
  () => {
    const token = ref('xxxxx')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    return {
      token,
      setToken,
      removeToken,
    }
  },
  {
    persist: true,
  },
)
