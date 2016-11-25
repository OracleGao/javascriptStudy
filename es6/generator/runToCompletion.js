//javascript is single thread program

setTimeout(function(){
    //can be executed after foo() return
    console.log("Hello World");

},1);

function foo() {
    // NOTE: don't ever do crazy long-running loops like this
    for (var i=0; i<=1E5; i++) {
        console.log(i);
    }
}
foo();

