import numeral from "numeral";



export default function formatNumber(number:number, type: "currency") {

    const newNumber = numeral(number);

    if (type === "currency") {
        return newNumber.format("0,0.00");
    }
}
