let url = 'https://fer0605.github.io/jsonapi/curriculum.json';

function loadInfo() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => showInfo(data))
        .catch((error) => console.log(error));

    const showInfo = (data) => {
        console.log(data)
        let Nombre = "";
        let Fechadenacimiento = "";
        let Nacionalidad = "";
        let PuestoSolicitado= "";
        let Telefono = "";
        let Correo = "";
        let Domicilio = "";
        let Paqueteria = "";
        let ExperienciaLaboral = "";
        let Eduación = "";

        Nombre += `
            <li>
                ${data[0].Nombre}
            </li> 
        `;
        Fechadenacimiento += `
            <li>
             ${data[0].Fechadenacimiento}
            </li>
        `;
        Nacionalidad += `
            <li>
             ${data[0].Nacionalidad}
            </li>
        `;
        PuestoSolicitado += `
            <li>
             ${data[0].PuestoSolicitado}
            </li>
        `;
        Telefono += `
            <li>
             ${data[0].Telefono}
            </li>
        `;
        Correo += `
            <li>
             ${data[0].Correo}
            </li>
        `;
        Domicilio += `
            <li>
             ${data[0].Domicilio}
            </li>
        `;
        Paqueteria += `
            <li>
             ${data[0].Paqueteria}
            </li>
        `;
        ExperienciaLaboral += `
            <li>
            Empresa: ${data[1].Empresa}
            </li>
            <li>
            Puesto: ${data[1].Puesto}
            </li>
            <li>
            Fecha Ingreso: ${data[1].FechaIngreso}
            </li>
            <li>
            Fecha Termino: ${data[1].FechaTermino}
            </li>
        `;
        Eduación += `
            <li>
            Escuela: ${data[2].Escuela}
            </li>
            <li>
            Grado de Estudio: ${data[2].GradodeEstudio}
            </li>
            <li>
            Carrera: ${data[2].Carrera}
            </li>
            <li>
            Fecha de Ingreso: ${data[2].FechadeIngreso}
            </li>
            <li>
            Fecha de Termino: ${data[2].FechadeTermino}
            </li>
        `;
        document.getElementById('Nombre').innerHTML = Nombre;
        document.getElementById('Fecha de nacimiento').innerHTML = Fechadenacimiento;
        document.getElementById('Nacionalidad').innerHTML = Nacionalidad;
        document.getElementById('Puesto Solicitado').innerHTML = PuestoSolicitado;
        document.getElementById('Telefono').innerHTML = Telefono;
        document.getElementById('Correo').innerHTML = Correo;
        document.getElementById('Domicilio').innerHTML = Domicilio;
        document.getElementById('Paqueteria').innerHTML = Paqueteria;
        document.getElementById('Experiencia Laboral').innerHTML = ExperienciaLaboral;
        document.getElementById('Eduación').innerHTML = Eduación;
    }
}

loadInfo();