(function inputForm() {
  const formCont = document.querySelector(".form-container");
  const ctaForm = document.querySelector(".form-cta");
  const successForm = document.querySelector(".form-success");
  const backgrImg = document.querySelector(".background-img");
  const dismissBtn = document.querySelector(".dismiss");
  const noEmailErr = document.querySelector(".no-email");
  const invalidEmailErr = document.querySelector(".invalid-email");
  const inputEmail = document.querySelector("#email");
  const formBtn = document.querySelector(".cta-btn");

  ctaForm.noValidate = true;

  formBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (inputEmail.value === "") {
      ctaForm.classList.add("invalid");
      noEmailErr.classList.add("open-inline");
      invalidEmailErr.classList.remove("open-inline");
    } else if (inputEmail.validity.valid === false) {
      ctaForm.classList.add("invalid");
      noEmailErr.classList.remove("open-inline");
      invalidEmailErr.classList.add("open-inline");
    } else {
      formCont.classList.remove("open");
      backgrImg.classList.remove("open");
      noEmailErr.classList.remove("open-inline");
      successForm.classList.add("open");
      let successEmail = document.querySelector(".success-email");
      successEmail.textContent = `${inputEmail.value}`;
    }
  });

  dismissBtn.addEventListener("click", () => {
    successForm.classList.remove("open");
    formCont.classList.add("open");
    backgrImg.classList.add("open");
    ctaForm.classList.remove("invalid");
    invalidEmailErr.classList.remove("open-inline");
    ctaForm.reset();
  });
})();
