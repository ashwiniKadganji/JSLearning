console.log(`---------------------step 1 -----------------`);
//

class Vehicle {
    constructor(brandName,modelName,price,color,weight){
        this.brandName = brandName;
        this.modelName = modelName;
        this.price = price;
        this.color = color;
        this.weight = weight;
    }
}
let VehicleAudi = new Vehicle('Audi','RS Q8',1100000,'Gray','32 tones');
// VehicleAudi.show();

let VehicleMercedes = new Vehicle('Mercedes',' Mercedes-Benz S-class',2000000,'Blue','36 tones');
// VehicleMercedes.show();

let VehicleBMW = new Vehicle('BMW','BMW i7',900000,'Black','30 tones');
// VehicleBMW.show();


let VehicleSuzuki = new Vehicle('Suzuki','Wagon R',1000000,'White','34 tones');


let VehicleMarutiSuzuki = new Vehicle('Maruti Suzuki','Vitara Brezza',900000,'Red','30 tones');

const arrayOfVehicle = [VehicleAudi,VehicleMercedes,VehicleBMW,VehicleSuzuki,VehicleMarutiSuzuki];

console.log(`Traversing array`);
for (const Vehicle of arrayOfVehicle) {
    
    console.log(`Brand Name: ${Vehicle.brandName}, Model Name: ${Vehicle.modelName}, Vehicle Price: ${Vehicle.price}, Vehicle color: ${Vehicle.color},  Weight: ${Vehicle.weight}`);
}

console.log(`---------------------step 2 -----------------`);
class College {
    constructor(cName,Address,pin,city){
        this.CollegeName = cName;
        this.CollegeAddress= Address;
        this.Collegepin = pin;
        this.Collegecity = city;
    }
    display(){
        console.log(`College Name: ${this.CollegeName},
            College Address: ${this.CollegeAddress},
            Pincode: ${this.Collegepin},
            City: ${this.Collegecity} `);
    }
}
let collegeA = new College('COEP College','Pune',123123,'Pune');


let collegeB = new College('Ramkrushna More College','Akurdi',123533,'Nagpur');


let collegeC = new College('Wadiya College','Pune Station',123656,'Nagar');


let collegeD = new College('Dr. Babasaheb Ambedkar College','Aundh',123123,'Pune');

let collegeArray = [collegeA,collegeB,collegeC,collegeD];
console.log(`----Traversing Array------`);

for (const College of collegeArray) {
    College.display();
}



console.log(`---------------------step 3 -----------------`);
function traverseObject(collegeObj) 
{
    for (const key in collegeObj) {
        if (Object.hasOwnProperty.call(collegeObj, key)) 
        {    
            const element = collegeObj[key];
            console.log(`${key} =  ${element}`);
    
        }
    }
    
}
traverseObject(collegeA);
traverseObject(collegeB);
traverseObject(collegeC);
traverseObject(collegeD);

