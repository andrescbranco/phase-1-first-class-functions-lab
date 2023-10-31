// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    const newArray = [...array.slice(0,2)]
    return newArray
}

const returnLastTwoDrivers = function (array) {
    const newArray = array.slice(-2)
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiple) {
    return function (fare) {
       return fare*multiple
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}
    
function selectDifferentDrivers(array, func) {
    return func(array)
   
}
