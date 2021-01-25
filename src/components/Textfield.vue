<template>
  <div class="formGroup">
    <label class="label" v-text="name"></label>
    <input type="text" class="input" v-model="inputValue" @input="change">
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

<style lang="scss">
  .formGroup {
    margin-bottom: 1em;
    font-size: 1.4rem;
  }
  .label {
    display: block;
    margin-bottom: .8rem;
    line-height: 1.25;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1;
    color: #a6a6a6;
    transition-duration: .15s;
    transition-timing-function: ease-in-out;
    transition-property: margin-left;
  }
  .input {
    display: block;
    width: 100%;
    line-height: 1.15;
    order: 2;
    height: 4.8rem;
    border: .1rem solid #d9d9d9;
    border-radius: .2rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    color: #333;
    font-size: 100%;
    &:hover,
    &:focus {
      outline: none;
      border-color: #737373;
    }
  }
  .errorField {
    border-color: red;
  }
  .errorText {
    color: red;
  }
</style>
