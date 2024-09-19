export async function Submit(e) {
    const formEle = document.querySelector("flex flex-col p-5");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyP0MTa34ImCjMJV_Wf1axd5pWTKDG1CKVOY4qJ3MAPYXTVLRBlKZvpo5DHXrGqBxhJ/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
