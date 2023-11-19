<template>
  <v-app>
    <v-navigation-drawer :mobile-breakpoint="768">
      <v-img src="@/assets/background.jpg" class="pa-4" cover height="170">
        <v-list-item>
          <v-list-item-title class="text-h5 m"> My Todos </v-list-item-title>
          <v-list-item-subtitle class="my-2">
            an Vuetify Application
          </v-list-item-subtitle>
        </v-list-item>
      </v-img>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to">
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      image="@/assets/background.jpg"
      :height="$route.path === '/' ? '236' : '170'"
    >
      <template v-slot:image>
        <v-img cover></v-img>
      </template>
      <v-container class="pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <Search />
        </v-row>
        <v-row>
          <v-toolbar-title class="ml-4 text-h4">
            Your todo app
          </v-toolbar-title>
        </v-row>
        <v-row>
          <DateTime />
        </v-row>
        <v-row v-if="$route.path === '/'">
          <AddTasks />
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script setup>
import DateTime from "./components/DateTime.vue";
import AddTasks from "@/components/Todo/AddTasks";

// 使用的api记录
// vlistitem to: Denotes the target route of the link.
let items = [
  { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
  { title: "About", icon: "mdi-help-box", to: "/about" },
];
</script>
