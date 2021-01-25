<template>
  <div id="app">
    <real-digital-form action="https://httpbin.org/post" method="POST" ref="formWrapper">
      <real-digital-textfield name="name" validation="[a-zA-Z]+"></real-digital-textfield>
      <p v-if="hasError('name')" class="error"><b>name</b> contains invalid characters</p>

      <real-digital-textfield name="phone" validation="[0-9]+"></real-digital-textfield>
      <p v-if="hasError('phone')" class="error"><b>phone number</b> contains invalid characters</p>

      <real-digital-textfield name="subject"></real-digital-textfield>

      <real-digital-button @click="$refs.formWrapper.submit()">Send</real-digital-button>
    </real-digital-form>
  </div>
</template>

<script>
import Form from './components/Form.vue';
import Textfield from './components/Textfield.vue';
import SubmitButton from './components/SubmitButton.vue';

export default {
  name: 'App',
  components: {
    'real-digital-form': Form,
    'real-digital-textfield': Textfield,
    'real-digital-button': SubmitButton,
  },
  data() {
    return {
      errors: [],
    };
  },
  methods: {
    hasError(name) {
      return this.errors.includes(name);
    },
  },
  /* lifecycle hook called when component is added to the DOM. Often used to send an HTTP request
    to fetch data that the component will then render. */
  mounted() {
    this.$refs.formWrapper.$on('onError', (errors) => { this.errors = errors; });
    /* vm.$on('string', callback) -> The callback will receive all the additional arguments
      passed into these event-triggering methods.
      Triggered by .$emit('string') from children, here: in Form.vue */
    this.$refs.formWrapper.$on('onSubmit', (data) => {
      // handle data
      console.log('data: ', data);
    });
    this.$refs.formWrapper.$on('onResponse', (response) => {
      // handle response
      console.log('response: ', response);
    });
  },
};
</script>

<style>
  .error {
    line-height: 1.25;
    font-size: 1.2rem;
    font-weight: 70px;
    line-height: 1;
    color: red;
  }
</style>
