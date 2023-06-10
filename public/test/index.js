fetch(url, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    }
}).then(response=>{
    response.json();
}).then(console.log)
