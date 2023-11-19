<template>
  <div>
    {{ date }}
  </div>
</template>

<script setup>
import { ref } from "vue";
let now = new Date();
let date = ref(
  now.getFullYear() +
    "-" +
    ("0" + (now.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + now.getDate()).slice(-2) +
    " " +
    ("0" + now.getHours()).slice(-2) +
    ":" +
    ("0" + now.getMinutes()).slice(-2) +
    ":" +
    ("0" + now.getSeconds()).slice(-2),
);
let changedate = function () {
  setInterval(() => {
    now = new Date();
    date.value =
      now.getFullYear() +
      "-" +
      ("0" + (now.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + now.getDate()).slice(-2) +
      " " +
      ("0" + now.getHours()).slice(-2) +
      ":" +
      ("0" + now.getMinutes()).slice(-2) +
      ":" +
      ("0" + now.getSeconds()).slice(-2);
  }, 1000);
};

import { onMounted } from "vue";
onMounted(() => {
  changedate();
});
</script>
