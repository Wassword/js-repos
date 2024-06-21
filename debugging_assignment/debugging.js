const storeOwners = [
{
    name: 'charles',
    stores: 1,
    location: "AZ",
},
{
    name: 'sally',
    stores: 1,
    location: "NM",
},
{
    name: 'cassandra',
    stores: 1,
    location: "NM",
},
{
    name: 'Danny Shavez',
    stores: 1,
    location: "NM",
},
];

const listNumberOfStores = function () {
    let totalLocations = 0; //initializaion of total locations
    for (let i = 0; i < storeOwners.length; i++) {
        totalLocations += storeOwners[i].stores;
    }
    return totalLocations; //total number of stores
};

let locations = listNumberOfStores(); // calling function

function tellMeMyStores() {
    console.log('Hey, can you tell me who owns the stores?');
}
function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
    let person = storeOwners[i].name;  //property access
    let location = storeOwners[i].location;
    if (person === 'Danny Shavez') {
        console.log(`Yes, ${person} that lives in ${location} owns one too.`);
    } else {
    console.log(`Yes, ${person} has one`);
    }

    }
    }


tellMeMyStores();
hasStore();