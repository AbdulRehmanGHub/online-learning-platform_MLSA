const enrollBtn = document.querySelectorAll(".enrollBtn");

enrollBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    alert(`You've enrolled in this course successfully.`);
    btn.innerHTML = "You are enrolled in this course!";
    // change text color
    btn.style.color = "red";
  });
});
