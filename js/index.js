const mensajePolitica = () => {
    Swal.fire({
        title: 'POLITICAS',
        text: "Transportes Fletes Terrestres S.A es una empresa que presta servicios de transporte terrestre automotor de carga masiva seca a nivel nacional, adoptando mecanismos y procedimientos de prevención basados en los estándares de calidad y seguridad; implementando herramientas de prevención y control en los riesgos y peligros detectados; minimizando las enfermedades laborales y accidentes de trabajo, promoción y cuidado del bienestar físico, mental y social de los empleados y contratistas, bajo los siguientes compromisos:",
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'SEGUIR LEYENDO'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'POLITICAS',
                html: '<ul><li>Satisfacer las necesidades  de nuestros clientes a través de entrega oportuna y segura de las mercancías.</li><li>Asegurar la continuidad en la cadena de suministro para garantizar el tránsito libre de contaminación, bajo los estándares de seguridad, confiabilidad y cumplimiento.</li><li>Evitar las enfermedades y accidentes laborales a través del control del riesgo y el bienestar físico, mental y social.</li><li>Evitar el lavado de activos, la financiación de terrorismo y la proliferación de armas de destrucción masiva a través cumplimiento del SIPLAFT.</li></ul>',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'SEGUIR LEYENDO'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'POLITICAS',
                        text: 'Lo anterior lo lograremos con el compromiso del personal para la implementación y mejora de un sistema integrado de gestión y el cumplimiento de los requisitos legales.Nuestro marco normativo será el fijado por las leyes colombianas vigentes.',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result.isConfirmed) {
                        }
                    })
                }
            })
        }
    })
}
const politicas = Inn