let USERS = JSON.parse(localStorage.getItem("users")) || [
  {
    id: 1,
    fname: "Rasulov",
    lname: "Abdullokh",
    birthdate: 2004,
    profession: "Student",
    address: "Tashkent",
  },
  {
    id: 2,
    fname: "Iskandar",
    lname: "Abdumalikov",
    birthdate: 2007,
    profession: "Student",
    address: "Jizzax",
  },
  {
    id: 3,
    fname: "Azizbek",
    lname: "Tolipov",
    birthdate: 2002,
    profession: "Admin",
    address: "Tashkent",
  },
];

const cardGeneral = document.querySelector(".cards");
const form = document.querySelector(".form");
const fname = document.querySelector("#fname");
const surname = document.querySelector("#surname");
const birthDate = document.querySelector("#birthdate");
const address = document.querySelector("#address");
const select = document.querySelector("#select__form");

class Users {
  constructor(fname, lname, birthdate, profession, address) {
    this.fname = fname;
    this.lname = lname;
    this.birthdate = birthdate;
    this.profession = profession;
    this.address = address;
  }
}

class Student extends Users {
  constructor(fname, lname, birthdate, profession, address) {
    super(fname, lname, birthdate, profession, address);
  }
}

class Teacher extends Users {
  constructor(fname, lname, birthdate, profession, address) {
    super(fname, lname, birthdate, profession, address);
  }
}

class Admin extends Users {
  constructor(fname, lname, birthdate, profession, address) {
    super(fname, lname, birthdate, profession, address);
  }
}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let fnameValue = fname.value;
  let surnameValue = surname.value;
  let birthdateValue = birthDate.value;
  let addressValue = address.value;
  let selectValue = select.value;

  let student = new Student(
    fnameValue,
    surnameValue,
    birthdateValue,
    selectValue,
    addressValue
  );

  USERS.push(student);
  localStorage.setItem("users", JSON.stringify(USERS));
  createTableData(USERS);
  fname.value = "";
  surname.value = "";
  birthDate.value = "";
  select.value = "";
  address.value = "";
});

function createTableData(data) {
  while (cardGeneral.firstChild) {
    cardGeneral.firstChild.remove();
  }
  let card = "";
  let count = 1;
  data.forEach((element) => {
    card += `
        <div class="card">
          <div class="card__content">
            <p class="card__text">${element.fname}</p>
            <p class="card__text">${element.lname}</p>
            <p class="card__text">${element.profession}</p>
            <p class="card__text">${element.address}</p>
          </div>

          <div class="card__main">
            <div class="card__img">
              <img src="" alt="" />
            </div>
            <h2 class="card__title">${count++}</h2>
          </div>
        </div>
        `;
  });

  cardGeneral.innerHTML = card;
}

createTableData(USERS);
