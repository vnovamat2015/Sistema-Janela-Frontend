let coordenadasBairro = document.querySelector('#coordenadas')
let bairroEscolhido = document.querySelector('#bairro');
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
        /*
        switch (bairroEscolhido.value){
            case 'CENTRO':
                coordenadasBairro.textContent =  `29° 55' 04''S  51° 11' 01''W`; break; 
            case 'FATIMA': 
                coordenadasBairro.textContent = `45° 25' 04''S 54° 16' 11''W` ; break;
            case 'GUAJUVIRAS':
                coordenadasBairro.textContent = `48° 35' 04''S 56° 10' 21''W`; break; 
            case 'NITEROI':
                    coordenadasBairro.textContent = `38° 15' 04''S 23° 11' 01''W`; break;    
            case 'MATHIAS VELHO':
                coordenadasBairro.textContent = `27° 30' 04''S 14° 15' 10''W`; break;        
            case 'MATO GRANDE':
                 coordenadasBairro.textContent = `W 51° 12' 48''S 29° 56' 24''`; break;       
            case 'NOSSA Sra. das GRAÇAS':
                 coordenadasBairro.textContent = `W 51° 08' 42''S 29° 56' 28''W`; break;   
            case 'IGARA':
                 coordenadasBairro.textContent = `W 51° 09' 34''S 29° 53' 52''W`; break;  
            case 'RIO BRANCO':
                 coordenadasBairro.textContent = `W 51° 11' 6''S 29° 57' 54''W`; break;  
            case 'HARMONIA':
                 coordenadasBairro.textContent = `W 51° 12' 36''S 29° 56' 44''W`; break;  
            default:
                coordenadasBairro.textContent = 'G  M  S'; break;
        }
*/
    });
            var lugarParaAdicionarOBairro = null;
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

function inserir( ){

    //lógica para validar se o usuário preencheu todos os campos.
               if(bairro.value == '')
                    return;
                else if(dates.value == '')
                    return;
                else if(horaInicio.value == '')
                    return;
                 else if(horaFim.value == '')
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
        btnbairro1.textContent = 'ALTERAR'
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
    obj.horaInicio = horaInicio.value;
    obj.horaFim = horaFim.value;
    
    



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
                                           Inicio da Chuva: <strong>${horaInicio.value}</strong><br/>
                                           Término da Chuva: <strong> ${horaFim.value} </strong><br/>
                                           <button type="button" onclick="editar(
                                               '${obj.bairro}',
                                               '${obj.coordenadas.replaceAll("'","aspa maldita")}',
                                               '${obj.dates}',
                                               '${obj.horaInicio}',
                                               '${obj.horaFim}')">    Alterar   </button>`;


    //habilitar o botão "Gerar Relatório"
    const botaoGerarRelatorio = document.querySelector(".container-footer .child-center")
    botaoGerarRelatorio.classList.remove('invisivel');
    
console.log(lugarParaAdicionarOBairro)
}
 function enviardados(){
        fetch('http://localhost:4000/relatorio',{ 
            method:"POST", 
            body: JSON.stringify(list), 
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        } )
    }

// Inserção dos dados
function editar(bairro, coordenadas, dates, horaInicio, horaFim){
    console.log(bairro, coordenadas.replaceAll("aspa maldita","'"), dates, horaInicio, horaFim);
    document.getElementById('bairro').value = bairro;
    document.getElementById('coordenadas').innerHTML = coordenadas.replaceAll("aspa maldita","'");
    document.getElementById('dates').value = dates;
    document.getElementById('start').value = horaInicio;
    document.getElementById('end').value = horaFim;
}
