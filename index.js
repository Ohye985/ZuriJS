console.log("**********CheckYuGiOh***********");
function checkYuGiOh(wholeNumber){
    let integer = []; 
    
    function check() {
        for(var i = 1; i <= wholeNumber; i++){
        integer.push(i);
        
        if((i % 2 === 0) && (i % 3 === 0) && (i % 5 === 0)){
                let flow = integer.indexOf(i)
                integer.splice(flow, flow, "yu-gi-oh");
            }else if((i % 2 === 0)  && (i % 3 === 0) && (i % 5 !== 0)){
                let flow = integer.indexOf(i)
                integer.splice(flow, flow, "yu-gi");
            }else if((i % 2 === 0) && (i % 3 !== 0) &&(i % 5 === 0)){
                let flow = integer.indexOf(i)
                integer.splice(flow, flow, "yu-oh")
            }else if((i % 2 !== 0) && (i % 3 === 0) && (i % 5 === 0)){
                let flow = integer.indexOf(i)
                integer.splice(flow, flow, "gi-oh")
            }else if(i % 2 === 0){
                let flow = integer.indexOf(i)
                integer.splice(flow, flow, "yu");
            }else if(i % 3 === 0){
                let flow = integer.indexOf(i)
                integer.splice(flow, flow, "gi")
            }else if(i % 5 === 0){
                let flow = integer.indexOf(i)
                integer.splice(flow, flow, "oh");
            }    

        }
    }

if(typeof(wholeNumber) !== "number") {
    if (Array.isArray(wholeNumber)) {
        return `invalid parameter: ${JSON.stringify(wholeNumber)}`;
    }else if (typeof(wholeNumber) === "string") {
        if (typeof(parseInt(wholeNumber)) === "number" && !isNaN(parseInt(wholeNumber))) {
                check();
            }else {
                return `invalid parameter: ${JSON.stringify(wholeNumber)}`;
            }
    }else  {
        return `invalid parameter: ${JSON.stringify(wholeNumber)}`;
    }
}else {
        check();
    }

// console.log(integer);
return integer;

}
console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));
console.log(checkYuGiOh("100"));
console.log(checkYuGiOh("first"));


console.log("**********ConvertFahrToCelsius***********");


const convertFahrToCelsius = function(F) {

    if (typeof(F) !== "number" || typeof(F) === "object" || typeof(F) === !isNaN(F)) {
        if(Array.isArray(F)) {
            return (`${JSON.stringify(F)} is not a valid number but a/an array`);
        }
        else if (typeof(F) === "string"){
            if (typeof(parseInt(F)) === "number" && !isNaN(parseInt(F))) {
                const C = (parseInt(F) - 32) * (5/9);
                const fixedC = C.toFixed(4);
                // console.log(C);
                return Number(fixedC);
            }else {
                return (`${JSON.stringify(F)} is not a valid number but a/an ${typeof(F)}`);
            }
        }
        else {
             // console.log(`${F} is not a valid number but a/an ${typeof(F)}`);
             return (`${JSON.stringify(F)} is not a valid number but a/an ${typeof(F)}`);
        }
    }
    else {
        const C = (F - 32) * (5/9);
        const fixedC = C.toFixed(4);
        // console.log(C);
        return Number(fixedC);
    }
    
}
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({"temp": 0}));
console.log(convertFahrToCelsius("first"));
console.log(convertFahrToCelsius(true));


