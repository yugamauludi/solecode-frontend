<!-- <script>
  import axios from "axios"
  import Home from "./views/Home.vue"
  import Navbar from "./views/Navbar.vue"

  const base_url = 'http://localhost:3000'
  export default{
    components: {
      Navbar,
      Home
    },
    data(){
      return {
        schedules: []
      }
    },
    methods: {
      fetchDataSchedule(){
        console.log('masuk sini');
        axios({
          method: 'GET',
          url: `${base_url}/`,
        })
        .then((res) => {
            console.log(res.data, 'ini dari app');
            this.schedules = res.data;
          })
        .catch((err) => {
          console.log('tes masuk');
          console.log(err);
        });
      },
    }
  }
</script>

<template>
  <Navbar/>
  <Home @fetchDataSchedule="fetchDataSchedule" :schedules="schedules"/>
</template> -->
<script>
import {RouterView} from "vue-router"
import Navbar from './views/Navbar.vue'


export default {
  components: {
    Navbar
  }
}
</script>
<template>
  <Navbar/>
  <RouterView />
</template>