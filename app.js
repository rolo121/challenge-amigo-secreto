// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Función para obtener elementos por ID
function get(id) {
  return document.getElementById(id);
}

// Arreglo para almacenar los nombres de los amigos
let nombres = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
  const input = get("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe un nombre.");
    return;
  }
  //aseguramos que solo letras puedan digitar
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
    alert("Solo se permiten letras.");
    return;
  }

  nombres.push(nombre);
  input.value = "";
  actualizarLista();
}

// Función para mpostrar el arreglo con los nombres
function actualizarLista() {
  const lista = get("listaAmigos");
  lista.innerHTML = "";

  let i = 0;
  while (i < nombres.length) {
    const li = document.createElement("li");
    li.textContent = nombres[i];
    lista.appendChild(li);
    i++;
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  const lista = get("listaAmigos");
  const resultado = get("resultado");

  lista.innerHTML = "";
  resultado.innerHTML = "";

  if (nombres.length === 0) {
    alert("La lista está vacía.");
    return;
  }

  const indice = Math.floor(Math.random() * nombres.length);
  const elegido = nombres[indice];

  const li = document.createElement("li");
  li.textContent = elegido;
  resultado.appendChild(li);
}
