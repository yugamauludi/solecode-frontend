<script>
  import { mapActions, mapState, mapWritableState } from 'pinia';
  import { useAppStore } from '../stores/app';
  import Schedule_List from '../components/Schedule_List.vue';
  export default {
    components: {
      Schedule_List,
    },
    computed: {
      ...mapState(useAppStore, ['schedules']),
      ...mapWritableState(useAppStore, ['query'])

    },
    methods: {
      ...mapActions(useAppStore, ['fetchDataSchedule']),
    },
    created(){
      return this.fetchDataSchedule()
    }
  }
</script>

<template>
  <form class="px-20 pt-10">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input v-model="query.search" type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Schedule by Airline Name..." required>
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click.prevent="fetchDataSchedule">Search</button>
      </div>
  </form>
  <div class="h-56 grid grid-cols-3 gap-4 content-center pt-60">
    <Schedule_List v-for="item, index in schedules" :key="item.id" :item="item" :index="index" class="justify-center"/>
  </div>
</template>