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
    line-height: 1.15;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 20px;
    display: block;
    width: 50vw;
    height: 4.8rem;
    border-width: 0;
    border-radius: .2rem;

    font-size: 1.4rem;
    font-weight: 700;
    color: rgb(255, 255, 255);
    background-color: #006cd1;
  }
</style>
