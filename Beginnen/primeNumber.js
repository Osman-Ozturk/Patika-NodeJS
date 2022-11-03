const argumnets =process.argv.slice(2);
const showPrimeNumber = (lownumber,highnumber) =>{
        for (let i = lownumber; i <= highnumber; i++) {
                let isPrime = true ;
                for (let j = 2; j <= i; j++) {
                        if (i % j === 0 && j !== i) {
                                isPrime=false
                        }
                        
                }
                if (isPrime) {
                        console.log(i);
                }
                
        }
}
showPrimeNumber((argumnets[0])*1,(argumnets[1])*1)
//console.log(process.argv.slice(2));