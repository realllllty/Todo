const DB_NAME = "myDatabase";
const DB_VERSION = 1;
let db;

// 打开或者是创建一个idb, 返回一个promise对象
function openDB() {
  return new Promise((resolve, reject) => {
    // 检查是否有db变量, 如果db已经存在(之前打开过db), 则直接使用resolve函数完成promise
    if (db) {
      resolve(db);
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    // 在数据库首次创建, 或版本号增加时触发
    // 如果不包含某张表(todo), 新建一个
    request.onupgradeneeded = function (e) {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("todo")) {
        db.createObjectStore("todo", { autoIncrement: true });
      }
    };

    request.onerror = function (e) {
      reject("Database error: " + e.target.errorCode);
    };

    request.onsuccess = function (e) {
      db = e.target.result;
      resolve(db);
    };
  });
}

export { openDB };
