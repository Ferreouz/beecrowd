import * as fs from "fs"
/**
 * https://www.beecrowd.com.br/repository/UOJ_2006_en.html
As part of the Ideal Challenge of Pure-Tea Consumers (ICPC), a local TV show is organized. During the show, a full teapot is prepared and five contestants are handed a cup of tea each. The participants must smell, taste and assess the sample so as to identify the tea type, which can be: (1) white tea; (2) green tea; (3) black tea; or (4) herbal tea. At the end, the answers are checked to determine the number of correct guesses.

Given the actual tea type and the answers provided, determine the number of contestants who got the correct answer.

Input
The first line contains an integer T representing the tea type (1 ≤ T ≤ 4). The second line contains five integers A, B, C, D and E, indicating the answer given by each contestant (1 ≤ A, B, C, D, E ≤ 4).

Output
Output a line with an integer representing the number of contestants who got the correct answer.
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