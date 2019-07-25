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
const submitInfoNewUser = document.getElementById('accept');
const submitInfoBudget = document.getElementById('accept-budget');
const submitInfoSavings = document.getElementById('accept-savings');

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
    hideSection('savings')
    showSection('HomePage');
}

const goingRegister = () => {
    hideSection('login');
    hideSection('HomePage');
    hideSection('savings');
    showSection('register');
}

const goingBudget = () => {
    hideSection('register');
    hideSection('HomePage');
    hideSection('login');
    showSection('budget');
}

const goingSavings = () => {
    hideSection('budget');
    showSection('savings');
}


//events
enterHome.addEventListener('click', goingHome);

registerButton.addEventListener('click', goingRegister);
budgetA.addEventListener('click', goingBudget);
homeA.addEventListener('click', goingHome);
submitInfoNewUser.addEventListener('click', goingBudget);
submitInfoBudget.addEventListener('click', goingSavings);
submitInfoSavings.addEventListener('click', goingHome);