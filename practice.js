// console.log("manisha")
// let arr=["jgf","jbj","rdr"]
// console.log(arr)
// arr.push("ma")
// console.log(arr)
// let kkk="nhm"
// arr.push(kkk)
// console.log("this is line no 8",arr)
// arr.pop()
// console.log(arr)
// console.log(arr.length)
// function test(){
//     console.log()
// }
// let abhi=function test(){
//     console.log()
// }
// let abhishek=()=>{
//     console.log()
// }
// let mk=()=>{
//     console.log()
// }
// let nk=document.getElementById("add")
// nk.addEventListener("click",()=>{
//     console.log("abhi")
// })
// document.getElementById("key").addEventListener("keyup",()=>{
//     console.log("ybyvb")
// })
// document.getElementById("key").addEventListener("keydowm",()=>{
//     console.log("ybb")
// })
// const op= document.getElementById("output")
// document.getElementById("key").addEventListener("input",(event) =>{
   
//    op.textcontent="current input:"+ event. target.value;
//    console.log(op)
// })

const outputElement = document.getElementById("output");
const inputElement = document.getElementById("textInput");

// Listen for the 'input' event on the input element
inputElement.addEventListener("input", (event) => {
   // Update the text content of the output element with the current input value
   outputElement.textContent = "Current input: " + event.target.value;
   console.log("Current input value:", event.target.value); // Log the value to the console
});


