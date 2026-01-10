export function validateName(value) {
  return value.trim().length >= 2;
}

export function validateEmail(value) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(value);
}

export function validateMessage(value) {
  return value.trim().length >= 10;
}
