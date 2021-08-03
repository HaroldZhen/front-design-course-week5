console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

ClassicEditor.create(document.querySelector("#editor")).catch((error) => {
  console.error(error);
});