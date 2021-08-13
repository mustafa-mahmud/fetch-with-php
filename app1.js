'user strict';

const btn = document.querySelector('button');
const div = document.querySelector('div');

const loadData = async () => {
  const res = await fetch('sample.txt');
  const data = await res.text();

  div.textContent = data;
};

/////////////////////
btn.addEventListener('click', loadData);
