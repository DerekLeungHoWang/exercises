var personDetail = {
  name: 'Sam',
  programmingLevel: 'Master'
}

var classes = [
  {
    name: 'FTSE',
    instructor: 'Sam'
  },
  {
    name: 'FTDS',
    instructor: 'Jyoti'
  }
]

var venues = [
  {
    name: 'RM1',
    className: 'FTSE'
  },
  {
    name: 'RM2',
    className: 'FTDS'
  }
]

let getPersonName = async function(personDetail){
    return new Promise((resolve,reject)=>{
        console.log("requesting person information");
        
        setTimeout(() => {
            resolve(personDetail)
        }, 1500);
        
    })
};

let getClassName = async function(classes){
    return new Promise((resolve,reject)=>{
    console.log("requesting class information");
        setTimeout(() => {
             resolve(classes)
        }, 1500);
       
    });
};

let getVenue = async function(venues){
    return new Promise((resolve,reject)=>{
    console.log("requesting venue information");
        setTimeout(() => {
           resolve(venues) 
        }, 1500);
        
    })
}

getPersonName(personDetail).then((data) => {
    console.log("The name is ",data)
     return getClassName(classes); 
}).then((dataClasses) =>{
    console.log("the class is : " + dataClasses[0].name);
    return getVenue(venues)
}).then((dataVenues)=>{
    console.log("the venue is : " + dataVenues[0].name);
})
.catch(() => {
    console.log('An error occurred');
});
