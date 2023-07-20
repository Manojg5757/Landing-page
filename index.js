let prom = new Promise((resolve,reject)=>{
    const arrival = true
    if(arrival){
        setTimeout((resolve)=>{
            console.log("Conqueror is Coming")
        },3000)
    }
    else{
        reject("He is forgiving you")
    }
})


async function Manoj(){
    try{
        console.log("Nova is Back")
        res = await prom
        console.log(res)
        console.log('Good bye')
    }
    catch(err){
        console.log(err)
    }
}

Manoj()