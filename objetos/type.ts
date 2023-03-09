(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;

    }

    let flas: Hero  = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    }
    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [ 1 ],
        getName() {
            return this.name;
        }
    }


    // flash = {
    //     name: 'Clark Kent',
    //     // age: 60,
    //     powers: ['Super Fuerza'],
    //     getName(){
    //         return this.name;
    //     }        
    // }

    // console.log( flash.getName() )

})()