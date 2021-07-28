module.exports.getDate = function () {
    let options = {
        "weekday" : 'long',
        "month" : 'long',
        "day" : "numeric"
    }
    let today = new Date();
    let currentDay = today.toLocaleDateString("en-US", options);
    //const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return currentDay;
}
