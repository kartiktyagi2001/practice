class Car{
    name;
    color;
    category;

    constructor(rang, categ, naam){
        this.color = rang;
        this.category = categ;
        this.name = naam;


    }

    start() {
        console.log('starting......started');
    }

    stop() {
        console.log('engine turned off');
    }

    categ() {
        console.log(category);
    }
}

let punch = new Car('neela', 'hathi ka bacha', 'mukka');

// punch.name = 'punch';
// punch.color = 'blue';
// punch.category = 'compact SUV';

console.log(punch.color + ' ' + punch.name );
punch.start();
punch.stop();