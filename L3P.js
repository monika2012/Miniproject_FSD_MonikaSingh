const fsPro= require("fs/promises");
const readDataFile =async()=>{
    try{
        const res=await fsPro.readFile("./dumy.txt","utf-8");
        console.log(res);}
        catch{ console.log("Error!!!!!");}
};
console.log("start");
readDataFile();
console.log("middle");
readDataFile();
console.log("end");
readDataFile();
