<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-white block mb-2">{{ label }}</label>
    <div class="mt-1">
      <input
        v-bind="{
          ...(autocomplete && { autocomplete })
        }"
        :id="id || name" :type="type" :name="name" :value="modelValue" class="py-3 px-4 block w-full shadow-sm duration-200 focus:(ring-app-light-blue ring-4 border-app-light-blue) border-gray-300 rounded-md" @input="handleInput($event)"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])
withDefaults(defineProps<{
  label: string
  id: string
  name: string
  type?: string
  autocomplete?: string
  modelValue?: string | number
}>(), {
  type: 'text',
})
const handleInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
