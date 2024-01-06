import * as fs from "fs"
/**
* Challenge: https://www.beecrowd.com.br/repository/UOJ_2006_en.html
*/
type Tea = "1"|"2"|"3"|"4"

function IdentifyingTea(contestantGuess: Tea[], tea: Tea):number {
    let count = 0;
    
    for(let i=0; i<contestantGuess.length; i++){
        if(contestantGuess[i] === tea){
            count ++;
        }
    }
    return count;
}
const content = fs.readFileSync('/dev/stdin', 'utf-8')
const lines = content.split("\n")

const tea = lines[0] as Tea;
const guesses = lines[1].split(' ') as Tea[];
console.log(IdentifyingTea(guesses, tea));