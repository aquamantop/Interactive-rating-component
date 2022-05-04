window.addEventListener('load', () => {

    const form = document.forms[0];
    const numeros = document.querySelectorAll(".numeros")
    let eleccion = 0;

    numeros.forEach((e) => {
        e.addEventListener('click', () => {
            numeros.forEach(e=>e.classList.remove("numeroElegido"));
            e.classList.add("numeroElegido");
            eleccion = e.innerHTML;
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (eleccion === 0){
            alert("Elegir numero")
        } else tarjetaAgradecimiento(eleccion);

    });

    function tarjetaAgradecimiento(id){
        const main = document.querySelector("main")
        form.innerHTML = "";

        main.innerHTML = `
        <img src="./images/illustration-thank-you.svg" alt="Agradecimiento">
        <p id="seleccion">
        You selected ${id} out of 5
        </p>
        <h1>Thank you!</h1>
        <p id="parrafo">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!    
        </p>
        `
        main.classList.add("tarjetaAgradecimiento")
    }

});