export function updateSubmitState(isValid) {
  const button = document.querySelector(".submit-button");
  button.disabled = !isValid;
}
