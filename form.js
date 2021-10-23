//Function to add list of items to an element for options
function addElements(element, items) {
    for (let item of items) {
        let temp = document.createElement('option');
        temp.value = item;
        temp.innerHTML = item;
        element.appendChild(temp);
    }
}

//Function used during validation to write error message
function writeMessage(element, text) {
    let message = document.createElement('p');
    message.innerHTML = text;
    element.appendChild(message);
}

function retry() {
    let errorElement = document.getElementById('errors')
    while (errorElement.firstChild != null) {
        errorElement.removeChild(errorElement.firstChild);
    }
}

function validate() {
    //Clear all previous errors
    retry()
    
    //grab all elements values
    let username = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phoneNumber').value;
    let pass1 = document.getElementById('password1').value;
    let pass2 = document.getElementById('password2').value;
    let year = document.getElementById('dateYear').value;
    let month = document.getElementById('dateMon').value;
    let day = document .getElementById('dateDay').value;
    let pop = document.getElementById('pop').checked;
    let hipHop = document.getElementById('hipHop').checked;
    let jazz = document.getElementById('jazz').checked;
    let rock = document.getElementById('rock').checked;
    let classic = document.getElementById('classic').checked;
    let country = document.getElementById('country').checked;
    let genderElem = document.getElementsByName('gender');
    let gender;
    for (let dot of genderElem) {
        if (dot.checked) {
            gender = dot.id;
            break;
        }
    }

    //Validation
    let usernameValid = (/^[a-z0-9]{4,12}$/.test(username));
    let emailValid = (/^.+@.+\.(net|com|org|edu)$/.test(email));
    let phoneValid = ( /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone));
    let pass1Valid = (/^.*[A-Z].*$/.test(pass1) &&           //Uppercase test
                        /^.*[a-z].*$/.test(pass1) &&         //Lowercase test    
                        /^.*[0-9].*$/.test(pass1) &&         //Number test
                        /^.*[^A-Za-z0-9].*$/.test(pass1));   //contains all test       
    let pass2Valid = (pass1 === pass2);
    let yearValid = (year !== "none");
    let monthValid = (month !== "none");
    let dayValid = (day !== "none");
    let genderValid = (gender != null);
    let musicValid = (pop || hipHop || jazz || rock || classic || country);

    
    //Error messages
    if (usernameValid && emailValid && phoneValid && pass1Valid
        && yearValid && monthValid && dayValid && genderValid && musicValid) {
            //All inputs are valid, check passwords
            if (pass2Valid) {
                //Everything ok, redirect to index.html
                window.location.replace('index.html');
            } else {
                //Mismatched passwords
                window.alert ("Passwords do not match, please try again.");
            }
            
    } else {
        //Something isn't valid, check and write error messages
        let errorElement = document.getElementById('errors')
        let redText = "<span class='errorRed'>";
        let orangeText = "<span class='errorOrange'>";
        let please = "Please enter ";
        let tempString;
        if (!usernameValid) {
            if (username === "") {
                tempString = redText + " a username </span>"
                writeMessage(errorElement, please + tempString )
            } else {
                tempString = orangeText + " a valid username </span>"
                writeMessage(errorElement, please + tempString )
            }
        }
        if (!emailValid) {
            if (email === "") {
                tempString = redText + " an email address</span>"
                writeMessage(errorElement, please + tempString )
            } else {
                tempString = orangeText + " a valid email address</span>"
                writeMessage(errorElement, please + tempString )
            }
        }
        if (!phoneValid) {
            if (phone === "") {
                tempString = redText + " a phone number</span>"
                writeMessage(errorElement, please + tempString )
            } else {
                tempString = orangeText + " a valid phone number</span>"
                writeMessage(errorElement, please + tempString )
            }
        }
        if (!pass1Valid) {
            if (pass1 === "") {
                tempString = redText + " a password</span>"
                writeMessage(errorElement, please + tempString )
            } else {
                tempString = orangeText + " a valid password</span>"
                writeMessage(errorElement, please + tempString )
            }
        }

        please = "Please select "
        if (!genderValid) {
            tempString = redText + " a gender</span>"
            writeMessage(errorElement, please + tempString)
        }
        if (!yearValid || !monthValid || !dayValid) {
            tempString = redText + " a birthday</span>"
            writeMessage(errorElement, please + tempString)
        }
        if (!musicValid) {
            tempString = redText + " at least one music genre</span>"
            writeMessage(errorElement, please + tempString)
        }
    }
}



//Add in date info
let yearElement = document.getElementById('dateYear');
let monthElement = document.getElementById('dateMon')
let dayElement = document .getElementById('dateDay')

let yearList = [];
for (let i = 1970; i < 2011; i++) {
    yearList.push(i);
}
let monthList = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"]
let dayList = Array.from(Array(32).keys()).slice(1)

addElements(yearElement, yearList);
addElements(monthElement, monthList);
addElements(dayElement, dayList);


