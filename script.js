const closeModal = document.getElementById("close-modal");
const calculatorModal = document.getElementById("calculator-modal");
const calculatorDiv = document.getElementById("calculator-div");
const form = document.getElementById("calculator-form");
const SubmitForm = document.getElementById("submit-form");

const income = document.getElementById("income");
const tax = document.getElementById("tax");
const incomeError = document.getElementById("income-error");
const ageError = document.getElementById("age-error");

const inputFields = document.querySelectorAll("input[type=text]");

const annual = document.getElementById("annual-income");
const extra = document.getElementById("extra-income");
const age = document.getElementById("age");
const deductions = document.getElementById("deductions");

let annualValue;
let extraValue;
let ageValue;
let deductionsValue;

let finalIncome = 0;
let finalTax = 0;

// isNumber function check passed number is valid number
function isNumber(value) {
  if (typeof Math.floor(value) == "number" && !isNaN(Math.floor(value))) {
    return true;
  }
  return false;
}

// eventlistener is added to input field to chacked that entered value is valid number
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("keyup", (e) => {
    if (e.target.value.trim() != "" && !isNumber(e.target.value)) {
      e.target.nextElementSibling.style.display = "inline-block";
    } else {
      e.target.nextElementSibling.style.display = "none";
    }
  });
}

// validateInputFields function validated that all enter fields are valid number after click submit button
const validateInputFields = () => {
  if (
    isNumber(annual.value) &&
    isNumber(extra.value) &&
    isNumber(age.value) &&
    isNumber(deductions.value)
  ) {
    return true;
  }
  return false;
};

// setValuesToNull function set all input field values to null after sucessfully submitting form.
const setValuesToNull = () => {
    annual.value = "";
    extra.value = "";
    age.value = "";
    deductions.value = "";
    annualValue = 0;
    extraValue = 0;
    ageValue = 0;
    deductionsValue = 0;
}

// calculateTax function calculates tax and updated final income.
const calculateTax = () => {
  finalIncome = annualValue + extraValue - deductionsValue;

  if (finalIncome > 800000) {
    if (ageValue < 40) {
      finalTax = 0.3 * (finalIncome - 800000);
    } else if (ageValue >= 40 && ageValue < 60) {
      finalTax = 0.4 * (finalIncome - 800000);
    } else {
      finalTax = 0.1 * (finalIncome - 800000);
    }
    finalIncome -= finalTax;
  }
};

// fieldTypeTONumber function converts all field values from string to number
const fieldTypeTONumber = () => {
  annualValue = Math.floor(annual.value.trim());
  ageValue = Math.floor(age.value.trim());
  if (extra.value.trim() != "") {
    extraValue = Math.floor(extra.value.trim());
  } else {
    extraValue = 0;
  }
  if (deductions.value.trim() != "") {
    deductionsValue = Math.floor(deductions.value.trim());
  } else {
    deductionsValue = 0;
  }
};


// checkMandatoryFields function checks all the mandatory fields are not empty.
const checkMandatoryFields = () => {
  if (age.value.trim() == "") {
    ageError.style.display = "block";
  } else {
    ageError.style.display = "none";
  }
  if (annual.value.trim() == "") {
    incomeError.style.display = "block";
  } else {
    incomeError.style.display = "none";
  }
};

// calculateIncome will be called when submit button is clicked.
const calculateIncome = (e) => {
  e.preventDefault();
  if (annual.value.trim() == "" || age.value.trim() == "") {
    checkMandatoryFields();
  } else {
    ageError.style.display = "none";
    incomeError.style.display = "none";
    if (validateInputFields()) {
      fieldTypeTONumber();
      calculateTax();

      income.innerText = `Rs. ${finalIncome.toLocaleString()}`;
      tax.innerText = `after tax deduction of Rs. ${finalTax.toLocaleString()}`;
      calculatorModal.style.display = "flex";
      calculatorDiv.style.display = "none";

      setValuesToNull();
    }
  }
};

// on submit form, modal is displayed if all fields are filled and valid.
SubmitForm.addEventListener("click", calculateIncome);

// closes model and get back to calculator form.
closeModal.addEventListener("click", () => {
  calculatorModal.style.display = "none";
  calculatorDiv.style.display = "block";
  finalIncome = 0;
  finalTax = 0;
});