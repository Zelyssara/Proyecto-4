var users = [
    {user: "Pedro", pass: "12345", type: "A"},
    {user: "Fernanda", pass: "fer", type: "B"},
    {user: "Francisco", pass: "1903", type: "B"}
];

var user;
var pass;
var userR;
var PassR;


function Extract(){
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
    userR = document.getElementById("userR").value;
    passR = document.getElementById("passR").value;
}

function LogIn(){
    Extract();
    var S = false;
    for (let i = 0; i < users.length; i++){
        if(user == users[i].user && pass == users[i].pass){
            alert("Te logueaste");
            S = true;
            if(users[i].type == "A"){
                ShowAdmin();
            }else{
                let tabla = document.getElementById("tabla");
                tabla.innerHTML = ""
            }
        }
    }
    if(!S){
        alert("Usuario o contraseña incorrectos");
        let tabla = document.getElementById("tabla");
        tabla.innerHTML = ""
    }
}

function Register(){
    Extract();
    users.push({user: userR, pass: passR});
    alert("Registro creado");
}

function ShowAdmin(){
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = ""
    let tr1 = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    th1.innerHTML = "Usuario";
    th2.innerHTML = "Tipo";
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tabla.appendChild(tr1);
    for(let i = 0; i < users.length; i++){
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let input = document.createElement("input");
        let button = document.createElement("button");
        input.id = "in" + i;
        input.type = "text";
//        let data = input.value;
        button.addEventListener("click", () => {Splice(i)});
        button.innerHTML = "X";
        td.innerHTML = users[i].user;
        td2.innerHTML = users[i].type;
        td2.appendChild(button);
        tr.appendChild(td);
        tr.appendChild(td2);
 //       tr.appendChild(input);
        tabla.appendChild(tr);
    }
}

function Splice(D){
  if(users[D].type == "B"){
     users[D].type = "A";
}else{
      users[D].type = "B";
}
//  var cambio = document.getElementById("in" + D).value;
//  users.splice(D, 1, {user: users[D].user, pass: users[D].pass, type: cambio});
    ShowAdmin();
}