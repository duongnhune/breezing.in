<template>
  <div class="ticket-booking-page">
    <HowToBuySection
        :steps="ticketSteps"
        @buy-ticket="buyTicket"
    />

    <ScheduleSection
        :days="eventDays"
        :selected-day="selectedDay"
        :schedule-data="eventScheduleData"
        @select-day="selectDay"
        @view-event-details="viewEventDetails"
    />

  </div>
</template>
<script setup>
import HowToBuySection from './components/HowToBuySection.vue'
import ScheduleSection from './components/ScheduleSection.vue'
import { useTicketData } from '@/composables/useTicketData'

const {
  selectedDay,
  ticketSteps,
  eventDays,
  eventScheduleData,
  selectDay
} = useTicketData()

const buyTicket = (stepId) => {
  console.log(`Buying ticket for step: ${stepId}`)
  alert(`Redirecting to ${stepId} page...`)
}

const viewEventDetails = () => {
  alert('Opening event details...')
}
</script>

<style lang="scss">

.ticket-booking-page {
  min-height: 100vh;
  background-color: $background-dark;
  color: $text-primary;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
</style>