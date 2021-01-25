<template>
  <div :class="$style.formGroup">
    <label :class="$style.label" v-text="name"></label>
    <input type="text" :class="$style.input" v-model="inputValue" @input="change">
  </div>
</template>

<script>
export default {
  name: 'real-digital-textfield',
  props: {
    name: String,
    validation: String,
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    change(event) {
      event.preventDefault();
      this.$emit('input', event.target.value);
      return false;
    },
  },
};
</script>

<style module lang="scss">
  .formGroup {
    margin-bottom: 1em;
    font-size: 1.4rem;
  }
  .label {
    display: block;
    margin-bottom: .8rem;
    line-height: 1.25;
    font-size: 1.2rem;
    font-weight: 70px;
    line-height: 1;
    margin: 3px;
    color: #070649;
  }
  .input {
    display: flex;
    justify-content: center;
    width: 50vw;
    line-height: 1.15;
    order: 2;
    height: 4rem;
    border: .1rem solid #d9d9d9;
    border-radius: .2rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    color: #000000;
    font-size: 100%;
    &:hover,
    &:focus {
      outline: none;
      border-color: #000000;
    }
  }
</style>
