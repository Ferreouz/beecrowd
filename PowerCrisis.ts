import * as fs from "fs"
/**
* Challenge: https://www.beecrowd.com.br/repository/UOJ_1031_en.html?origem=1
*/
const Wellington = 13;
function PowerGrid(n: number): number{
    const regions: number[] = [];
    for (let index = 1; index <= n; index++) {
        regions.push(index);
    }
    let jump  = 1;
    while(1){
        //deep copy needed
        if(turnOff(regions.map((region) => region), jump, 0, 0) == Wellington){
            break;
        }
        jump++;
        
    }
    return jump;
}

function turnOff( regions: number[], jump: number,  current: number, lastRemovedItem: number): number{

    if(regions.length === 0){
        return lastRemovedItem;
        
    }
    if(current >= regions.length){
        current = current % regions.length;
    }

    if(regions[current]){
        lastRemovedItem = regions.splice(current, 1)[0]
    }

    return turnOff( regions, jump, current + jump - 1, lastRemovedItem  );
}

const content = fs.readFileSync('/dev/stdin', 'utf-8'), lines = content.split("\n");

lines.forEach((line)=> {
    if(Number(line) === 0 ){
        process.exit()
    }
    console.log(PowerGrid(Number(line)))    
})
