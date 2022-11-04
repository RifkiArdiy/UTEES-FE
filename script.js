const form = document.getElementById("form");

const firstName = document.getElementById("namaDepan");
const lastName = document.getElementById("namaBelakang");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("numberPhone");
const date = document.getElementById("date");
const message = document.getElementById("exampleFormControlTextarea1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fnValue = firstName.value;
  lnValue = lastName.value;
  eValue = email.value;
  pnValue = phoneNumber.value;
  dValue = date.value;
  mValue = message.value;

  let radio = document.getElementsByClassName("form-check-input");
  let rvalue = '';
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      rvalue += radio[i].value;
    }
  }


  const result = document.querySelector('.result')

  result.innerHTML = `<h5 >firstName :${fnValue}</h5>
  <h5>lastName :${lnValue}</h5>
  <h5>email :${eValue}</h5>
  <h5>number :${pnValue}</h5>
  <h5>date :${dValue}</h5>
  <h5>category :${rvalue}</h5>
  <h5>massage :${mValue}</h5>`
  console.log(fnValue);
  console.log(lnValue);
  console.log(eValue);
  console.log(pnValue);
  console.log(dValue);
  console.log(mValue);
});
