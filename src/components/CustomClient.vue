<template>
  <img
    :src="client.src"
    :alt="client.alt"
    :class="[
      'h-10 w-10 -mx-1.5 ring rounded-full object-cover cursor-pointer ring-blue-500',
      isActive ? 'ring-blue' : 'ring-white',
    ]"
    @click="setSelectedClient"
  />
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useUserConfigs } from "../composables";

const { client, page } = defineProps<{
  client: { src: string; alt: string; id: string };
  page: string;
}>();

const { isConfigActive, handleUpdateConfig } = useUserConfigs();

const isActive = ref(isConfigActive(page, client.id));

const setSelectedClient = (): void => {
  isActive.value = !isActive.value;
  handleUpdateConfig(page, client.id);
};
</script>
