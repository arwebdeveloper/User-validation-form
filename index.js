const form = document.getElementById('submit-form');
const user = document.getElementById('username');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const bio = document.getElementById('bio');
const date = document.getElementById('dob');
const gender = document.getElementsByName('gender');

bio.addEventListener("input", event => {
    let bioInput = bio.value.trim();
    let maxWords = 60;
    bioInput   = bioInput.replace(/(^\s*)|(\s*$)/, "");
    bioInput   = bioInput.replace(/[ ]{2,}/gi, " ");
    bioInput   = bioInput.replace(/\n /, "\n");
    var words  = bioInput.split(' ');
    let wordLength = bioInput.split(" ").length;
    if (wordLength > maxWords) {
        event.preventDefault();
        words.length = maxWords;
        wordLength = maxWords;
        bio.value = words.join(' ');
        document.getElementById('word-limit').innerHTML = "Words limit reached";
    }
    document.getElementById('word-counter').innerHTML = wordLength + "/60";
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = user.value.trim();
    const mobileNo = mobile.value.trim();
    const emailId = email.value.trim();
    const bioData = bio.value.trim();
    const dateofBirth = date.value.trim();
    
    // value stored in local storage of browser

    localStorage.setItem("name",username);
    localStorage.setItem("mobile number", mobileNo);
    localStorage.setItem("email", emailId);
    localStorage.setItem("bio", bioData);
    localStorage.setItem("date of birth",dateofBirth );
    localStorage.setItem("gender");
    
    
});

form.addEventListener('reset', () => {
    user.value = "";
    mobile.value = "";
    email.value = "";
    bio.value = "";
    document.getElementById('word-counter').innerHTML = 0 + "/60";
    document.getElementById('name-required').innerHTML = "";
    document.getElementById('mob-required').innerHTML = "";
    document.getElementById('email-required').innerHTML = "";
    document.getElementById('word-limit').innerHTML = "";
    date.value = "";
})

const disableSubmit = () =>{
    document.getElementById('submit').disabled = true;
    document.getElementById('submit').style.backgroundColor = '#777';
    document.getElementById('submit').style.cursor = 'not-allowed';
}

// by default disable submit button
disableSubmit();

const enableSubmit = () =>{
    document.getElementById('submit').disabled = false;
    document.getElementById('submit').style.cursor = 'pointer';
    document.getElementById('submit').style.backgroundColor = '#2f770e';
}

// var submitform = document.querySelector('form');
form.addEventListener("input", () => {
    console.log('form change called');
    if (isFormValid()) {
        enableSubmit();
    } else {
        disableSubmit();
    }
});

const isFormValid = () => {

    const username = user.value.trim();
    const mobileNo = mobile.value.trim();
    const emailId = email.value.trim();
    const bioData = bio.value.trim();
    const dateofBirth = date.value.trim();

    // name validation with the help of regular expression
    var spclformat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const usernameResult = spclformat.test(username);

    // email validation with the help of regular expression
    const emailOnly = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailResult = emailOnly.test(emailId);

    let formValid = true;

    if (username == "") {
        formValid = false;
    } else if (username.length > 0 && usernameResult) {
        document.getElementById('name-required').innerHTML = "**Should not include any Special Character";
        formValid = false;
    } else if (!usernameResult) {
        document.getElementById('name-required').innerHTML = "";
    }


    if (mobileNo.length > 0 && mobileNo.length != 10) { // optional
        document.getElementById('mob-required').innerHTML = "** Max length 10"
        formValid = false;
    } else {
        document.getElementById('mob-required').innerHTML = "";
    }

    if (emailId == "") {
        formValid = false;
    } else if (emailId.length > 0 && !emailResult) {
        document.getElementById('email-required').innerHTML = "** Please enter valid email address";
        formValid = false;
    } else if (emailResult) {
        document.getElementById('email-required').innerHTML = "";
    }

    if (dateofBirth == "") {
        formValid = false;
    }

    return formValid;

}

const setMaxDate = () => {
    let currentDate = new Date();
    console.log(currentDate);
    let todayDate = currentDate.getDate();
    if (todayDate < 10) {
        todayDate = "0" + todayDate;
    }
    let currentMonth = currentDate.getMonth() + 1;
    if (currentMonth < 10) {
        currentMonth = "0" + currentMonth;
    }
    let currentYear = currentDate.getUTCFullYear();
    let maxDate = `${currentYear}-${currentMonth}-${todayDate}`;
    console.log('maxDate', maxDate);
    date.setAttribute('max', maxDate)
}

setMaxDate();





















// rough work

//     // name validation with the help of regular expression
//     const alphaOnly = /^[a-zA-Z]+ [a-zA-Z]+$|^[a-zA-Z]+$/;
//     const usernameResult = alphaOnly.test(username);

//     if (username === "") {
//         document.getElementById('name-required').innerHTML = "**Please enter your name"
//     } else if (username.length < 2) {
//         document.getElementById('name-required').innerHTML = "**Enter atleast 2 characters"
//     } else if (username.length > 20) {
//         document.getElementById('name-required').innerHTML = "**Maximum 20 characters only"
//     } else if (!usernameResult) {
//         document.getElementById('name-required').innerHTML = "**Name must only contain uppercase and lowercase letters"

//     } else {
//         document.getElementById('name-required').innerHTML = "";
//     }

//     //mobile number validation with the help of regular expression
//     const numOnly = /^[0-9]+$/;
//     const mobileResult = numOnly.test(mobileNo);

//     if (mobileNo === "") {
//         document.getElementById('mob-required').innerHTML = ""

//     } else if (mobileNo.length !== 10 || mobileResult === false) {
//         document.getElementById('mob-required').innerHTML = "** Enter a valid mobile number"
//     }
//     else {
//         document.getElementById('mob-required').innerHTML = ""

//     }


//     // email validation with the help of regular expression
//     const emailOnly = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     const emailResult = emailOnly.test(emailId);

//     if (emailId === "") {
//         console.log('email-validation')
//         document.getElementById('email-required').innerHTML = "** Please enter your email address"
//     }
//     else if (!emailResult) {
//         document.getElementById('email-required').innerHTML = "** Please enter valid emial address"
//     } else {
//         document.getElementById('email-required').innerHTML = ""

//     }

// }





























