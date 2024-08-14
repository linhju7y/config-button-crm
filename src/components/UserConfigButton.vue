<template>
  <div ref="popoverContainer" class="relative inline-block">
    <button
      type="button"
      @click="togglePopover"
      class="py-2 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 w-12 h-12 rounded-lg"
    >
      <SettingIcon />
    </button>

    <div
      v-if="isPopoverVisible"
      class="absolute z-10 w-64 p-4 mt-2 bg-white border rounded-lg shadow-lg"
    >
      <div>
        <h3 class="text font-semibold mb-2">{{ title }}</h3>
        <div class="flex flex-wrap gap-4 max-w">
          <div class="w-full break-words">
            <slot name="custom_config" />
          </div>

          <UserConfigTag
            v-if="configItems?.length"
            v-for="item in configItems"
            :key="item.value"
            :configItem="item"
            :page="page"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  onBeforeUnmount,
  Ref,
  defineProps,
  withDefaults,
} from "vue";

import { ConfigItem } from "../types";

import SettingIcon from "./icons/SettingIcon.vue";
import UserConfigTag from "./UserConfigTag.vue";

interface Props {
  title: string;
  page: string;
  configItems?: ConfigItem[];
}

const props = withDefaults(defineProps<Props>(), {
  title: "Tuỳ chỉnh",
  page: "customers",
});

const { title, page, configItems } = props;

const isPopoverVisible: Ref<boolean> = ref(false);
const popoverContainer: Ref<HTMLElement | null> = ref(null);

const togglePopover = (): void => {
  isPopoverVisible.value = !isPopoverVisible.value;
};

const handleClickOutside = (event: MouseEvent): void => {
  if (
    popoverContainer.value &&
    !popoverContainer.value.contains(event.target as Node)
  ) {
    isPopoverVisible.value = false;
  }
};

onMounted((): void => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount((): void => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped></style>
