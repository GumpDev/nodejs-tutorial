function sincrona(){
    var num = 1000;
    while(num % 3 != 0)
        num *= Math.PI;

    return num;
}

async function assincrona(){
    return new Promise((resolve, error)=>{
        var num = sincrona();
        setTimeout(() => {
            resolve(num);
        }, 5000);
    });
}

async function assincrona2(){
    var num = await assincrona();

    return `teste ${num}`;
}

console.log("start");
assincrona2().then(val=>{
    console.log(val);
})
console.log("end");