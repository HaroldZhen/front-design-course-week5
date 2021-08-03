"use strict";

/* global ClassicEditor   */
console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
ClassicEditor.create(document.querySelector("#editor"))["catch"](function (error) {
  console.error(error);
});
//# sourceMappingURL=all.js.map
