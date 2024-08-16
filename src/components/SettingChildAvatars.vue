<template>
  <div class="text-gray-500 mb-3">Khách hàng:</div>
  <div>
    <div class="flex gap-1 items-center flex-wrap">
      <img
        v-for="(item, index) in modelValue"
        :key="index"
        :src="item.src"
        :class="[
          'h-10 w-10 -mx-1.5 ring rounded-full object-cover cursor-pointer ring-blue-500',
          item.value ? 'ring-blue' : 'ring-white',
        ]"
        @click="handleClick(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Item {
  src: string;
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
