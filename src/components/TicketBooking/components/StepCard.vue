<template>
  <div class="step-card" @click="$emit('buy-ticket', step.id)">
    <div class="step-content">
      <div class="step-grid">
        <div class="icon-title-group">
          <div class="step-icon">
            <img
                :src="getIconPath(step.iconImage)"
                :alt="step.title"
                class="icon-image"
            >
          </div>
          <h3 class="step-title">{{ step.title }}</h3>
        </div>
        <p class="step-description">{{ step.description }}</p>
        <a href="#" class="ticket-link" @click.prevent="$emit('buy-ticket', step.id)">
          Buy Ticket
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  step: {
    type: Object,
    required: true
  }
});

defineEmits(['buy-ticket']);

const getIconPath = (iconName) => {
  return new URL(`/src/assets/images/${iconName}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.step-card {
  text-align: left;
  cursor: pointer;
  @include transition-smooth;
  @include hover-scale;

  .step-content {
    background-color: $background-gray;
    padding: 24px;
    @include transition-smooth;
    text-align: left;

    &:hover {
      background-color: $secondary-color;
    }
  }

  .step-grid {
    display: grid;
    grid-template-rows: auto auto auto;
    gap: 24px;
  }
  .icon-title-group {
    display: grid;
    grid-template-rows: auto auto;
    gap: 24.58px;
  }
  .step-icon {
    width: 52px;
    height: 52px;
    @include flex-center;
    display: inline-flex;
    .icon-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .step-title {
    font-size: 1.5rem;
    font-weight: 500;
    color: $text-primary;
  }

  .step-description {
    font-size: 1rem;
    color: $text-muted;
    line-height: 1.625rem;;
  }

  .ticket-link {
    display: inline-block;
    color: $text-primary !important;
    text-decoration: underline;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: darken($primary-color, 10%);
      text-decoration: underline;
    }
  }
}</style>
