'use strict';
/**- Добавить кнопку << , т.е. переход на первую страницу.
- Добавить информацию о юзере (возраст, имейл, ...).
- Цвет рамки (фона) карточкам генерить в зависимости от пола юзера.
- Застилить карточки. */

const options = {
  results: 10,
  seed: 'abc',
  page: 1,
};

loadUsers(options);


const buttonContainer = document.querySelector('.buttonContainer');
const btnPrevExtreme = document.createElement("button");
btnPrevExtreme.textContent = "<<";
buttonContainer.prepend(btnPrevExtreme);
const [, btnPrev, btnNext] = document.querySelectorAll('button');
btnPrev.addEventListener('click', btnPrevHandler);
btnNext.addEventListener('click', btnNextHandler);
btnPrevExtreme.addEventListener('click', btnPrevExtremetHandler);


function btnPrevExtremetHandler(e) {
  options.page = 1;
  loadUsers(options);
}

function btnPrevHandler(e) {
  if (options.page >= 1) {
    options.page--;
    loadUsers(options);
  }
}

function btnNextHandler(e) {
  options.page++;
  loadUsers(options);
}

function loadUsers({ results, seed, page, }) {
  fetch(
    `https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`
  )
    .then(response => response.json())
    .then(({ results }) => renderUsers(results));

}
function renderUsers(users) {
  const userList = document.querySelector('.userList');
  if (userList) {
    userList.remove();
  }
  const newUserList = document.createElement('ul');
  newUserList.classList.add('userList');
  document.getElementById('root').prepend(newUserList);
  const liUserCollection = users.map(user => createUserListItem(user));
  newUserList.append(...liUserCollection);

}

function createUserListItem({
  gender: userGender,
  name: { first: firstName, last: lastName },
  picture: { large: userImageSrc },
  dob: { age: userAge },
  email: userEmail,
}) {
  const userListItem = document.createElement('li');
  userListItem.classList.add('userListItem');
  if (userGender === 'female') {
    userListItem.style.borderColor = 'pink';
    userListItem.style.backgroundColor = '#d4afc8';
    userListItem.style.color = 'brown';

  }
  userListItem.append(createUserImage(userImageSrc));
  userListItem.append(createUserFullName(firstName, lastName));
  userListItem.append(createUserGender(userGender));
  userListItem.append(createUserAge(userAge));
  userListItem.append(createUserEmail(userEmail));
  return userListItem;

}

function createUserImage(userImageSrc) {
  const img = new Image();
  img.src = userImageSrc;
  img.alt = 'user profile image';
  return img;
}

function createUserFullName(firstName, lastName) {
  const div = document.createElement('div');
  div.classList.add('userFullName');
  div.innerText = `${firstName} ${lastName}`;
  return div;
}
function createUserGender(userGender) {
  const div = document.createElement('div');
  div.classList.add('userGender');
  //div.innerText = `${userGender}`;
  return div;
}

function createUserAge(userAge) {
  const div = document.createElement('div');
  div.classList.add('userAge');
  div.innerText = `${userAge} years old`;
  return div;
}
function createUserEmail(userEmail) {
  const div = document.createElement('div');
  div.classList.add('userEmail');
  div.innerText = `email: ${userEmail}`;
  return div;
}
//const inputMarked = document.createElement('input');
//console.log(inputMarked
//)
//userFullName.forEach((e) => )
/* function userFullNameHandler(e){
   input.textContent += `${firstName} ${lastName}, `
 }*/
console.log(root);
const root1 = root.firstElementChild;
console.log(root1);
let userListItem = document.querySelectorAll('.userListItem');
console.log(userListItem);

