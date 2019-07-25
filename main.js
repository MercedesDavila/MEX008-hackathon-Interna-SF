//Functions sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//Const
const enterHome = document.getElementById('enter');
const registerButton = document.getElementById('register-button');
const budgetA = document.getElementById('budget-a');
const homeA = document.getElementById('home-a');
const nameLogin = document.getElementById('name-login');

//function open or close sections
const showSection = id => document.getElementById(id).classList.remove('hide');
const hideSection = id => document.getElementById(id).classList.add('hide');

//Saving user information
const savingName = () => {
        let nameLogin = nameLogin.value;
    }
    // print name

//functions to change sections
const goingHome = () => {
    hideSection('login');
    hideSection('register');
    hideSection('budget');
    showSection('HomePage')
}

const goingRegister = () => {
    hideSection('login');
    showSection('register')
}

const goingBudget = () => {
    hideSection('register');
    hideSection('HomePage');
    hideSection('login');
    showSection('budget');
}


//events
enterHome.addEventListener('click', goingHome);

registerButton.addEventListener('click', goingRegister);
budgetA.addEventListener('click', goingBudget);
homeA.addEventListener('click', goingHome);