<template>
  <div class="day-selector">
    <div
        v-for="day in days"
        :key="day.id"
        class="day-item"
        :class="{ active: selectedDay === day.id }"
        @click="$emit('select-day', day.id)"
    >
      <div class="selector-indicator" v-if="selectedDay === day.id"></div>

      <div class="day-info">
        <span class="day-label">{{ day.label }}</span>
        <span class="separator">|</span>
        <span class="day-date">{{ day.date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  days: {
    type: Array,
    required: true
  },
  selectedDay: {
    type: String,
    required: true
  }
});

defineEmits(['select-day']);
</script>

<style lang="scss" scoped>
.day-selector {
  margin-bottom: 2rem;

  .day-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
    gap: 0.75rem;

    &:hover {
      opacity: 0.85;
    }

    .selector-indicator {
      width: 1.5rem;
      height: 0.75rem;
      border: 2px solid white;
      border-radius: 999px;
    }
    .day-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;

      .day-label,
      .day-date,
      .separator {
        font-weight: 500;
        font-size: 0.875rem;
        color: $day-inactive-color;
        font-family: $font-family-primary;
      }
    }

    &.active {
      .day-info {
        .day-label,
        .day-date,
        .separator {
          color: $text-primary;
        }
      }
    }
  }
}
</style>
