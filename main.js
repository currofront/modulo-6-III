// Constantes
const WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
let myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

// Creamos una función para generar aleatoriamente true o false.
let getRandom = (a, b) => Math.round(Math.random()) === 0 ? a : b;

// Creamos una función para generar un nuevo array de true o false con la longitud de availability
let getRandomAvailability = (availability) => {
    const randomAvailability = [];
    for (let i = 0; i < availability.length; i++) {
        randomAvailability.push(getRandom("Sí", "No"));
    }
    return randomAvailability;
};


for (let i = 0; i < myTeam.length; i++) {
    myTeam[i].availability = getRandomAvailability(myTeam[i].availability);
};

let showHours = (availability) => {
    let x = 8;
    let y = 9
    for (let i = 0; i < availability.length; i++) {
        x === 14 || y === 15 ? x++ && y++ : "";
        console.log(x++ + ":" + "00" + " - " + y++ + ":" + "00 " + availability[i]);
    }
}

let showAvailability = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log("Disponibilidad de " + arr[i].name)
        showHours(arr[i].availability)
    }
}


console.log(showAvailability(myTeam))


// DUDA Al intentar poner meeting false  y en el if "Sí" no funciona. Tampoco puedo ponerle un else al if meeting true. DUDA
let isMeeting = () => {
    let meetingHour = "Sin disponibilidad";
    for (var i = 0; i < WORK_HOURS.length; i++) {
        var meeting = true;
        for (var index = 0; index < myTeam.length; index++) {
            if (myTeam[index].availability[i] === "No") {
                meeting = false;
            };
        }
        if (meeting === true) {
            meetingHour = WORK_HOURS[i];
        };
    };
    console.log("Disponibilidad: " + meetingHour);
};

isMeeting();


// Calculadora de cambio óptima

const dinero = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200];

let compra = () => document.getElementById("compra").value;
let entregado = () => document.getElementById("entregado").value;

let cambioTotal = () => entregado() - compra();

let cambioOptimo = () => {
  let cambio = cambioTotal();
  let cambioEstructurado = [];

  for (let i = dinero.length - 1; i >= 0 && cambio > 0; i--) {
    let cantidad = Math.floor(cambio / dinero[i]);
    if (cantidad > 0) {
      cambio -= cantidad * dinero[i];
      for (index = 0; index < cantidad; index++) {
        cambioEstructurado.push(dinero[i]);
      }
    }
  }
  return "Importe a devolver: " + cambioEstructurado + " €";
};

let printCambioOptimo = () => (document.getElementById("cambio").innerText = cambioOptimo());

document.getElementById("calcular").addEventListener("click", printCambioOptimo);



