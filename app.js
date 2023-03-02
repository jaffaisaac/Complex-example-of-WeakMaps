class person{
    constructor(name,age){
        this._name =name;
        this._age =age;
    }

}
const personalData =new WeakMap();



//this is take two value first object key  and value in this case is the data passes to it
function setPersonalData(person,data){
    return personalData.set(person,data)
}

//this return object value from the weakMap 
function getPersonalData(person){
    return personalData.get(person);
}

//here am to create instance of the  person class

const personA = new person('Alice',20);
const personB = new person('Joy',18);

//here is when to use weakMaps
// so here am going to add more data information  to  personA and PersonB 
setPersonalData(personA,{school:"KIU", FavourletColor:"WebGL2RenderingContext", TopMarks:[90,80,70,60]})
setPersonalData(personB,{food:"matoke",game:"footBall"})

console.log(getPersonalData(personA))
console.log(getPersonalData(personB));

