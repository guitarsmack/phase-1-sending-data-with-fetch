// Add your code here

// const submitData = function(name,email) {
//     fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       "name": name,
//       "email": email,
//     })})
//     .then(resp => resp.json())
//     .then(obj => appendItem(obj))
// };

// function appendItem(item){
//     let p = document.createElement("p")
//     p.innerHTML = 
//     document.querySelector("body").appendChild(p)
//     console.log(p)
// }

const submitData = function(name,email){

    let p = "jkl"
    let data = {
        "name": name,
        "email": email
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(function (response) {
        return response.json();
      })
      .then((info) => {
        document.querySelector('body').innerHTML = info.id
        })
        .catch(error => document.querySelector('body').innerHTML = error)

  }


