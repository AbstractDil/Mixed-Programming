const num = 97;
let isPrime = true;

// check if number is equal to 1

if(num===1){
    console.log("1 is neither prime nor composite number.");
}
else if(num>1){

    // looping through 2 to number-1

    for(let i=2; i<num; i++){
        if(num%i==0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(`${num} is a prime number`);
    }
    else{
        console.log(`${num} is a not prime number`);
    }

}