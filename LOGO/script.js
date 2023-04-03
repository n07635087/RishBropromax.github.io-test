const logo = document.getElementById('logo');
const textInput = document.getElementById('text-input');
const fontSelect = document.getElementById('font-select');
const colorPicker = document.getElementById('color-picker');
const updateButton = document.getElementById('update-button');

updateButton.addEventListener('click', function() {
	logo.innerText = textInput.value;
	logo.style.fontFamily = fontSelect.value;
	logo.style.color = colorPicker.value;
});
