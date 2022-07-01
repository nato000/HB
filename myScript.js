const button = document.querySelector(".clickme")

button.addEventListener("click", showGreetings)

function showGreetings() {
  const greetings = document.querySelector(".greetings")
  const pyro = document.querySelector(".pyro")
  console.log(pyro, greetings)
  if (pyro.classList.contains("shown") && greetings.classList.contains("shown")) {

  } else {
    const promise = new Promise(function (resolve, reject) {
      button.classList.add("hide-vissually")
    }).then(
        setTimeout(() => {
          button.classList.add("hide");
        }, 1000))
        .then(
            setTimeout(() => {
              greetings.classList.add("shown")
            }, 2000))
        .then(
            setTimeout(() => {
              greetings.classList.add("shown-vissually")
            }, 3000)
        ).then( setTimeout(() => {
          pyro.classList.add("shown")
        }, 4500))


    // button.classList.add("hide-vissually")
    //
    // pyro.classList.add("shown")
    // greetings.classList.add("shown")
  }

}