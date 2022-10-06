export function fact(n: number){
    let fact = 1;
    if(n > 16 || n < 0){
        fact = 0;
    }else{
        for(let i = 0; i < n; i++){
            fact = fact * (i+1);
        }
    }

    return fact;
}