// alert('Leia o Tutorial')
let bairros = [];
///console.log('rodou na abertura da tela.');
// Comando 'fetch' nativo do javasript: faz uma requisição na porta 4000
// Nessa situação o 'fetch' faz um 'get' por padrão mas também pode fazer outros métodos HTTP
// fetch é um comando que retorna uma promisse
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


/////////////////////////////////////////////////////////////////////////
let coordenadasBairro = document.querySelector('#coordenadas');
let bairroEscolhido = document.querySelector('#bairro')

let list = []
const bairro = document.getElementById('bairro');
const horaInicio = document.getElementById("start");
const horaFim = document.getElementById("end");
const dates = document.getElementById("dates");
        
    bairroEscolhido.addEventListener('click', function(){
        bairros.forEach(bairro => {
            if(bairro['bairro'] == bairroEscolhido.value){
                coordenadasBairro.textContent =  bairro['coordenadas']; 
            }
        });
       
    });
let lugarParaAdicionarOBairro = null;
function ConferirDataFutura(datadigitada) {
        let dataAtual = new Date()
        let diaAtual = dataAtual.getDate()
        let mesAtual = dataAtual.getMonth() + 1
        let anoAtual = dataAtual.getFullYear()      
        // lógica para verificar se o dia digitado é menor  que o dia atual
        if (anoAtual == datadigitada.substring(0,4) && mesAtual == datadigitada.substring(5,7) && (diaAtual - datadigitada.substring(8,10) <0 ))
        {
            alert('Data não pode ser maior que o dia atual.')
            return true
        }
        else return false  
}

function consultar( ){

    //lógica para validar se o usuário preencheu todos os campos.
               if(bairro.value == '')
                    return;
                else if(dates.value == '')
                    return;
         
                 
                else if(ConferirDataFutura(dates.value))
                      { 
                         
                          return;
                      }
      
//adicionar um card com este bairro na tela Servidor
    const bairro1 = document.getElementById('bairro1');
    const bairro2 = document.getElementById('bairro2');
    const bairro3 = document.getElementById('bairro3');
    const bairro4 = document.getElementById('bairro4');
    const bairro5 = document.getElementById('bairro5');

    
    //var lugarParaAdicionarOBairro = null;

    if(bairro1.innerText == '')
    {
        lugarParaAdicionarOBairro = bairro1;
        const btnbairro1 = document.createElement('button')
        btnbairro1.textContent = 'ALTERA'
        bairro1.appendChild(btnbairro1) 
    }
    else if(bairro2.innerText == '')
        lugarParaAdicionarOBairro = bairro2;
    else if(bairro3.innerText == '')
        lugarParaAdicionarOBairro = bairro3;
    else if(bairro4.innerText == '')
        lugarParaAdicionarOBairro = bairro4;
    else if(bairro5.innerText == '')
    {
        lugarParaAdicionarOBairro = bairro5;
        document.getElementById('submit').disabled = true;
    }
    if(lugarParaAdicionarOBairro == null)
    {
        alert('Não há mais posição para adicionar bairro');
        return;
    }
      // Botão ALTERAR: Fazer as alterações nos campos do formulário 
    let obj = new Object();
    obj.bairro = bairro.value;
    obj.coordenadas = coordenadas.textContent;
    obj.dates = dates.value;
 
    // Icard que interge Backend na Função  no app.get('todosBairros',(req,res))
    list.push(obj)
    obj.idCard = "bairro1"
    obj.idCard = "bairro2"
    obj.idCard = "bairro3"
    obj.idCard = "bairro4"
    obj.idCard = "bairro5"


        // CARDS: feito no javascript que interagem com HTML
    lugarParaAdicionarOBairro.innerHTML = `Bairro: <strong>${bairro.value}</strong><br/>
                                           Coordenadas: <strong>${coordenadas.textContent}</strong><br/>
                                           Data: <strong>${dates.value} </strong><br/>
                                           
                                           <button type="button" onclick="editar(
                                               '${obj.bairro}',
                                               '${obj.coordenadas.replaceAll("'","aspa maldita")}',
                                               '${obj.dates}')">    Trocar   </button>`;




    //habilitar o botão "Gerar Planilha"
    const botaoGerarPlanilha = document.querySelector(".container-footer .child-center")
    botaoGerarPlanilha.classList.remove('invisivel');


console.log(lugarParaAdicionarOBairro)
}
    //Função envia os dados do Front para Back atráves do metodo POST
 function enviardados(){
        fetch('http://localhost:4000/listar',{ 
            method:"POST", 
            body: JSON.stringify(list), 
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        } )
    }

// Inserção dos dados
function editar(bairro, coordenadas, dates,){
    console.log(bairro, coordenadas.replaceAll("aspa maldita","'"), dates);
    document.getElementById('bairro').value = bairro;
    document.getElementById('coordenadas').innerHTML = coordenadas.replaceAll("aspa maldita","'");
    document.getElementById('dates').value = dates;
  }
