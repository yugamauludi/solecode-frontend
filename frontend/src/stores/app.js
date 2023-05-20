import {defineStore} from 'pinia'
import axios from 'axios'

const base_url = 'http://localhost:3000'
export const useAppStore = defineStore('app', {
  state: () => ({
    schedules : [],
    query: {
        search: '',
    },
  }),
  getters: {

  },
  actions: {
    fetchDataSchedule(){
        let sendQuery = this.query;
        axios({
          method: 'GET',
          url: `${base_url}/`,
          params: sendQuery,
        })
        .then((res) => {
            this.schedules = res.data;
          })
        .catch((err) => {
          console.log(err);
        });
    },
  }
})

