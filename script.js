// script.js - simple page behavior

const heading = document.querySelector('h1');
const message = document.querySelector('p');

if (heading && message) {
  heading.textContent = 'Welcome to Project 01';
  message.textContent = 'This page now has JavaScript attached.';
}

console.log('script.js loaded successfully');
