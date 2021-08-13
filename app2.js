'use strict';

const btnUser = document.querySelector('.user');
const btnUsers = document.querySelector('.users');
const div = document.querySelector('div');

const getUser = async () => {
  const res = await fetch('user.json');
  const data = await res.json();

  div.innerHTML = `
	<p>Id: ${data.id}</p>
	<p>Name: ${data.name}</p>
	<p>Email: ${data.email}</p>
	`;
};

const getUsers = async () => {
  const res = await fetch('users.json');
  const data = await res.json();
  div.innerHTML = '';

  data.forEach((el) => {
    div.innerHTML += `
    <p>Id: ${el.id}</p>
    <p>Name: ${el.name}</p>
    <p>Email: ${el.email}</p>
		<hr/>
    `;
  });

  // div.innerHTML = `
  // <p>Id: ${data.id}</p>
  // <p>Name: ${data.name}</p>
  // <p>Email: ${data.email}</p>
  // `;
};

//////////////////
btnUser.addEventListener('click', getUser);
btnUsers.addEventListener('click', getUsers);
