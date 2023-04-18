function count(array: Array<number>, number: number) {
    let count = 0;
    array.forEach(i => {
        if (i === number){
            count++;
        }
    })
    return count;
}

let arr = [1,2,3,3,3,4,5,6,7,8];
let number = 3;
console.log(count(arr,number))