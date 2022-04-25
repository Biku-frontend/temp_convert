const celsius = document.getElementById("celsius")

const fahrenheit = document.getElementById("fahrenheit");


celsius.addEventListener("input", function(){
    let c = this.value;
    
    let f = (c * 9/5) + 32;

// integer check
if(!Number.isInteger(f)){
    f = f.toFixed(4)
}

    fahrenheit.value = f
})

fahrenheit.addEventListener("input", function(){
    let f =this.value;

    let c = (f - 32) * 5/9;

// integer check
if(!Number.isInteger(c)){
    c = c.toFixed(3)
}

    celsius.value = c;
})