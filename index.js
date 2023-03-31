function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const id = data.id;
        document.body.append(id);
      })
      .catch((error) => {
        document.body.append(error.message);
      });
  }
  submitData();