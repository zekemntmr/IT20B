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
}

arr1 = new Array9[4,3,2];

arr1.traverse();