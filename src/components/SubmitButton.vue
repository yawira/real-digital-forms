<template>
	<button class="button" :type="type" @click="click">
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
			default: 'button'
		}
	},
	methods: {
		click() {
			this.$emit('click');
		}
	}
};
</script>

<style lang="scss">
$buttonColor: #002d57;
$textColor: #fff;

.button {
	display: block;
	width: 50vw;
	height: 4.8rem;
	margin: 1.25rem;
	border-width: 0;
	border-radius: 0.2rem;
	font-size: 1.5rem;
	font-weight: 700;
	color: $textColor;
	background-color: $buttonColor;
	&:hover {
		cursor: pointer;
	}
}
</style>
