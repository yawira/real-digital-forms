<template>
	<div id="app">
		<real-digital-form
			action="https://httpbin.org/post"
			method="POST"
			ref="formWrapper"
			@onError="errorCheck"
			@onSubmit="submitData"
			@onResponse="showResponse"
		>
			<real-digital-textfield
				name="name"
				validation="^[a-z ,.'-]+$"
				type="text"
				:hasError="hasError('name')"
			>
			</real-digital-textfield>
			<real-digital-textfield
				name="phone"
				validation="^[0-9]+$"
				type="number"
				:hasError="hasError('phone')"
			>
			</real-digital-textfield>
			<real-digital-textfield name="subject" inputType="text">
			</real-digital-textfield>
			<!-- using $refs to access child's submit method -->
			<real-digital-button @click="$refs.formWrapper.submit()"
				>Send</real-digital-button
			>
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
		'real-digital-button': SubmitButton
	},
	data() {
		return {
			errorArray: []
		};
	},
	methods: {
		hasError(name) {
			return this.errorArray.includes(name);
		},
		errorCheck(errors) {
			this.errorArray = errors;
		},
		submitData(output) {
			// manipulate data
			console.log('data submitted: ', output);
		},
		showResponse(res) {
			console.log('response: ', res);
		}
	}
};
</script>

<style lang="scss"></style>
