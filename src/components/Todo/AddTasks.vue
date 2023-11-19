<template>
  <v-text-field
    v-model="newTaskTitle"
    @keyup.enter="addTask"
    class="field-add-task pa-3"
    outlined
    placeholder="Add Task"
    hide-details
    clearable
  >
    <template v-slot:append>
      <v-icon @click="addTask" :disabled="newTaskTitleInvalid">
        mdi-plus
      </v-icon>
    </template>
  </v-text-field>
</template>

<script setup>
import { ref } from "vue";
let newTaskTitle = ref(null);
import { computed } from "vue";

// 判断输入内容是否是违规
let newTaskTitleInvalid = computed(() => {
  // 如果输入内容为空, 则违规
  return !newTaskTitle.value;
});

// 添加任务
import { useAppStore } from "@/store/app.js";
const store = useAppStore();
function addTask() {
  if (!newTaskTitleInvalid.value) {
    store.addTask(newTaskTitle.value);
    newTaskTitle.value = "";
  }
  let test = store.task;
  console.log(test);
}
</script>

<style scoped></style>
