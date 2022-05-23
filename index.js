// Your code here
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = function (arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents:[],
        timeOutEvents:[]
    };
};

const createEmployeeRecords = (arrs) => arrs.map(rec=>createEmployeeRecord(rec));


const createTimeInEvent = function (datestamp){
    let [date, hour] = datestamp.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    });
    return this  
};

const createTimeOutEvent = function (datestamp){
    let [date, hour] = datestamp.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    });
    return this  
};

const hoursWorkedOnDate = function (date){
    const inEvent = this.timeInEvents.find(inEvent=>inEvent.date === date);
    const outEvent = this.timeOutEvents.find(outEvent=>outEvent.date === date);
            return ((outEvent.hour - inEvent.hour)/100)
};

const wagesEarnedOnDate = function (date){
    return hoursWorkedOnDate.apply(this, [date])* this.payPerHour
};

const findEmployeeByFirstName = function (srcArray, targetName){
    for(let i=0; i<srcArray.length;i++){
        if(srcArray[i].firstName===targetName){
            return srcArray[i]
        }}
};

const calculatePayroll = function(recsArray){
    let payroll = []
    recsArray.forEach(element => payroll.push(allWagesFor.call(element)))
    return payroll.reduce((a,b)=>{return a+b})
}
