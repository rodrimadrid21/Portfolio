
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
