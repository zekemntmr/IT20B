class Array{
    
    constructor(initialData = []){
        this.data = {};
        this.length = 0;

        for(let i=0; i<initialData; i++){
            this.data[i] = initialData[i];
            this.length++;




        }
    }

    traverse(){
        let output = "";

        for(let i=0;i<this.length; i++){
            output += this.data + "";
        }
        console.log(output);
    }
    insert(index,element){
        //Correcting Statement
        if(index<0 || index > this.length){
            console.log("Invalid Index");
            return;
        }

        //Shifting Condition
        for(let i = this.length; i > index; i--){
            this.data[i] = this.data[i-1];
        }

        //After Condition
        this.data[index] = element;
        this.length++;

    }
}

arr1 = new Array9[4,3,2];

arr1.traverse();
arr1.insert(0,9);
arr1.traverse();