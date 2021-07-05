var valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];


function busca(num) {
    for (i = 0; i < 6; i++) {
        if (num == valores[i]) {
            return i;
        }
    }
    return -1;
}

function buscaBinaria(num) {
    let inicio, fim;
    let meio;
    inicio = 0;
    fim = 9;
    while (inicio <= fim) {
        console.log("olá 0");
        meio = parseInt((inicio + fim) / 2);
        if (num == valores[meio]) {
            return meio;

        }

        else {
            if (num > valores[meio]) {
                inicio = meio + 1;
                console.log("olá 2");
            }
            else {
                fim = meio - 1;
                console.log("olá 3");
            }
        }
    }
    return -1;

}


console.log(buscaBinaria(5));