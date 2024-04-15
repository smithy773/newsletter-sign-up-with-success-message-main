(function inputForm() {
  // All needed elements are selected-
  const formCont = document.querySelector(".form-container");
  const ctaForm = document.querySelector(".form-cta");
  const successForm = document.querySelector(".form-success");
  const backgrImg = document.querySelector(".background-img");
  const mobileBackgrImg = document.querySelector(".mobile-background-img");
  const dismissBtn = document.querySelector(".dismiss");
  const noEmailErr = document.querySelector(".no-email");
  const invalidEmailErr = document.querySelector(".invalid-email");
  const inputEmail = document.querySelector("#email");
  const formBtn = document.querySelector(".cta-btn");

  window.addEventListener("load", () => {
    if (window.innerWidth <= 600) {
      mobileBackgrImg.classList.add("open");
    } else {
      backgrImg.classList.add("open");
    }
  });

  window
    .matchMedia("screen and (min-width: 600px)")
    .addEventListener("change", ({ matches }) => {
      if (matches) {
        backgrImg.classList.add("open");
        mobileBackgrImg.classList.remove("open");
      } else {
        backgrImg.classList.remove("open");
        mobileBackgrImg.classList.add("open");
      }
    });

  ctaForm.noValidate = true;
  // -,then function listens for a click on the formBtn.
  formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // When the formBtn is clicked, the if statement is initiated, which adds/removes the invalid and open-inline classes to certain elements. These classes apply the needed styles for the user to see if they have entered a valid email address and if not - why it is not valid.
    if (inputEmail.value === "") {
      ctaForm.classList.add("invalid");
      noEmailErr.classList.add("open-inline");
      invalidEmailErr.classList.remove("open-inline");
    } else if (inputEmail.validity.valid === false) {
      ctaForm.classList.add("invalid");
      noEmailErr.classList.remove("open-inline");
      invalidEmailErr.classList.add("open-inline");
    } else {
      // If the entered email is valid, the function removes the open class from all elements and adds it to the successForm element.
      formCont.classList.remove("open");
      backgrImg.classList.remove("open");
      mobileBackgrImg.classList.remove("open");
      noEmailErr.classList.remove("open-inline");
      successForm.classList.add("open");
      let successEmail = document.querySelector(".success-email");
      successEmail.textContent = `${inputEmail.value}`;
    }
  });
  // The user is then able to click on the dismissBtn in order to return to the original CTA page.
  dismissBtn.addEventListener("click", () => {
    successForm.classList.remove("open");
    formCont.classList.add("open");
    ctaForm.classList.remove("invalid");
    invalidEmailErr.classList.remove("open-inline");
    if (window.innerWidth > 600) {
      backgrImg.classList.add("open");
    } else {
      mobileBackgrImg.classList.add("open");
    }
    ctaForm.reset();
  });
})();
