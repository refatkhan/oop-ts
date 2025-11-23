//oop class-object 

// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string,
//         sound: string
//     ) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }


// }
// const dog = new Animal('nais', 'dog', 'gheu ghew')

//parameter properties 


class Animal {
  
    constructor(public name: string, public species: string,
       public sound: string
    ) {
        
    }
}
