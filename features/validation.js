export function validateName(value) {
  return value.trim().length >= 2;
}

export function validateEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export function validateMessage(value) {
  return value.trim().length >= 10;
}
