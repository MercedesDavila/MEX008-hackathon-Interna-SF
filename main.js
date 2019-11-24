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
const savingsA = document.getElementById('savings-a');
const logOutA = document.getElementById('log-out');
const nameLogin = document.getElementById('name-login');
const submitInfoNewUser = document.getElementById('accept');
const submitInfoBudget = document.getElementById('accept-budget');
const submitInfoSavings = document.getElementById('accept-savings');



// declaring global variables to save user data
//Login Section Data: Capturing Data
let rootLogin = document.getElementById('root-login');

// Register Section Data: Capturing Data
let nameRegister = document.getElementById('name');
let mailRegister = document.getElementById('e-mail');
let passRegister = document.getElementById('pass');
let pass2Register = document.getElementById('pass2');
let root = document.getElementById('root');

//Budget Section Data: Capturing Data
let monthlyIncome = document.getElementById('income');
let foodBudget = document.getElementById('food');
let rentBudget = document.getElementById('rent');
let transportBudget = document.getElementById('transport');
let bootCampBudget = document.getElementById('bootcamp');
let rootBudget = document.getElementById('root-bud');

//Savings Section Data: Capturing Data
let goal1 = document.getElementById('goal-1');
let amount1 = document.getElementById('amount-1');
let time1 = document.getElementById('time-1');
let goal2 = document.getElementById('goal-2');
let amount2 = document.getElementById('amount-2');
let time2 = document.getElementById('time-2');
let rootSavings = document.getElementById('root-savings')



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
    hideSection('savings');
    showSection('budget');

}

const goingSavings = () => {
    hideSection('budget');
    hideSection('register');
    hideSection('HomePage');
    hideSection('login');
    showSection('savings');
}

const goingLogin = () => {
    hideSection('budget');
    hideSection('register');
    hideSection('HomePage');
    hideSection('savings');
    showSection('login');
}

//events

enterHome.addEventListener('click', goingHome);
logOutA.addEventListener('click', goingLogin);

registerButton.addEventListener('click', goingRegister);
budgetA.addEventListener('click', goingBudget);
homeA.addEventListener('click', goingHome);
savingsA.addEventListener('click', goingSavings);

// functions to save data user//
//Save RegisterData
let saveInfoNewUser = () => {
    //Data capture written in the inputs
    nameRegister = document.getElementById('name').value;
    mailRegister = document.getElementById('e-mail').value;
    passRegister = document.getElementById('pass').value;
    pass2Register = document.getElementById('pass2').value;

    if (passRegister === pass2Register) {
        //saving data in localstorage
        localStorage.setItem('Usuario', nameRegister);
        localStorage.setItem('Mail', mailRegister);
        localStorage.setItem('Contraseña', passRegister);
        localStorage.setItem('Verificar-contraseña', pass2Register);
        //clearinputs
        document.getElementById('name').value = '';
        document.getElementById('e-mail').value = '';
        document.getElementById('pass').value = '';
        document.getElementById('pass2').value = '';
        goingBudget();
    } else {
        root.classList.remove('hide');
        root.innerHTML = 'Las contraseñas no coinciden';

    }

}

//Save BudgetData
let saveBudgetInfo = () => {
    monthlyIncome = document.getElementById('income').value;
    foodBudget = document.getElementById('food').value;
    rentBudget = document.getElementById('rent').value;
    transportBudget = document.getElementById('transport').value;
    bootCampBudget = document.getElementById('bootcamp').value;

    if (monthlyIncome == '') {
        rootBudget.classList.remove('hide');
        rootBudget.innerHTML = 'Por favor inserta un ingreso mensual.';
    } else {
        localStorage.setItem('Ingreso', monthlyIncome);
        localStorage.setItem('Comida', foodBudget);
        localStorage.setItem('Renta', rentBudget);
        localStorage.setItem('Transporte', transportBudget);
        localStorage.setItem('Bootcamp', bootCampBudget);
        goingSavings();
    }

}

//Save SavingsData
let saveSavingsInfo = () => {
        goal1 = document.getElementById('goal-1').value;
        amount1 = document.getElementById('amount-1').value;
        time1 = document.getElementById('time-1').value;
        goal2 = document.getElementById('goal-2').value;
        amount2 = document.getElementById('amount-2').value;
        time2 = document.getElementById('time-2').value;
        if (goal1, amount1, time1 == '') {
            rootSavings.classList.remove('hide');
            rootSavings.innerHTML = 'Por favor ingresa una meta.';
        } else {
            localStorage.setItem('Meta1', goal1);
            localStorage.setItem('Monto1', amount1);
            localStorage.setItem('Plazo1', time1);
            localStorage.setItem('Meta2', goal2);
            localStorage.setItem('Monto2', amount2);
            localStorage.setItem('Plazo2', time2);
            goingHome();
        }

    }
    // events to save data user
submitInfoNewUser.addEventListener('click', saveInfoNewUser);
submitInfoBudget.addEventListener('click', saveBudgetInfo);
submitInfoSavings.addEventListener('click', saveSavingsInfo)



// Functions to get data user//
//Get LoginData
let getinfoLogin = () => {
    const mailLogin = document.getElementById('name-login').value;
    const passLogin = document.getElementById('pass-login').value;
    if (mailLogin == localStorage.getItem('Mail'), passLogin == localStorage.getItem('Contraseña')) {
        localStorage.getItem('Mail');
        localStorage.getItem('Contraseña');
        goingHome();

    } else {
        rootLogin.classList.remove('hide');
        rootLogin.innerHTML = 'El usuario o contraseña son incorrectos';

    }


}

// let getInfoBudget = () => {

//     totalSavings = localStorage.getItemById('Monto1');
//     document.getItemById('total-savings').innerHTML = totalSavings;


// }

//events to get data user
enterHome.addEventListener('click', getinfoLogin);