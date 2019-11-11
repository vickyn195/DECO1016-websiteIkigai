//subscription page
//form progress bar and next buttons
function goToStep(number, back = false) {

  if (number === 4) {

    var inputFirstnameValue = document.getElementById('firstname').value

    document.getElementById('firstname-value').innerHTML = inputFirstnameValue

  }

  var visibleStepElement = document.getElementsByClassName('visible')[0]

  visibleStepElement.classList.toggle('visible')

  var nextStepElement = document.getElementById('step-' + number)

  nextStepElement.classList.toggle('visible')

  var lastBar = back ? number + 1 : number

  var progressBar = document.getElementById('bar-' + lastBar)

  progressBar.classList.toggle('done')

}
//validateform
function validateForm() {
  var x = document.forms["myForm"]["firstname"].value;
  if (x == "") {
    alert("All boxes must be filled out");
    return false;
  }
  return true;
}

//image slideshow
function myFunction(imgs) {
  // expand the image
  var expandImg = document.getElementById("expandedImg");
  // Image text
  var imgText = document.getElementById("imgtext");
  // Link small and big images
  expandImg.src = imgs.src;
  // Use the value of the small image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}



//Local Storage
function submit(event) {
  if(!validateForm()) {
    event.stopPropagation()
    event.preventDefault()
  }
  
  var firstname = document.getElementById("firstname").value
  localStorage.setItem("firstname", firstname)
  var lastname = document.getElementById("lastname").value
  localStorage.setItem("lastname", lastname)
  var DOB = document.getElementById("DOB").value
  localStorage.setItem("DOB", DOB)
  var email = document.getElementById("email").value
  localStorage.setItem("email", email)
}

function loadStore() {
  document.getElementById("firstname").innerHTML = localStorage.getItem("firstname")
  document.getElementById("lastname").innerHTML = localStorage.getItem("lastname")
  document.getElementById("DOB").innerHTML = localStorage.getItem("DOB")
  document.getElementById("email").innerHTML = localStorage.getItem("email")
}


