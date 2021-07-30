import numeral from "numeral"

export default function formatNumber(number, type){

    if(!type){
        throw new Error("You must pass a value to parameter 'type'")
    }

    if((typeof type) !== "string"){
        throw new Error("Paramater 'type' must be a string")
    }

    number = numeral(number)

    if(type === "currency"){
        return number.format('0,0.00')
    }

}