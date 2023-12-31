import * as fs from "fs"
/**
* https://www.beecrowd.com.br/repository/UOJ_1031_en.html?origem=1

The country was divided up into N regions (Auckland was region number 1, and Wellington number 13). A number, m, would be picked `at random', and the power would first be turned off in region 1 (clearly the fairest starting point) and then in every m'th region after that, wrapping around to 1 after N, and ignoring regions already turned off. For example, if N = 17 and m = 5, power would be turned off to the regions in the order: 1,6,11,16,5,12,2,9,17,10,4,15,14,3,8,13,7.

The problem is that it is clearly fairest to turn off the region of Wellington by last(after all, that is where the Electricity headquarters are), so for a given N, the `random' number m needs to be carefully chosen so that region 13 is the last region selected.

Write a program that will read in the number of regions and then determine the smallest number m that will ensure that Wellington (region 13) can function while the rest of the country is blacked out.

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
