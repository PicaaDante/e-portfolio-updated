function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"

  emailjs
    .sendForm(
      'service_ea3e1oj',
      'template_jg14mwo',
      event.target,
      '6kVuS-JdEfdaLOigX'
    ).then(() => {
      loading.classList.remove("modal__overlay--visible")
      success.classList += " modal__overlay--visible"
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible")
      alert(
        "The email service is temporarily unavailable. Please contact me directly at picaadante@gmail.com"
      );
    })
  }