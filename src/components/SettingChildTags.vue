<template>
  <div class="flex flex-wrap gap-4">
    <button
      v-for="(item, index) in modelValue"
      :key="index"
      type="button"
      :class="[
        'flex items-center px-2 py-1 rounded-md transition-colors duration-100',
        item.value
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
      ]"
      @click="handleClick(index)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Item {
  label: string;
  value: boolean;
}

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Array as () => Item[],
    required: true,
  },
});

const handleClick = (index: number): void => {
  const newValue = !props.modelValue[index].value;
  props.modelValue[index] = {
    ...props.modelValue[index],
    value: newValue,
  };
  emit("update:modelValue", [...props.modelValue]);
};
</script>
