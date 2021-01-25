<template>
  <div id="app">
    <real-digital-form action="https://httpbin.org/post" method="POST" ref="formWrapper">
      <real-digital-textfield name="name" validation="[a-zA-Z]+"></real-digital-textfield>
      <p v-if="hasError('name')" class="error">Name contains invalid characters</p>

      <real-digital-textfield name="phone" validation="[0-9]+"></real-digital-textfield>
      <p v-if="hasError('phone')" class="error">Phone number contains invalid characters</p>

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

<style lang="scss">

html {
  box-sizing: border-box;
  font-size: 62.5%;
  height: 100%;
}

body {
  height: 100%;
}
.app {
  height: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error {
  color: red;
  margin: -0.5em 0 1em;
  font-size: 1.4rem;
}
</style>
