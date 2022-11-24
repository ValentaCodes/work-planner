$(function () {
  //assigns variables with respective ID's
  var nineAm = document.getElementById("9");
  var tenAm = document.getElementById("10");
  var elevenAm = document.getElementById("11");
  var twelvePm = document.getElementById("12");
  var onePm = document.getElementById("13");
  var twoPm = document.getElementById("14");
  var threePm = document.getElementById("15");
  var fourPm = document.getElementById("16");
  var fivePm = document.getElementById("17");
  var currentTime = dayjs().format("HH");

  //When save button is clicked, stores events and text in local storage
  $(".saveBtn").on("click", function () {
    let tasks = $(this).siblings(".description").val();
    let time = $(this).parents().attr("id");
    localStorage.setItem(time, tasks);
  });

  //Gets data from respective local storage
  $(function getStorage() {
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
  });

  //Family of if statements that changes time block color depending on time of day
  $(function changeColor() {
    if (currentTime > 9) {
      // sets text area to red
      $(nineAm).addClass("past");
      // sets text area to grey
    } else if (currentTime == 9) {
      $(nineAm).addClass("present");
      // sets text area to green
    } else {
      $(nineAm).addClass("future");
    }
    if (currentTime > 10) {
      $(tenAm).addClass("past");
    } else if (currentTime == 10) {
      $(tenAm).addClass("present");
    } else {
      $(tenAm).addClass("future");
    }
    if (currentTime > 11) {
      $(elevenAm).addClass("past");
    } else if (currentTime == 11) {
      $(elevenAm).addClass("present");
    } else {
      $(elevenAm).addClass("future");
    }
    if (currentTime > 12) {
      $(twelvePm).addClass("past");
    } else if (currentTime == 12) {
      $(twelvePm).addClass("present");
    } else {
      $(twelvePm).addClass("future");
    }
    if (currentTime > 13) {
      $(onePm).addClass("past");
    } else if (currentTime == 13) {
      $(onePm).addClass("present");
    } else {
      $(onePm).addClass("future");
    }
    if (currentTime > 14) {
      $(twoPm).addClass("past");
    } else if (currentTime == 14) {
      $(twoPm).addClass("present");
    } else {
      $(twoPm).addClass("future");
    }
    if (currentTime > 15) {
      $(threePm).addClass("past");
    } else if (currentTime == 15) {
      $(threePm).addClass("present");
    } else {
      $(threePm).addClass("future");
    }
    if (currentTime > 16) {
      $(fourPm).addClass("past");
    } else if (currentTime == 16) {
      $(fourPm).addClass("present");
    } else {
      $(fourPm).addClass("future");
    }
    if (currentTime > 17) {
      $(fivePm).addClass("past");
    } else if (currentTime == 17) {
      $(fivePm).addClass("present");
    } else {
      $(fivePm).addClass("future");
    }
  });

  //Displays current time
  $(function displayTime() {
    setInterval(() => {
      var getDate = dayjs().format("MMM DD, YYYY hh:mm:ss a");
      var currentDate = document.getElementById("currentDay");
      currentDate.innerText = getDate;
    }, 1000);
  });
});
