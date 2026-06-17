document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("contactForm");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            const client = {
                prenom: document.getElementById("prenom").value.trim(),
                nom: document.getElementById("nom").value.trim(),
                telephone: document.getElementById("telephone").value.trim(),
                email: document.getElementById("email").value.trim(),
                vehicule: document.getElementById("vehicule").value,
                budget: document.getElementById("budget").value,
                rappel: document.getElementById("rappel").checked,
                message: document.getElementById("message").value.trim()
            };

            if(client.prenom === "" || client.nom === "" || client.telephone === "" || client.email === ""){
                alert("Veuillez remplir les champs obligatoires.");
                return;
            }

            console.log("Nouveau client :", client);

            alert(
                "Merci " + client.prenom + " " + client.nom +
                ", votre demande a bien été enregistrée."
            );

            form.reset();

        });

    }

});