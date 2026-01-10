import {
  validateName,
  validateEmail,
  validateMessage,
} from "./features/validation.js";
import { updateSubmitState } from "./features/submit-state.js";
import { showError, clearError } from "./features/error-message.js";
import { showSuccessModal } from "./features/modal.js";

const form = document.querySelector(".contact-form");

const formFields = {
  name: {
    element: document.getElementById("name"),
    validate: validateName,
    errorId: "name-error",
    errorMessage: "이름은 2자 이상 입력해 주세요.",
  },
  email: {
    element: document.getElementById("email"),
    validate: validateEmail,
    errorId: "email-error",
    errorMessage: "유효한 이메일을 입력해 주세요.",
  },
  message: {
    element: document.getElementById("message"),
    validate: validateMessage,
    errorId: "message-error",
    errorMessage: "메시지는 10자 이상 입력해 주세요.",
  },
};

function checkFormValidity() {
  const isFormValid = Object.values(formFields).every(({ element, validate }) =>
    validate(element.value)
  );

  updateSubmitState(isFormValid);
}

Object.values(formFields).forEach(
  ({ element, validate, errorId, errorMessage }) => {
    element.addEventListener("input", () => {
      validate(element.value)
        ? clearError(errorId)
        : showError(errorId, errorMessage);

      checkFormValidity();
    });
  }
);

updateSubmitState(false);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  showSuccessModal();
  form.reset();
  updateSubmitState(false);
});
