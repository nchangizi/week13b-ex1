let studentsArray = [];

function clickHandler(event) {
  if (event.target.tagName === "BUTTON") {
    //if the button is change bg (use textContent or id)
    if (event.target.id === "bgButton") {
    }
    //else if it is submit
    else if (event.target.textContent === "Submit") {
      let firstNameInput = document.querySelector("#firstname");
      let lastNameInput = document.querySelector("#lastname");
      let progNameInput = document.querySelector("#progname");
      let student = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        progName: progNameInput.value,
      };
      console.log(student);
      //loop thorugh the array check all elements and see if a matchign student exists don't add it
      studentsArray.push(student);
      addStudentToList(student);
      firstNameInput.value = "";
      lastNameInput.value = "";
      progNameInput.value = "";
    }
  }
}
document.body.addEventListener("click", clickHandler);

function addStudentToList(newStudent) {
  //newStudent is an obj with firstName, lastName, and progName
  //create new li
  const newLi = document.createElement("li");
  //find the correct ul based on the progName of newStudent
  //append the new li to the ul
  newLi.textContent = `${newStudent.firstName} ${newStudent.lastName}`; 
  if (newStudent.progName === "CIT") {
    const citList = document.querySelector("#CIT");
    citList.appendChild(newLi);
  } else if (newStudent.progName === "CST") {
    const cstList = document.querySelector("#CST");
    cstList.appendChild(newLi);
  }
  //update the textContent of new li
}
