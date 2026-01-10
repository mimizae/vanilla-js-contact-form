export function showSuccessModal() {
  const modal = document.createElement("div");
  modal.className = "success-modal";

  modal.innerHTML = `
    <div class="modal-content" role="dialog" aria-modal="true" aria-live="polite">
      <p>제출이 완료되었습니다! 🎉</p>
    </div>
  `;

  document.body.style.overflow = "hidden";
  document.body.appendChild(modal);

  setTimeout(() => {
    modal.classList.add("fade-out");

    modal.addEventListener(
      "animationend",
      () => {
        modal.remove();
        document.body.style.overflow = "";
      },
      { once: true }
    );
  }, 2500);
}
