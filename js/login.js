function submitForm(event) {
    console.log(window.location.href);
    const email = event.target[0].value
    const pass = event.target[1].value
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    verifyLogin(email, pass);
    event.preventDefault();
    return false;
}

function verifyLogin(email, password) {
    console.log(email, password);
    if (email == 'juand.osorio@hotmail.com' && password == '1234') {
        alert('Bienvenido');
        setTimeout(function () {
            window.location.href = "file:///D:/UNIVERSIDAD/Prog4/Prog4/pages/home-user.html";
        }, 3000)
    }
    else {
        alert('Usuario Incorrecto');
    }
}