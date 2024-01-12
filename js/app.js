const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const times = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inTime.value;
    times.push(nome);
    frm.inTime.value = "";
    inTime.focus();
    frm.btListar.dispatchEvent(new Event("click"));
})

btListar.addEventListener("click", () => {
    if(times.length == 0){
        alert("Não há times na lista");
        inTime.focus();
        return
    } else{
        const listaTimes = times.reduce((acumulador, time) => acumulador + time + "\n", "");
        resp.innerText = listaTimes;    
    }
})

btMostrarTabela.addEventListener("click", () => {
    const tamanho = times.length;

    if(tamanho == 0 || tamanho % 2 == 1){
        alert("Deve haver quantidade par de números");
        inTime.focus();
        return
    } else {
        let confrontos = "";
        const ultimo = tamanho - 1;

        for(i = 0; i < tamanho / 2; i++){
            confrontos += `${times[i]} x ${times[ultimo - i]}\n`
        }
        resp.innerText = confrontos;
    }
})

