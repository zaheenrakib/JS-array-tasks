function monthOfyear(month){
    switch (month){
        case "January":
        case "February":
        case "March":
        case "April":
        case "May":
        case "June":
        case "July":
        case "August":
        case "September":
        case "October":
        case "November":
        case "December":
            console.log(`${month} is a month of the year`)
            break;
        default:
            console.log(`${month} is not a month of the year`)
    }
}

monthOfyear("November");