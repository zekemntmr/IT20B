/*
output = "";

for(i=1;i<=5;i++){
    sum = 6 * i;
    output += i + "";
    console.log(output);
}


 for(i=1;i<6;i++){
    if(i/2){
        console.log("an even number");
    }
    else if(i = 7){
        break;
    }else{
        console.log("odd number");
    }
}

reverse = "";

str = "BaiNaBai";

for (i=str.length-1; i >= 0; i--){
    reverse += str[i];
}

console.log(reverse)

*/


output = "";
arr = [4,2,3,5,7,9];

for(i=0;i<arr.length;i++){
    output += arr[i] + " ";

    prod = 2 * arr[i];
    console.log(prod);
}
console.log(output)