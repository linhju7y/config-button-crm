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
        <div class="flex flex-wrap gap-6 max-w">
          <div class="w-full break-words">
            <slot name="custom_config" />
          </div>

          <div v-for="(data, idx) in modelValue">
            <component
              :key="idx"
              :is="componentTypes[data.type]"
              v-model="data.properties"
            />
          </div>
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

import SettingIcon from "./icons/SettingIcon.vue";

import SettingChildTags from "./SettingChildTags.vue";
import SettingChildAvatars from "./SettingChildAvatars.vue";
import SettingChildColorPicker from "./SettingChildColorPicker.vue";

import { useSettingGlobal } from "../composables";

interface Props {
  title?: string;
  configurations?: any;
  object: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Tuỳ chỉnh",
  key: "default",
});

const { title, configurations, object } = props;

const componentTypes: Record<string, any> = {
  tags: SettingChildTags,
  avatars: SettingChildAvatars,
  color_picker: SettingChildColorPicker,
};

const modelValue = useSettingGlobal(object, configurations);

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
