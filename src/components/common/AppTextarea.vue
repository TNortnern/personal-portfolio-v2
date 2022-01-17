<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-white">{{ label }}</label>
    <div class="mt-1">
      <textarea
        :id="id || name"
        :class="{
          'border-red-600 ring-4 ring-red-400': error,
          'focus:(ring-app-light-blue ring-4 border-app-light-blue) border-gray-300': !error
        }"
        :name="name"
        :value="modelValue"
        rows="4"
        class="py-3 px-4 block w-full shadow-sm border rounded-md"
        @input="handleInput($event)"
      />
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
  error?: string
  modelValue?: string | number
}>(), {
  type: 'text',
})
const handleInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
