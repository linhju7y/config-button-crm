<template>
  <button
    type="button"
    :class="[
      'flex items-center px-2 py-1 rounded-md transition-colors duration-100',
      isActive
        ? 'bg-blue-600 text-white'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
    ]"
    @click="handleClick"
  >
    {{ configItem.label }}
  </button>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { ConfigItem } from "../types";
import { useUserConfigs } from "../composables";

const { configItem, page } = defineProps<{
  configItem: ConfigItem;
  page: string;
}>();

const { isConfigActive, handleUpdateConfig } = useUserConfigs();

const isActive = ref(isConfigActive(page, configItem.value));

const handleClick = (): void => {
  isActive.value = !isActive.value;
  handleUpdateConfig(page, configItem.value);
};
</script>
