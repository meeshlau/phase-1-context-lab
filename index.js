/* Your Code Here */
function createEmployeeRecord(empArr) {
    return {
        firstName: empArr[0],
        familyName: empArr[1],
        title: empArr[2],
        payPerHour: empArr[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(empArr) {
    return empArr.map(rec => createEmployeeRecord(rec))
}

function createTimeInEvent(dateStamp) {
    const dateArr = dateStamp.split(" ")
    const date = dateArr[0]
    const hour = dateArr[1]
    const timeInObj = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date,
    }
    this.timeInEvents.push(timeInObj)
    return this
}

function createTimeOutEvent(dateStamp) {
    const dateArr = dateStamp.split(" ")
    const date = dateArr[0]
    const hour = dateArr[1]
    const timeOutObj = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date,
    }
    this.timeOutEvents.push(timeOutObj)
    return this
}

function hoursWorkedOnDate(targetDate) {
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === targetDate)
    const outEvent = this.timeOutEvents.find(outEvent => outEvent.date === targetDate)
    return parseInt(outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(targetDate) {
    return hoursWorkedOnDate.call(this, targetDate) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName) {
    const findFirstName = srcArray.find(firstName => firstName)
    return findFirstName
}

function calculatePayroll(empArr) {
    return empArr.reduce((total, rec) => {
        return total + allWagesFor.call(rec)
    }, 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

