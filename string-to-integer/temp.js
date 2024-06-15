function foo(number){
    if(number === 2) return;

    for(let i = 0 ; i < 2; i++){
        console.log(i);

        foo(number +1);

    }
}

foo(0);
