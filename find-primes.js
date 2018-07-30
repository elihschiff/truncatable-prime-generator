var primes = [2] //This array contains a list of all normal primes that have been generated so far ordered by smallest to largest. I could just import a list but this is more fun. You can add primes to the list by calling addPrimesToList()
var largestNumberChecked = 2;

var truncatablePrimes = []



function addPrimesToList(maxNumberToCheck){//addes primes to the list of primes. You must pass it the largest number you want it to check when finding primes
	for(var i=largestNumberChecked+1;i<=maxNumberToCheck;i++){//loops starting at the largestNumberChecked and checks every number to see if it is prime
		for(var j=0;j<primes.length;j++){
			if(primes[j]<=Math.sqrt(i)){//only need to check to square root of a number to see if it is prime
				if(Number.isInteger(i/primes[j])){
					break
				}
			}else{
				primes.push(i)
				// console.log(i)
				break
			}
		}
		largestNumberChecked = i
	}
}


function getTruncatedPrime(basePrime, lengthToCheck){//baseprime is a know truncatable prime or 0. length is the length of the longest truncatable prime you want to find or -1 to find them all
	for(var i=0;i<10;i++){
		numberToCheck = parseInt(basePrime + "" + i)
		// console.log(parseInt(basePrime + "" + i))

		addPrimesToList(numberToCheck)


		if(primes.includes(numberToCheck)){
			console.log("New Truncatable Prime: " + numberToCheck) 
			truncatablePrimes.push(numberToCheck)


			if(numberToCheck.toString().length<lengthToCheck || lengthToCheck == -1){
				// console.log()
				getTruncatedPrime(numberToCheck,lengthToCheck)

			}
		}




	}

}

function run(lengthToCheck){
	primes = [2] 
	largestNumberChecked = 2;
	truncatablePrimes = []


	getTruncatedPrime(0, lengthToCheck)

	truncatablePrimes.sort(function(a, b){return a - b});//sorts the array of truncatable primes becasue my function does not put them in order
	console.log(truncatablePrimes)
}