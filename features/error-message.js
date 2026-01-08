export function showError(id, message) {
  const element = document.getElementById(id);
  element.textContent = message;
}

export function clearError(id) {
  const element = document.getElementById(id);
  element.textContent = "";
}
