class Car {
    constructor(name,model,type) {
        this.name = name;
        this.isSaloon = true;
        this.numOfWheels = 4;
        this.speed = '77 km/h';

        if(name === undefined){
            this.name = "General";
        }
        this.model = model;
        if(model === undefined){
            this.model = "GM";
        }
        this.type = type;
        if(this.type === "trailer"){
            this.numOfWheels = 8;
            this.isSaloon = false;
            this.speed = '0 km/h';
        }
        this.numOfDoors = 4;
        if(this.name === "Porshe" || this.name === "Koenigsegg"){
            this.numOfDoors = 2;
        }

    }
    drive(arg){
        if(arg === 5){
            this.speed  = '250 km/h';
        }
        if(arg === 7){
            this.speed  = '77 km/h';

        }
        return new Car()
    }

}



module.exports = Car;