import { ref, watch, Ref } from "vue";

const stateRegistry: Record<string, Ref<any>> = {};

export function useSettingGlobal<T>(object: string, initialValue?: T): Ref<T> {
  if (!stateRegistry[object]) {
    const state = ref<T>(
      JSON.parse(localStorage.getItem(object) || "null") || initialValue
    );

    watch(
      state,
      (newValue) => {
        localStorage.setItem(object, JSON.stringify(newValue));
      },
      { deep: true }
    );

    stateRegistry[object] = state;
  }

  return stateRegistry[object] as Ref<T>;
}
