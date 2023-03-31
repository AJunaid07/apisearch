const fetch = require('node-fetch');

const url = 'https://bfhldevapigw.healthrx.co.in/wp-cms/v1/posts/';

const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    Name: 'Aditi',
    Email: 'rajali069@gmail.com',
    College: 'lpu',
    StudentId: '123456',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': ''
  },
  body: '{"key1":"value","key2":"value"}'
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
