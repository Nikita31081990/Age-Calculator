const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const optput = document.querySelector("#output");
btn.addEventListener("click", () => {
  const inputLink = input.value;

  if (!inputLink) {
    alert("enter url link");
  } else {
    output.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputLink}";
  }
});