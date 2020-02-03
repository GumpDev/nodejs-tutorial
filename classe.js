class Pessoa{
    nome = "";
    idade = 0;
    data = null;

    constructor(nomeArg, idadeArg, dataArg){
        this.nome   = nomeArg;
        this.idade  = idadeArg;
        this.data   = dataArg;
    }

    aniversario(){
        if(new Date().getDay() == this.data.getDay() &&
           new Date().getMonth() == this.data.getMonth()){
            this.idade++;
            console.log("Parabens !!!");
        }else console.log("hj não é seu aniversário");

        return this.proximoAniversario();
    }

    proximoAniversario(){
        var ano = new Date().getFullYear();
        if(new Date(`${this.data.getMonth() + 1}/${this.data.getDate()}/${ano}`) > new Date())
            return ano;
        else return ano+1;
    }
}

var Gustavo = new Pessoa("Gustavo",16,new Date("05/21/2003"));

console.log(Gustavo.aniversario());
console.log(Gustavo.idade);
console.log(Gustavo.data);