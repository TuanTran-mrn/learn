var myDog = {
    name: 'Key',
    weight: 30,
    age: '2',
    bark: function(sound){
        console.log(sound, ', my name is', this.name);
    },
    eat: function(bone){
        this.weight = this.weight + bone.weight;
        return this;
    }
};

console.log(myDog.bark('gau gau'));

console.log('before eating ', myDog.weight);
myDog.eat({ weight: 1 });
console.log('after eating',myDog.weight);