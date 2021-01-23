export async function getBet() {

    const response = await fetch('http://localhost:8080/api/bet');
    return await response.json();
}

export async function getMoney() {

    const response = await fetch('http://localhost:8080/api/money');
    return await response.json();
}

export async function getUsers() {

    const response = await fetch('http://localhost:8080/api/users');
    return await response.json();
}

export async function play(data) {
    const response = await fetch('http://localhost:8080/api/play', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}