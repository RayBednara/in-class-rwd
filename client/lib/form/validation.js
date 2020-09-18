const allInputs = document.querySelectorAll("input");
export default () => {
  allInputs.forEach((inputs) => {
    inputs.addEventListener("blur", (event) => {
      let currentInput = event.target;
      const regex = new RegExp(currentInput.pattern);
      if (
        !regex.test(currentInput.value.toUpperCase()) ||
        !currentInput.value
      ) {
        currentInput.classList.replace("is-valid-input", "is-invalid-input") ||
          currentInput.classList.add("is-invalid-input");
      } else {
        currentInput.classList.replace("is-invalid-input", "is-valid-input") ||
          currentInput.classList.add("is-valid-input");
      }
    });
  });
};
