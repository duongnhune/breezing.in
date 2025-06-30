<template>
  <section class="schedule-section">
    <div class="container">
      <div class="schedule-grid">
        <div class="schedule-nav">
          <h2 class="schedule-title">Schedule And The Event Details</h2>

          <DaySelector
              :days="days"
              :selected-day="selectedDay"
              @select-day="$emit('select-day', $event)"
          />

          <button class="btn-primary btn-large" @click="$emit('view-event-details')">
            View Event Details
          </button>
        </div>

        <div class="event-timeline">
          <div class="timeline-line"></div>
          <TimelineEvent
              v-for="(event, index) in scheduleData[selectedDay]"
              :key="index"
              :event="event"
              :index="index"
              :lastIndex="scheduleData[selectedDay].length - 1"
          />

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import DaySelector from './DaySelector.vue';
import TimelineEvent from './TimelineEvent.vue';

defineProps({
  days: {
    type: Array,
    required: true
  },
  selectedDay: {
    type: String,
    required: true
  },
  scheduleData: {
    type: Object,
    required: true
  }
});

defineEmits(['select-day', 'view-event-details']);
</script>

<style lang="scss" scoped>
.schedule-section {
  padding-bottom: 80px;

  .schedule-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }

  .schedule-nav {
    .schedule-title {
      font-weight: 500;
      font-size: 3rem;
      line-height: 1;
      letter-spacing: 0.005em;
      margin-right: 3rem;
    }
  }

  .event-timeline {
    position: relative;
  }
  .btn-primary.btn-large {
    height: 56px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 35px;
    padding: 14px 28px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    background-color: $primary-color;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      transform: scale(0.98);
    }
  }
}


@media (max-width: 1024px) {
  .schedule-grid {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }
}

@media (max-width: 768px) {
  .schedule-section {
    padding: 48px 0;
    .schedule-title {
      font-size: 2rem !important;
    }
  }
}
</style>