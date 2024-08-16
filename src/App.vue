<script setup lang="ts">
import SettingButton from "./components/SettingButton.vue";

const configurations = [
  {
    type: "tags",
    properties: [
      {
        label: "Ẩn email",
        field: "email",
      },
      {
        label: "Ẩn sđt",
        field: "phone",
      },
      {
        label: "Ẩn Tên người dùng",
        field: "time",
      },
      {
        label: "Ẩn Địa chỉ",
        field: "address",
      },
    ],
  },
  {
    type: "avatars",
    properties: [
      {
        src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100",
      },
      {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=687&h=687&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=1401&h=1401&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=80",
      },
    ],
  },
  // {
  //   type: "color_picker",
  //   properties: {
  //     label: "Chọn màu",
  //   },
  // },
];

const detailConfigurations = [
  {
    type: "tags",
    properties: [
      { label: "Hiển thị email", field: "email" },
      { label: "Hiển thị sđt", field: "phone" },
      { label: "Hiển thị Tên người dùng", field: "username" },
      { label: "Hiển thị Địa chỉ", field: "address" },
      { label: "Hiển thị Ngày sinh", field: "dob" },
      { label: "Hiển thị Giới tính", field: "gender" },
      { label: "Hiển thị Quốc tịch", field: "nationality" },
    ],
  },
];
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="text-center mb-4">Component Tùy Chỉnh Giao Diện</div>
    <div class="flex gap-4 justify-center">
      <SettingButton :configurations="configurations" object="clients" />
      <SettingButton
        :configurations="detailConfigurations"
        object="clients_detail"
      />
    </div>
  </div>
</template>
