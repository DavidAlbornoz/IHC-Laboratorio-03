(function() {
    let form = document.getElementsByName("form")[0],
        elementos = form.elements,
        boton = document.getElementsByName("hm");

    let mensaje = 'Complete los campos: '

    let validateName = function(e) {
        if (form.nombre.value == 0) {
            mensaje += "\n Nombre"
            e.preventDefault();
        }
    };

    let validateAge = function(e) {
        if (
            form.edad[0].checked == true ||
            form.edad[1].checked == true ||
            form.edad[2].checked == true ||
            form.edad[3].checked == true
        ) {} else {
            mensaje += "\n Edad"
            e.preventDefault();
        }
    };

    let validateprofession = function(e) {
        let indice = form.profesion.selectedIndex;
        let valor = form.profesion.options[indice].value;
        if (valor == "Funcionario" ||
            valor == "Profesión liberal" ||
            valor == "Empresario" ||
            valor == "Artista" ||
            valor == "Deportista"

        ) {} else {
            mensaje += "\n Profesion"
            e.preventDefault();
        }
    };


    let validateBedrooms = function(e) {
        if (
            form.dormitorios[0].checked == true ||
            form.dormitorios[1].checked == true ||
            form.dormitorios[2].checked == true ||
            form.dormitorios[3].checked == true ||
            form.dormitorios[4].checked == true
        ) {} else {
            mensaje += "\n Dormitorio"
            e.preventDefault();
        }
    };

    let validateType = function(e) {
        let tindice = form.tipo.selectedIndex;
        let tvalor = form.tipo.options[tindice].value;
        if (tvalor == "Piso" ||
            tvalor == "Adosado" ||
            tvalor == "Chalet" ||
            tvalor == "Casa"

        ) {} else {
            mensaje += "\n Tipo"
            e.preventDefault();
        }
    };

    let validatePrice = function(e) {
        if (
            form.precio[0].checked == true ||
            form.precio[1].checked == true ||
            form.precio[2].checked == true ||
            form.precio[3].checked == true
        ) {} else {
            mensaje += "\n Precio"
            e.preventDefault();
        }
    };

    let validateZone = function(e) {
        let zindice = form.zona.selectedIndex;
        let zvalor = form.zona.options[zindice].value;
        if (
            zvalor == "Centro" ||
            zvalor == "Nervión" ||
            zvalor == "Triana" ||
            zvalor == "Aljarafe" ||
            zvalor == "Macarena"
        ) {} else {
            mensaje += "\n Zona"
            e.preventDefault();
        }
    };

    let validateExtras = function(e) {

        if (
            form.extras[0].checked == true ||
            form.extras[1].checked == true ||
            form.extras[2].checked == true ||
            form.extras[3].checked == true
        ) {} else {
            mensaje += "\n Extras"
            e.preventDefault();
        }
    };

    let validar = function(e) {
        validateName(e);
        validateAge(e);
        validateprofession(e);
        validateBedrooms(e);
        validateType(e);
        validatePrice(e);
        validateZone(e);
        validateExtras(e);
        alert(mensaje);
        e.preventDefault();
    };
    form.addEventListener("submit", validar);
})();