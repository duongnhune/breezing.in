<template>
  <section class="how-to-buy-section">
    <div class="container">
      <div class="section-header">
        <h1 class="main-title">How To Buy A Ticket</h1>
        <p class="subtitle">Here's an easy way to buy tickets in just 3 steps</p>
      </div>

      <div class="steps-grid">
        <StepCard
            v-for="step in steps"
            :key="step.id"
            :step="step"
            @buy-ticket="$emit('buy-ticket', step.id)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import StepCard from './StepCard.vue';

defineProps({
  steps: {
    type: Array,
    required: true
  }
});

defineEmits(['buy-ticket']);
</script>

<style lang="scss" scoped>

.how-to-buy-section {
  padding: 80px 0;

  .section-header {
    text-align: center;
    margin-bottom: 64px;

    .main-title {
      font-size: 3rem;
      margin-bottom: 16px;
      font-weight: 500;
      line-height: 100%;
      font-family: $font-family-primary;
    }

    .subtitle {
      font-size: 1rem;
      color: $text-primary;
      font-family: $font-family-primary;
      margin: 0;
      line-height: 1.75rem;
      letter-spacing: 0.005em;
    }
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    max-width: 1200px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
}

@media (max-width: 768px) {
  .how-to-buy-section {
    padding: 48px 0;

    .main-title {
      font-size: 2.5rem !important;
    }

    .section-header {
      margin-bottom: 48px;
    }
  }
}
</style>