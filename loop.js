function odd() {
    for (i = 1; i < 20; i++) {
        if (!(i % 2 === 0)) {
            console.log(i);
        }
    }
}
function dec3() {
    for (i = 100; i > 1; i -= 3) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
function check(){
    var arr = [4, 2.5, 1, -0.5, -2, -3.5]
    for(i=0; i<arr.length; i++){
        console.log(arr[i]);
    }

}
function sigma(){
    var x = 0;
    for(i=1; i<=100; i++){
        x += i
    }
    console.log(x);
} 
function prod(){
    var x = 1;
    for(i=1; i<=12; i++){
        x = x*i
    }
    console.log(x);
} 
/*
odd();
dec3();
check();
sigma();
*/
prod();




