//task 1
function arr(hanma, callback){
    console.log(callback(hanma))
}
arr(74678, (hanma) => {
    return hanma
})
}))
//task 2
function hanma(num,callback){
    (callback(num))


}
hanma(89723895,(num) => {
    console.log( num )
})
})
// task 3
function filt(arr, callback) {
    let hanma = []

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            hanma.push(arr[i])
        }
    }

    return hanma
}

const array = [44, 12, -128, 89, -77, 8756747578567465456]

const num = filt(array, x => x > 0)

console.log(num)
// task 4

const mep = meps([12,45,77,98,34,32], (item) => {
    return item + 2;
});
console.log(mep);