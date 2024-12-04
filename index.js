
function botones(nombre, id, link) {
    const boton = document.createElement("button");
    boton.textContent = nombre;
    boton.id = id;
    if (link) {
        const enlace = document.createElement("a");
        enlace.href = link;
        enlace.target = "_blank";
        enlace.appendChild(boton); //pone el boton dentro del enlace <a>
        return enlace;
    }
    return boton;
}

function hecho(){
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
}

const botonCV = botones("cv", "boton1", "https://drive.google.com/file/d/1ppJRVQDpsdkHBoHHBpNuELwStXDxfGj7/view");
document.getElementById("botones").appendChild(botonCV);//pone el boton en id"botones"



document.addEventListener('DOMContentLoaded', () => {
  const toggleProjectsBtn = document.getElementById("toggleProjectsBtn");
  const hiddenProjects = document.querySelectorAll(".hidden");

  // Variable para rastrear el estado (mostrar más o menos)
  let showingMore = false;

  // Función para mostrar proyectos
  function showProjects() {
      hiddenProjects.forEach((project) => {
          project.classList.remove("hidden");
          // Forzar un reflow para que la transición funcione
          void project.offsetWidth;
          project.style.opacity = "1";
          project.style.maxHeight = `${project.scrollHeight}px`;
          project.style.marginBottom = "0";
      });
      toggleProjectsBtn.textContent = "Ver menos";
      showingMore = true;
  }

  // Función para ocultar proyectos
  function hideProjects() {
      hiddenProjects.forEach((project) => {
          project.style.opacity = "0";
          project.style.maxHeight = "0";
          project.style.marginBottom = "-2rem";
          // Añadir la clase hidden después de la transición
          setTimeout(() => {
              project.classList.add("hidden");
          }, 500); // Este tiempo debe coincidir con la duración de la transición en CSS
      });
      toggleProjectsBtn.textContent = "Ver más";
      showingMore = false;
  }

  // Inicializar las alturas de los proyectos ocultos
  hiddenProjects.forEach((project) => {
      project.style.maxHeight = "0";
      project.style.opacity = "0";
      project.style.marginBottom = "-2rem";
  });

  toggleProjectsBtn.addEventListener("click", () => {
      if (!showingMore) {
          showProjects();
      } else {
          hideProjects();
      }
  });
});







