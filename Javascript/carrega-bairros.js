
// alert('Leia o Tutorial')
let bairros = [];
console.log('rodou na abertura da tela.');
fetch('http://localhost:4000/bairros')
.then(response => response.json())
.then(bairros_servidor => {
    bairros = bairros_servidor;
    const cmbBairros = document.getElementById('bairro');
    bairros.forEach(bairro => {
        const itemBairro = document.createElement('option');// <option>IGARA</option>
        itemBairro.textContent = bairro['bairro'];
        cmbBairros.appendChild(itemBairro);
    });
});
