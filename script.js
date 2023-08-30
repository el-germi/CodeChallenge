const api = 'https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d'
const endp = api + '/grupo265'

function del(cid) {
    fetch(endp + '/' + cid, { method: 'DELETE' })
}

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("send").addEventListener("click", () => {
        fetch(endp, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                nombre: document.getElementById("name").value,
                apellido: document.getElementById("sur").value,
                grupo: document.getElementById("grupo").value,
                sala: document.getElementById("sala").value
            })
        })
    });

    const table = document.getElementById("table");

    function display(arr) {
        table.innerHTML = "";
        arr.forEach(e => table.innerHTML += `
        <tr>
            <td>${e.nombre}</td>
            <td>${e.apellido}</td>
            <td>${e.grupo}</td>
            <td>${e.sala}</td>
            <td>
                <button class="btn btn-danger" onclick="del('${e._id}')">
                    <i class='fa-solid fa-trash'></i>
                </button>
            </td>
        </tr>
        `);
    }

    setInterval(() => {
        fetch(endp)
            .then(response => response.json())
            .then(data => display(data))
    }, 1500);
});