// pinia当中的action可以是同步的也可以是异步的
// Utilities
import { defineStore } from "pinia";
import { openDB } from "@/database/opendb";
import { ref } from "vue";

export const useAppStore = defineStore("main", () => {
  // 添加Task
  const task = ref([]);
  function addTask(newTaskTitle) {
    let newTask = {
      date: Date.now(),
      title: newTaskTitle,
      done: false,
      dueDate: null,
      tag: null,
    };
    // 操作数据库, 将newTask加入到数据库当中
    openDB().then((db) => {
      // 创建一个新的事务, 指定作用范围为todo, 读写模式
      const transaction = db.transaction(["todo"], "readwrite");

      // 通过IDBTransaction.objectStore(name) 拿到IDBObject对象
      const store = transaction.objectStore("todo");

      // 向todo对象添加新的任务项, add方法返回一个请求对象
      delete newTask.date;

      const request = store.add({ task: newTask });

      request.onsucess = function () {
        task.push(newTask);
        showSnackBar(newTask, newTask);
      };
    });
  }

  // 显SnackBar
  function showSnackBar(state, text) {
    console.log(state, text);
  }
  return { task, addTask, showSnackBar };
});
