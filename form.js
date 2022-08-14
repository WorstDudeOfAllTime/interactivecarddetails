const submitBtn = document.getElementById("submit-btn");
const cardNum = document.getElementById("card-number");
const getHolder = document.getElementById("get-holder");
const getNum = document.getElementById("get-num");
const cardHold = document.getElementById("card-holder");
const getMonth = document.getElementById("get-MM");
const getYear = document.getElementById("get-YY");
const expiry = document.getElementById("exp-holder");
const cardForm = document.getElementById("card-form");
const cvv = document.getElementById('cvv');
const getCvv = document.getElementById('get-cvv');

const validator = (field, length = 1) => {
  if (!field || field.value.length < length) {
    alert(`${field.id} needs more girth`);
    return false;
  }
  return true;
};
getNum.addEventListener("keydown", () => {
  if (
    getNum.value.length === 4 ||
    getNum.value.length === 9 ||
    getNum.value.length === 14
  ) {
    getNum.value = getNum.value + " ";
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validator(getHolder)) return false;
  if (!validator(getNum, 19)) return false;
  if (!validator(getMonth, 2)) return false;
  if (!validator(getYear, 2)) return false;
  if (!validator(getCvv, 3)) return false;  
  cardHold.innerHTML = getHolder.value;
  cardNum.innerHTML = getNum.value;
  expiry.innerHTML = `${getMonth.value}/${getYear.value}`;
  cvv.innerHTML = getCvv.value;
  cardForm.reset();
});
