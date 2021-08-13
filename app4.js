'use strict';

const myForm = document.getElementById('myForm');

//Send data by FormData()
/* const fetchData = async (e) => {
  e.preventDefault();

  const formData = new FormData(myForm);

  const res = await fetch('insert.php', {
    method: 'post',
    body: formData,
  });

  const data = await res.text();
  console.log(data);
}; */

/* //Send data by URLSearchParams()
const fetchData = async (e) => {
  e.preventDefault();

  const formData = new FormData(myForm);
  const searchParams = new URLSearchParams();

  for (const pair of formData) {
    searchParams.append(pair[0], pair[1]);
  }

  const res = await fetch('insert.php', {
    method: 'post',
    body: searchParams,
  });

  const data = await res.text();
  console.log(data);
}; */

//Send data by JSON
const fetchData = async (e) => {
  e.preventDefault();

  const res = await fetch('insert.php', {
    method: 'post',
    body: JSON.stringify({
      name: 'Mithu',
      pass: 123456,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const data = await res.text();
  console.log(data);
};

///////////////
myForm.addEventListener('submit', fetchData);
