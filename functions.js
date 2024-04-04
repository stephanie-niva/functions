//Q1
function makeChange(){
    let names= ['steve','Amos','Andrew']
    let newArray = [];
    names.forEach(x=>{
        if(x[0]=='A'|| x[0]=='a'){
            let word = x.split(" ").reverse().join();
            newArray.push(word);
        }
        else{
             word = x.split(" ").sort().join();
            newArray.push(word);
        }

        })
        console.log(newArray)
}
console.log(makeChange())


//Q2
function determine(){
    let arrNums=[20,3,6,-9,8.-10,0,4]
    let newArrNum=[]
    arrNums.forEach(num=>{
        if (num>0){
            let result="positive"
            newArrNum.push(result)
        }
        else if (num<0){
            result="negative"
            newArrNum.push(result)
        }
        else{
            result="zero"
            newArrNum.push(result)
        }
    })
    return newArrNum


}
console.log(determine())

//Q3
function sortedList(){
    let arrEmployees=[
    {name:"Lexi",id:123456789,salary:300000},
    {name:'Jesse',id:679120,salary:20000},
    {name:"William",id:37885880,salary:15000}]
    return arrEmployees.sort((a,b)=> a.salary-b.salary)
}
console.log(sortedList())



//Q4
const nums = [20,10,9,8,5,10]

function multiply(nums){
    let newNumbers=[];
    nums.forEach(number =>{
       console.log(number*2);
    })
}
multiply(nums)

//Q5
function array(items){
    let newValue= items.slice(0,4)
    let value2= items.slice(-2)
    newValue.forEach(i=>{
        console.log(i*8);

    })
    value2.forEach(i=>{
        console.log(i+5)
    })
}
array([20,6,7,10,11,9,12,15])
