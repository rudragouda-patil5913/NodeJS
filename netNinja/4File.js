const fs = require("fs");

//reading files
//readFile,writeFile is asynchronous function
// fs.readFile('./docs/data.txt',(err,data)=>{
//     if(err) return err;
//     console.log(data.toString());//only data will give us buffer code
// })

// console.log("after ReadFile");

// writing files

// fs.writeFile("./docs/data.txt",'hello bro',()=>{
//     console.log("file written");
// });

// // if doc is not present it creates new one and add value to it;
// fs.writeFile("./docs/data1.txt","Hey yaaro ninu",()=>{
//     console.log("file written");
// })

// console.log("After Write");

// directories creating and deleting

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) return err;
    console.log("Folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) return err;
    console.log("File deleted");
  });
}
