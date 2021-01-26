export default (value, regEx) => {
	if (!value || !regEx) {
		return true;
	}

	try {
		const regex = new RegExp(regEx, 'i'); // ignore casing
		return regex.test(value);
	} catch (error) {
		return false;
	}
};
