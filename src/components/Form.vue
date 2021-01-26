<template>
	<form class="form-wrapper" :action="action" :method="method">
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
			default: 'POST'
		}
	},
	data() {
		return {
			formData: {},
			errors: []
		};
	},
	// computed properties are cached textfields[] only gets updated if $children change
	computed: {
		textfields() {
			// $children grants access to direct child components of the current instance
			return this.$children.filter(
				// returns array of VueComponents with matching _componentTag
				c => c.$options._componentTag === 'real-digital-textfield'
			);
		}
	},
	methods: {
		validate() {
			// add textfield names to errors array if validation returns false
			this.errors = this.textfields
				.filter(field => !validator(field.inputValue, field.validation))
				.map(field => field.name);
			// listened to in App.vue -> @onError
			this.$emit('onError', this.errors);
		},
		submit() {
			// validate inputs
			this.validate();

			// check if errors occurred
			if (this.errors.length > 0) {
				return;
			}

			// add inputValues to formData object
			this.textfields.forEach(textfield => {
				this.formData[textfield.name] = textfield.inputValue;
				return this.formData;
			});

			// emit formData for console display
			this.$emit('onSubmit', this.formData);

			// send request with action and method from parent
			api(this.method, this.action, this.formData).then(response => {
				// emit response for console display
				this.$emit('onResponse', response);
			});
		}
	}
};
</script>

<style lang="scss">
.form-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
