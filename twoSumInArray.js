const array = [3,7,11,16,20];
const sumArray = (array, targetOutput) => {
    for (let i = 0; i < array.length;i++){
        for(let j = i+1; j < array.length;j++){
            if (array[i] + array[j] === targetOutput){
                console.log(array[i] + array[j]);
                return [i,j];
            }
        }
    }
}

console.log(sumArray(array,18));