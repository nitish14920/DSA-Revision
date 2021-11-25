function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    var t = Number(newInput[0])
    
    for(let i=1;i<=t;i++){
        var data = newInput[i]
        var ans = []
        
        for(let j=0;j<data.length;j++){
            if(data[j]=="#"){
                ans.pop()
            }
            else{
                ans.push(data[j])
            }
        }
        console.log(ans.join(""))
    }
  
    
  }
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
