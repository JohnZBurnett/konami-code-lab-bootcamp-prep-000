const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  // Write your JavaScript code inside the init() function

  let index = 0;

  window.addEventListener("keydown", onkeyDownHandler() )

  function onKeyDownHandler(e) {

    const key = parseInt(e.detail || e.which)

    for (let i = 0; i < code.length; i++) {

      debugger;

      // check to see if the keypress matches the next part of the code
      if (key === code[index]) {

        // if this is the last piece of the code, print a congratulatory message
        if (index === code.length - 1 ) {
          window.alert("Congratulations, Shinji!")

        }

        else {
          index++;
        }


      } // end if for keypress

      else {
        index = 0;
      }

    } // end for loop


  }

}
