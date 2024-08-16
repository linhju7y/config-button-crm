<template>
  <div>
    <div class="text-gray-500 mb-2">{{ label }}:</div>
    <input
      type="color"
      class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
      id="hs-color-input"
      v-model="value"
      @input="updateColor"
      title="Choose your color"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Object as PropType<{ label: string; value: string }>,
    required: true,
    default: () => ({ label: "Màu chữ", value: "#2563eb" }),
  },
});

const { label, value } = props.modelValue;

const updateColor = (event: Event) => {
  const newColor = (event.target as HTMLInputElement).value;
  emit("update:modelValue", { ...props.modelValue, value: newColor });
};
</script>

<style scoped></style>
