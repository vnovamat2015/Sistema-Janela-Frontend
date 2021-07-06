
// alert('Leia o Tutorial')
let bairros = [];
console.log('rodou na abertura da tela.');
fetch('http://localhost:4000/bairros')
.then(response => response.json())
.then(bairros_servidor => {
    console.log(bairros_servidor)

    bairros = bairros_servidor;
    const cmbBairros = document.getElementById('bairro');

   /* Comando que interge html com javascript no Backend na const todosBairros. Exemplo const novobairro = {'bairro': "OLARIA",'coordenadas': "51° 12' 36''S 29° 56' 44''W" }*/
    bairros.forEach(bairro => {
        const itemBairro = document.createElement('option');// <option>IGARA</option>
        itemBairro.textContent = bairro['bairro'];
        cmbBairros.appendChild(itemBairro);
    });
});




