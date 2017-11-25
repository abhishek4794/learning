let value = 13

let coins = [7, 2, 3, 6]

start(value, coins)

function start(value, coins) {
    console.log(value, coins)
    let T = []
    let R = []
    T[0] = 0
    R[0] = -1
    for (var k = 1; k <= value; k++) {
        T[k] = Infinity
        R[k] = -1
    }

    console.log(T, R)
    for (var j = 0; j < coins.length; j++) {
        console.log(coins[j])
        for (var i = 1; i <= value; i++) {

            if (1 + T[i - coins[j]] < T[i]) {
                T[i] = findMin(T[i], 1 + T[i - coins[j]])
                R[i] = j
            }

        }
    }
    console.log('R ---->',R)
    console.log(T)
	
    let coinUsed = findUsedCoins(value,R,coins,[])
	console.log(coinUsed,'<--------- coinUsed')
}

function findMin(a, b) {
    let min = (a > b) ? b : a
    return min
}

function findUsedCoins(value, r,coins,coinUsed) {

    if (value === 0) {
        return coinUsed
    } else {
		
		coinUsed.push(coins[r[value]])
		value = value - coins[r[value]]
		return findUsedCoins(value , r, coins,coinUsed)
    }

}
