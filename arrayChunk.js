const chunkArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// [[1,2,3,4],[5,6,7,8]]
const arrayChunk = (chunkArray,chunkSize) => {
    const output = [];
    let counter = 0;
    for (let i=0; i<(parseInt(chunkArray.length/chunkSize)); i++) {
        let innerChunk = [];
        for (let j=0; j<chunkSize;j++){
            innerChunk.push(chunkArray[counter]);
            counter++;
        }
        output.push(innerChunk);
    }
    return output;
}
console.log(arrayChunk(chunkArray,2));

//  [[1,2,3,4],[5,6,7,8],[9]]while loop with remaining chunks in seperate block
const arrayChunkInWhile = (chunkArray,chunkSize) => {
    let output = [];
    let index = 0;
    while(index < chunkArray.length){
        const chunk = chunkArray.slice(index,index+chunkSize);
        output.push(chunk);
        index += chunkSize;
    }
    return output
}
console.log(arrayChunkInWhile(chunkArray,2));
