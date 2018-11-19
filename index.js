// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
 return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers,revenue){
  return driversWithRevenueOver(drivers, revenue).map(function (driver){
    return driver.name;
  });
}


function exactMatch(drivers, object){
  return drivers.filter(function (driver){
    let match;
     for (const key in object) {
      match = object[key] === driver[key];
    }
      return match;
  });
// order of keys doesn't matter
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function (driver){
    return driver.name;
  });

}
