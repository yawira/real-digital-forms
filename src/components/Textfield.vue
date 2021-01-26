<template>
	<div class="formGroup">
		<!-- v-text directive equals interpolation -->
		<label class="label" v-text="name"></label>
		<input :type="inputType" class="input" v-model="inputValue" />
		<span v-if="hasError" class="error">
			<strong>{{ name }}</strong> contains invalid characters
		</span>
	</div>
</template>

<script>
export default {
	name: 'real-digital-textfield',
	props: {
		name: String,
		validation: String,
		inputType: {
			type: String,
			default: 'text',
			// validate if correct type
			validator: value => ['text', 'number'].indexOf(value) !== -1
		},
		hasError: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			inputValue: ''
		};
	}
};
</script>

<style lang="scss">
$inputColor: #000000;
$inputBorder: #d9d9d9;
$errorColor: #ba0c2f;

.formGroup {
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
	font-size: 2rem;
}
.label {
	display: inline-block;
	font-size: 1.2rem;
	margin: 0.5rem;
}
.input {
	width: 50vw;
	line-height: 1.15;
	height: 4rem;
	border: 0.1rem solid $inputBorder;
	border-radius: 0.2rem;
	padding-left: 1.6rem;
	padding-right: 1.6rem;
	&:hover,
	&:focus {
		outline: none;
		border-color: $inputColor;
	}
}

.error {
	line-height: 1.25;
	font-size: 1.2rem;
	margin: 0.5rem;
	color: $errorColor;
}
</style>
