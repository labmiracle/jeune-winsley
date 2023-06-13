/*

Escribe una función recursivasum(arr, n)que retorne la suma de los primeros n elementos
 del arreglo arr function 
sum(arr, n) { }
 */

let sum=(arr,n)=>{
    if (n<=0 || arr.length==0){
        return "Si no puedes entrar algo valido anda pa alla !!!";
    }
    return sum(arr,n-1)+arr[n-1];

}

//console.log(sum([1,2,3,4,5],3));
// console.log(sum([1,2,3,4,5],0));
//console.log(sum([],3));