var coffeeMachine = {
    makeCoffee: function(onFinish){
        console.log('making coffee...');
        onFinish();
    }
};

var ring = function(sound){
    console.log(sound);
}

coffeeMachine.makeCoffee(ring('titit'));