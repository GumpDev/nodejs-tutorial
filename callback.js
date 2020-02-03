function fcallback(callback){
    setTimeout(() => {
        callback("oi");
    }, 5000);
}

fcallback((val)=>{
    console.log(val);
})