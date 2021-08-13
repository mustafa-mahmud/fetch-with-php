'use strict';

const btn = document.querySelector('button');
const div = document.querySelector('div');

const url = 'https://api.github.com/users';

const loadApi = async () => {
  const res = await fetch(url);
  const data = await res.json();

  data.forEach((el) => {
    div.innerHTML += `
		<div style="display:flex;">
		<p>Name: ${el.login}</p>
		<p><img src="${el.avatar_url}" width="75" height="75"></p>
		</div>
		`;
  });
};

//////////////
btn.addEventListener('click', loadApi);
