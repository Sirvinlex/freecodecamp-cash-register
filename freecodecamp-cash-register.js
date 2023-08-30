function checkCashRegister(price, cash, cid) {
  let total = 0;
  let total2 = 0
  
  let change = cash - price;
  let myChange = cash - price;

  let myArr100 = ["HUNDRED", 0]
  let myArr20 = ["TWENTY", 0]
  let myArr10 = ["TEN", 0]
  let myArr5 = ["FIVE", 0]
  let myArr1 = ["ONE", 0]
  let myArrQu = ["QUARTER", 0]
  let myArrDi = ["DIME", 0]
  let myArrNi = ["NICKEL", 0]
  let myArrPe = ["PENNY", 0]

  let penny;
  let nickel;
  let dime;
  let quarter;
  let oneDollar;
  let fiveDollar;
  let tenDollar;
  let twentyDollar;
  let oneHundredDollar;

  cid.map((item) => {
    total += item[1]
    if (item[0] === "PENNY"){
      penny = item[1]
    }
    if (item[0] === "NICKEL"){
      nickel = item[1]
    }
    if (item[0] === "DIME"){
      dime = item[1]
    }
    if (item[0] === "QUARTER"){
      quarter = item[1]
    }
    if (item[0] === "ONE"){
      oneDollar = item[1]
    }
    if (item[0] === "FIVE"){
      fiveDollar = item[1]
    }
    if (item[0] === "TEN"){
      tenDollar = item[1]
    }
    if (item[0] === "TWENTY"){
      twentyDollar = item[1]
    }
    if (item[0] === "ONE HUNDRED"){
      oneHundredDollar = item[1]
    }
  })


while (myChange > 0 && ((myChange >= 100 && oneHundredDollar >= 100))){
    myArr100[1] = myArr100[1] + 100
    myChange = myChange - 100
    oneHundredDollar -= 100
}

while (myChange > 0 && ((myChange >= 20 && (myChange < 100 || oneHundredDollar < 100)) && twentyDollar >= 20)){
    myArr20[1] = myArr20[1] + 20
    myChange = myChange - 20
    twentyDollar -= 20
    myChange = myChange.toFixed(2)
  }
  
while (myChange > 0 && ((myChange >= 10 && (myChange < 20 || twentyDollar < 20)) && tenDollar >= 10)){
    myArr10[1] = myArr10[1] + 10
    myChange = myChange - 10
    tenDollar -= 10
}

while (myChange > 0 && (((myChange >= 5 && (myChange < 10 || tenDollar < 10)) && fiveDollar >= 5))){
    myArr5[1] = myArr5[1] + 5
    myChange = myChange - 5
    fiveDollar -= 5
}
while (myChange > 0 && (((myChange >= 1 && (myChange < 5 || fiveDollar < 5)) && oneDollar >= 1))){
    myArr1[1] = myArr1[1] + 1
    myChange = myChange - 1
    oneDollar -= 1
}
while (myChange > 0 && (((myChange >= 0.25 && (myChange < 1 || oneDollar < 1)) && quarter >= 0.25))){
    myArrQu[1] = myArrQu[1] + 0.25
    myChange = myChange - 0.25
    quarter -= 0.25
}
while(myChange > 0 && (((myChange >= 0.1 && (myChange < 0.25 || quarter < 0.25)) && dime >= 0.1))){
    myArrDi[1] = myArrDi[1] + 0.1
    myChange = myChange - 0.1
    dime -= 0.1
}

while (myChange > 0 && (((myChange >= 0.05 && (myChange < 0.1 || dime < 0.1)) && nickel >= 0.05))){
    myArrNi[1] = myArrNi[1] + 0.05
    myChange = myChange - 0.05
    nickel -= 0.05
}

while (myChange > 0 && (((myChange >= 0.01 && (myChange < 0.05 || nickel < 0.05)) && penny >= 0.01))){
    myArrPe[1] = myArrPe[1] + 0.01
    myChange = myChange - 0.01
    penny -= 0.01
}

let cidArr = [ myArr100, myArr20, myArr10, myArr5, myArr1, myArrQu, myArrDi, myArrNi, myArrPe,] 

let mainCidArr = cidArr.filter((item) => {
  total2 += item[1]
  
  return item[1] !== 0
})

let total3 = total2.toFixed(2)
let mainChange = change.toFixed(2)
console.log(total3)
console.log(mainChange === total3)
  if (total === change){
    console.log({
      status: "CLOSED",
      change: cid
    })
    return {
      status: "CLOSED",
      change: cid
    }
  }
  else if (total < mainChange || mainChange !== total3){
    console.log({status: "INSUFFICIENT_FUNDS", change: []})
    return {
      status: "INSUFFICIENT_FUNDS", change: []
    }
  }
  else{
    console.log({
      status: "OPEN", change: mainCidArr
    })
    return {
      status: "OPEN", change: mainCidArr
    }
  }
  
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

