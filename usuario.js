class Empleado {
    constructor(usuario, password, estado) {
        this.usuario = usuario;
        this.password = password;
        this.estado = estado;
    }
}

const arrayEmpleado = [
    new Empleado("vendedor1000", "1234", "vendedor"),
    new Empleado("vendedor2000", "5678", "supervisor"),
];

    let btn = document.getElementById("btnlog");
    btn.addEventListener("click", comparaUsuario);

    function comparaUsuario() {
        let usser = document.getElementById("usuario").value;
        let pass = document.getElementById("password").value;
        let encontrado = false;
        let estado;
    
        for (let i = 0; i < arrayEmpleado.length; i++) {
            if (usser === arrayEmpleado[i].usuario && pass === arrayEmpleado[i].password) {
                encontrado = true;
                estado = arrayEmpleado[i].estado;
                break;
            }
        }
    
        encontrado
            ? (alert("¡Bienvenido! " + usser),
                estado === "vendedor"
                    ? (window.location = "vendedor.html")
                    : estado === "supervisor"
                    ? (window.location = "supervisor.html")
                    : null)
            : alert("Usuario o contraseña incorrectos.");
    }
    