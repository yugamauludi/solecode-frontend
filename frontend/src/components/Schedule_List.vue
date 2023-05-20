<script>
import {getDate, getTime} from '../helper/index'

export default {
  props: ['index', 'item' ],
  methods: {
    getDate,
    getTime
  }
}
</script>

<template>
    <div class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
      <div class="flex flex-col items-center p-6">
        <h2 class="text-3xl text-neutral-800 mb-6">
          {{ item.Airline.name }}
        </h2>
        <div class="flex mb-2 items-center justify-center">
          <div class="flex flex-col items-center justify-center w-1/3">
            <a class="text-xl font-medium text-neutral-400">
              {{ item.AirportDeparture.city }}
            </a>
            <p class="text-3xl font-medium text-neutral-800">
              {{ getTime(item.departure_time) }}
            </p>
            <p class="text-xl font-medium text-neutral-400">
              {{ getDate(item.departure_time) }}
            </p>
          </div>
          <div class="flex items-center justify-center w-1/3">
            <i class="fa-solid fa-plane fa-2xl" style="color:darkgrey"></i>
          </div>
          <div class="flex flex-col items-center justify-center w-1/3">
            <a class="text-xl font-medium text-neutral-400">
              {{ item.AirportArrive.city }}
            </a>
            <p class="text-3xl font-medium text-neutral-800">
              {{ getTime(item.arival_time) }}
            </p>
            <p class="text-xl font-medium text-neutral-400">
              {{ getDate(item.arival_time) }}
            </p>
          </div>
        </div>
      </div>
    </div>


</template>