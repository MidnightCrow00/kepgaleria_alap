export function htmlOsszeAllit(LISTA) {
    let txt = ""
    for (let index = 0; index < LISTA.length; index++) {
        const element = LISTA[index];
        txt += `<div class = "kep"> <img src ="${element.kep}" alt = "${element.cim}"></div>`
    }
    console.log(txt)
    return txt
}
