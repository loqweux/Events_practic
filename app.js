const auth = document.getElementById("auth-method"); // получаем элемент способа авторизации
const inputSelected = document.getElementById("selectedOption"); // получаем поле ввода(изменяемое)
const password = document.getElementById("password"); // получаем поле пароля
const main = document.querySelector("main");
const btn = document.querySelector("button"); // получаем кнопку

// при изменении способа авторизации(select)
auth.addEventListener("change", () => {
  const option = auth.value; // получаем выбранный метод
  password.placeholder = "Введите пароль";

  // текст в зависимости от выбранного cпособа авторизации
  if (option === "email") {
    inputSelected.placeholder = "Введите вашу почту";
  } else if (option === "phone") {
    inputSelected.placeholder = "Введите ваш номер телефона";
  } else if (option === "username") {
    inputSelected.placeholder = "Введите имя пользователя";
  } else {
    inputSelected.placeholder = "";
  }
});

// клик по кнопке
btn.addEventListener("click", () => {
  const option = auth.value; // получаем выбранный способ авторизации
  const selectedValue = inputSelected.value; // получаем введенное значение
  const passwordValue = password.value; // получаем введенный пароль

  if (option === "Метод авторизации:") {
    alert("Пожалуйста, выберите метод авторизации!");
    return;
  }

  // проверяем, заполнены ли все поля
  if (selectedValue && passwordValue) {
    const card = document.createElement("div");
    card.classList.add("card"); // класс для стилей карточки(каждой)

    const authMethodTitle = document.createElement("h1"); // создание заголовка
    authMethodTitle.innerHTML = `Метод авторизации: <br>${option}`; // текст заголовка

    const userData = document.createElement("p"); // создание параграфа, где информация
    userData.innerHTML = `Введенные данные: <br>${option}: ${selectedValue} <br>pass: ${passwordValue}`; // текст данных

    const registrationDate = document.createElement("p"); // создание текста для даты
    registrationDate.classList.add("date");
    const currentDate = new Date(); // получение текущей даты
    registrationDate.textContent = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`; // добавляем текст

    card.append(authMethodTitle); // вставляем заголовок в карточку
    card.append(userData); // вставляем данные в карточку
    card.append(registrationDate); // вставляем дату в карточку
    main.append(card); // вставляем карточку

    // очищение
    inputSelected.value = "";
    password.value = "";
  } else {
    alert("Пожалуйста, заполните все поля ввода!");
  }
});
