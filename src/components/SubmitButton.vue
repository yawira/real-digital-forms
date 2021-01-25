<template>
    <button :type="type" @click="click" :class="$style.button">
      <!-- slot tag serves as distribution outlet for content, here: "Send" -->
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'real-digital-button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style module>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.8rem;
    width: 70%;
    border-width: 0;
    margin: 1rem;
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
    background-color: #266ae9;
  }
</style>
