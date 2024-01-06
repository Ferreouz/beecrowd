import * as fs from "fs"
/**
* Challenge: https://www.beecrowd.com.br/repository/UOJ_3369.html 
*/
function checkAcronym(words: string[],  currentIndex: number = 0): string{
    if(currentIndex >= words.length){
        return "N";
    }
    
    let word = words[currentIndex];
    let currentLetter = word[0];
    const wordLen = word.length;
    
    for (let index = 0; index < wordLen; index++) {
        for (let j = 0; j < words.length; j++) {
            if(currentLetter === words[j][0]){
                 word = word.slice(1);
                 if(word.length === 0){
                     return "Y";
                 }else{
                    currentLetter = word[0];
                 }
            }
        }
    }
   return checkAcronym(words, currentIndex + 1) 
}

export default function KIARA(words: string[]): string{
    return checkAcronym(words);
}

const content = fs.readFileSync('/dev/stdin', 'utf-8'), lines = content.split("\n");

const words: string[] = []

for (let index = 1; index < lines.length; index++) {
    words.push(lines[index]);
}

console.log(KIARA(words));