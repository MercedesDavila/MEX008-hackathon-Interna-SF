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

//function open or close sections
const showSection = id => document.getElementById(id).classList.remove('hide');
const hideSection = id => document.getElementById(id).classList.add('hide');

//functions to change sections
const goingHome = () => {
    hideSection('login');
    showSection('HomePage')
}

const goingRegister = () => {
    hideSection('login');
    showSection('register')
}

enterHome.addEventListener('click', goingHome);
registerButton.addEventListener('click', goingRegister);