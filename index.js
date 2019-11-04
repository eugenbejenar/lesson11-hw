var weekDay = prompt('Please enter Day');
var weekDayLower = weekDay.toLowerCase();
var weekDayResult;

switch (weekDayLower) {
    case 'monday':
        weekDayResult = 'Working day';
        break;

    case 'tuesday':
        weekDayResult = 'Working day';
        break;

    case 'wednesday':
        weekDayResult = 'Working day';
        break;

    case 'thursday':
        weekDayResult = 'Working day';
        break;

    case 'friday':
        weekDayResult = 'Working day';
        break;

    case 'saturday':
        weekDayResult = 'Weekend';
        break;

    case 'sunday':
        weekDayResult = 'Weekend';
        break;

    default:
        weekDayResult = 'Can not define, please try another value';
        break;
}
alert(weekDayResult);

var weekDayIf = prompt('Please enter Day');
var weekDayIfLower = weekDayIf.toLowerCase();


if (weekDayIfLower == 'monday') {
    weekDayResult = 'Working day';
} else if (weekDayIfLower == 'tuesday') {
    weekDayResult = 'Working day';
} else if (weekDayIfLower == 'wednesday') {
    weekDayResult = 'Working day';
} else if (weekDayIfLower == 'thursday') {
    weekDayResult = 'Working day';
} else if (weekDayIfLower == 'friday') {
    weekDayResult = 'Working day';
} else if (weekDayIfLower == 'saturday') {
    weekDayResult = 'Weekend';
} else if (weekDayIfLower == 'sunday') {
    weekDayResult = 'Weekend';
} else {
    weekDayResult = 'Can not define, please try another value';
}
alert(weekDayResult);