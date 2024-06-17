const cpfText = window.document.querySelector(".cpf");
const btn = window.document.querySelector(".button");
let validSumCpf = [33, 44, 55, 66, 11, 12, 21, 22, 23, 23, 32, 33, 34, 43, 44, 45, 54, 55, 56, 65, 66, 67, 76, 77, 78, 87, 88];

btn.addEventListener("click", () => {
    var finalCpf = generateCpf();
    cpfText.innerHTML = `<h2>${finalCpf}</h2>`;
});

function generateCpf()
{
    function formatCnpjCpf(value)
    {
        const cnpjCpf = value.replace(/\D/g, '');
  
        if (cnpjCpf.length === 11) {
            return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4");
        } 
  
        return cnpjCpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3/\$4-\$5");
    } // Creator credits of this function: Marcelo Henrique Neppel (https://gist.github.com/marceloneppel)

    let finalCpf = [];
    var finalCpfText = "";

    for (i=0; i< 11; i++)
    {
        var num = Math.floor(Math.random() * 11);
        finalCpf.push(num);
    }

    finalCpf.forEach(num => {
        finalCpfText = finalCpfText + num;
    })

    return formatCnpjCpf(finalCpfText);
}

function isNumber(n){
    return Number(n)=== n;
} // Credits of this function to: kennebec (https://stackoverflow.com/users/80860/kennebec)