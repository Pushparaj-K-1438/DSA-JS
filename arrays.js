class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(value){
        this.data[this.length] = value;
        this.length++;
        return this.data;
    }
    get(index){
        return this.data[index];
    }
    pop(){
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }
    shift(){
        // const firstItem = this.data[0];
        for(let i=0; i<this.length; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return this.data
    }
    deleteByIndex(index){
        for(let i=index; i<this.length-1;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }
    unshift(value){
        for(let i=this.length-1; i>=0; i--){
            this.data[i+1] = this.data[i];
        }
        this.data[0] = value;
        this.length++;
        return this.data;
    }

    insertByIndex(index,value){
        for(let i=this.length-1; i>=index; i--){
            this.data[i+1] = this.data[i];
        }
        this.data[index] = value;
        this.length++;
        return this.data;
    }

}

const myNewArray = new MyArray();
myNewArray.push('Pushparaj');
myNewArray.push('Sanjuraj');
myNewArray.push('Pressi');
myNewArray.push('Devaraj');
myNewArray.push('Thapal');
console.log(myNewArray);
console.log(myNewArray.get(1));
console.log(myNewArray.pop());
console.log(myNewArray.shift());
console.log(myNewArray.deleteByIndex(1));
console.log(myNewArray.unshift('Prasad'));
console.log(myNewArray.insertByIndex(3,'govind'));