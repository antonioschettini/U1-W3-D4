const numeriEstratti = [];

const generaTabellone = function () {
  numeriEstratti.length = 0;
  const tabellone = document.getElementById("tabellone");
  tabellone.innerHTML = "";
  const lista = document.getElementById("estratto");
  lista.innerHTML = "";
  for (let i = 1; i <= 76; i++) {
    const cella = document.createElement("div");
    cella.classList.add("cella");
    cella.innerText = i;
    cella.id = "cella-" + i;
    tabellone.appendChild(cella);
  }
};

const estraiNumero = function () {
  if (numeriEstratti.length >= 76) {
    alert("Fine gioco!");
    return;
  }

  let numeroCasuale = Math.floor(Math.random() * 76) + 1;

  for (let i = 0; numeriEstratti.includes(numeroCasuale); i++) {
    numeroCasuale = Math.floor(Math.random() * 76) + 1;
  }

  numeriEstratti.push(numeroCasuale);

  const cella = document.getElementById("cella-" + numeroCasuale);
  cella.classList.add("evidenziata");

  // let messaggio = "";
  // switch (numeroCasuale) {
  //   case 3:
  //     messaggio = "Numero 3! A' jatt (Il Gatto)";
  //     break;
  //   case 4:
  //     messaggio = "Numero 4! O' puorco (Il Maiale)";
  //     break;
  //   case 8:
  //     messaggio = "Numero 8! La maronn (La madonna)";
  //     break;
  //   case 13:
  //     messaggio = "Numero 13! Sant'Antonio";
  //     break;
  //   case 14:
  //     messaggio = "Numero 14! O' mbriaco ('L`ubriaco)'";
  //     break;
  //   case 25:
  //     messaggio = "Numero 25, Il Natale";
  //     break;
  //   case 48:
  //     messaggio = "Numero 48, O' Muort che parla (Il Morto che parla)";
  //     break;
  //   case 77:
  //     messaggio = "Numero 77, Le gambe delle Donne";
  //     break;
  //   default:
  //     messaggio = "Il numero estratto è: " + numeroCasuale;
  // }

  const lista = document.getElementById("estratto");
  const li = document.createElement("li");
  li.innerText = numeroCasuale;
  li.classList.add("list");
  lista.appendChild(li);
};
