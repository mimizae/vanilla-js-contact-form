import {
  validateName,
  validateEmail,
  validateMessage,
} from "./features/validation.js";
import { updateSubmitState } from "./features/submit-state.js";
import { showError, clearError } from "./features/error-message.js";
import { showSuccessModal } from "./features/modal.js";

const form = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

function checkFormValidity() {
  const isNameValid = validateName(nameInput.value);
  const isEmailValid = validateEmail(emailInput.value);
  const isMessageValid = validateMessage(messageInput.value);

  updateSubmitState(isNameValid && isEmailValid && isMessageValid);
}

[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener("input", () => {
    if (input === nameInput) {
      validateName(input.value)
        ? clearError("name-error")
        : showError("name-error", "이름은 2자 이상 입력해 주세요.");
    }

    if (input === emailInput) {
      validateEmail(input.value)
        ? clearError("email-error")
        : showError("email-error", "유효한 이메일을 입력해 주세요.");
    }

    if (input === messageInput) {
      validateMessage(input.value)
        ? clearError("message-error")
        : showError("message-error", "메시지는 10자 이상 입력해 주세요.");
    }

    checkFormValidity();
  });
});

updateSubmitState(false);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  showSuccessModal();
  form.reset();
  updateSubmitState(false);
});
