<template>
  <div class="timeline-event">
    <div class="event-time">{{ event.time }}</div>

    <div class="timeline-marker">
      <div class="timeline-dot">
        <span class="event-number">{{ index + 1 }}</span>
      </div>
      <div class="timeline-connector" v-if="index !== lastIndex"></div>
    </div>

    <div class="event-content">
      <h3 class="event-title">{{ event.title }}</h3>
      <p class="event-description">{{ event.description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  lastIndex: {
    type: Number,
    default: 0
  }
});
</script>

<style lang="scss" scoped>
.timeline-event {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: start;

  .event-time {
    font-family: $font-family-primary;
    font-size: 1rem;
    color: $text-muted;
    font-weight: 500;
    padding-top: 0.5rem;
    letter-spacing: 0.003em;
  }

  .timeline-marker {
    position: relative;
    width: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height:  50%;
  }

  .timeline-dot {
    width: 2rem;
    height: 2rem;
    background-color: $primary-color;
    border-radius: 50%;
    @include flex-center;
    z-index: 2;
    border: 3px solid $background-gray;
    flex-shrink: 0;
    position: relative;

    .event-number {
      font-size: 0.875rem;
      font-weight: 700;
      color: $background-dark;
    }
  }

  .timeline-connector {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: calc(100% + 1rem);
    background-color: $text-muted;
    z-index: 0;
  }

  .event-content {
    h3.event-title {
      font-family: $font-family-primary;
      font-size: 1.25rem;
      line-height: 1.75rem;
      letter-spacing: 0.003em;
      font-weight: 500;
      margin-bottom: 0.5rem;
      color: $text-primary;
    }

    p.event-description {
      font-size: 0.875rem;
      color: $text-muted;
      line-height: 1.75rem;
      margin: 0;
      font-weight: 400;
    }
  }
}

@media (max-width: 768px) {
  .timeline-event {
    grid-template-columns: auto auto 1fr;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
}
</style>
