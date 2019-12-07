let arr = [3,8,1001,8,10,8,105,1,0,0,21,46,67,76,101,118,199,280,361,442,99999,3,9,1002,9,4,9,1001,9,2,9,102,3,9,9,101,3,9,9,102,2,9,9,4,9,99,3,9,1001,9,3,9,102,2,9,9,1001,9,2,9,1002,9,3,9,4,9,99,3,9,101,3,9,9,4,9,99,3,9,1001,9,2,9,1002,9,5,9,101,5,9,9,1002,9,4,9,101,5,9,9,4,9,99,3,9,102,2,9,9,1001,9,5,9,102,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,99];
let permuts = [];
for (let a=0;a<5;a++){for (let b=0;b<5;b++){for (let c=0;c<5;c++){for (let d=0;d<5;d++){for (let e=0;e<5;e++){
    if (a != b && a != c && a != d && a != e && b != c && b != d && b != e && c != d && c != e && d != e) permuts.push([a, b, c, d, e]);
}}}}} //yeah, cool way to do it, eh?
let thrusters = [];
for (let i=0;i<permuts.length;i++){
    let a = intcode([permuts[i][0], 0]);
    let b = intcode([permuts[i][1], a]);
    let c = intcode([permuts[i][2], b]);
    let d = intcode([permuts[i][3], c]);
    let e = intcode([permuts[i][4], d]);
    thrusters.push(parseInt(e));
}
console.log(Math.max(...thrusters));
function intcode(input){
    let asd = 0; //pointer
    let res;
    while (true){
        let opc = arr[asd]%100;
        let x1 = parseInt(arr[asd].toString().split('').reverse()[2])==1?arr[asd+1]:arr[arr[asd+1]];
        let x2 = parseInt(arr[asd].toString().split('').reverse()[3])==1?arr[asd+2]:arr[arr[asd+2]];
        switch(opc){
            case 1:
                arr[arr[asd+3]] = x1 + x2;
                asd += 4;
                break;
            case 2:
                arr[arr[asd+3]] = x1 * x2;
                asd += 4;
                break;
            case 3:
                arr[arr[asd+1]] = input.shift();
                asd += 2;
                break;
            case 4:
                // console.log(x1); //we don't need this today
                res = x1;
                asd += 2;
                break;
            case 5:
                if (x1 != 0) asd = x2;
                else asd += 3;
                break;
            case 6:
                if (x1 == 0) asd = x2;
                else asd += 3;
                break;
            case 7:
                arr[arr[asd+3]] = (x1 < x2)?1:0;
                asd += 4;
                break;
            case 8:
                arr[arr[asd+3]] = (x1 == x2)?1:0;
                asd += 4;
                break;
            case 99: return res;
        }
    }
}