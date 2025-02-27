import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useDeviceStore = defineStore(
  'xr-device',
  () => {
    const isPhone = ref(false)
    const setIsPhone = (newValue) => {
      isPhone.value = newValue
    }

    return {
      isPhone,
      setIsPhone,
    }
  },
  {
    persist: true,
  },
)
