// Add your code here
function submitData(name, email){
    const newUser ={
        name: name,
        email: email,
    };
    const configurationObject ={
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(newUser),
    }
    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return(response.json());
        })
        .then(function (object){
            const para = document.createElement("p");
            para.innerHTML = object.id;
            document.body.appendChild(para);
        })
        .catch(function(error) {
            // document.body.innerHTML = "Unauthorized Access"
            let message = document.createElement("p");
            message.innerHTML = "Unauthorized Access";
            document.body.appendChild(message)
        })
    }
    submitData("mio", )
    
