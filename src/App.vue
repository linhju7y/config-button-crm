<script setup lang="ts">
import UserConfigButton from "./components/UserConfigButton.vue";
import CustomSelectClients from "./components/CustomSelectClients.vue";
import { ConfigItem } from "./types";

const configItems: ConfigItem[] = [
  { label: "Ẩn email", value: "email" },
  { label: "Ẩn sđt", value: "phone" },
  { label: "Ẩn Tên người dùng", value: "time" },
  { label: "Ẩn Địa chỉ", value: "address" },
];

const configToShow: ConfigItem[] = [
  { label: "Hiển thị email", value: "email" },
  { label: "Hiển thị sđt", value: "phone" },
  { label: "Hiển thị Tên người dùng", value: "username" },
  { label: "Hiển thị Địa chỉ", value: "address" },
  { label: "Hiển thị Ngày sinh", value: "dob" },
  { label: "Hiển thị Giới tính", value: "gender" },
  { label: "Hiển thị Quốc tịch", value: "nationality" },
];
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="text-center mb-4">Component Tùy Chỉnh Giao Diện</div>
    <div class="flex gap-4 justify-center">
      <UserConfigButton :configItems="configItems" />

      <UserConfigButton
        title="Hiển thị thông tin"
        :configItems="configToShow"
        page="customer_detail"
      />

      <UserConfigButton title="Bộ lọc" page="custom_page">
        <template #custom_config>
          <CustomSelectClients page="custom_select_clients" />
        </template>
      </UserConfigButton>
    </div>
  </div>
</template>
