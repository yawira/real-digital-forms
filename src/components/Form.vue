<template>
  <form class="form-wrapper" :action="action" :method="method" @submit.prevent="submit">
      <!-- form gets distributed here when rendered -->
      <slot></slot>
  </form>
</template>

<script>
import api from '../axios-api';
import validator from '../validation';

export default {
  name: 'real-digital-form',
  // add types for props from parent
  props: {
    action: String,
    method: {
      type: String,
      default: 'POST',
    },
  },
  data() {
    return {
      formData: {},
      errors: [],
    };
  },
  computed: {
    textfields() {
      // eslint-disable-next-line no-underscore-dangle
      return this.$children.filter((c) => c.$options._componentTag === 'real-digital-textfield'); // direct child components of the current instance
    },
  },
  methods: {
    hasError(name) {
      return this.errors.includes(name);
    },
    validate() {
      // eslint-disable-next-line max-len
      this.errors = this.textfields.filter((field) => !validator(field.inputValue, field.validation)).map((field) => field.name);
      this.$emit('onError', this.errors); // this.errors = Array with textfield names where error occurs
    },
    submit() {
      this.validate();
      if (this.errors.length > 0) {
        return;
      }
      this.textfields.forEach((textfield) => {
        this.formData[textfield.name] = textfield.inputValue;
        return this.formData;
      });
      this.$emit('onSubmit', this.formData);

      // send request with action and method from parent
      api(this.method, this.action, this.formData).then((response) => {
        this.$emit('onResponse', response);
      });
    },
  },
};
</script>

<style lang="scss">
  .form-wrapper {
    display: grid;
    justify-items: center;
  }
</style>
