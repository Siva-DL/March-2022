const _today = new Date();

const day = _today.getDay();
const dayString = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(dayString[day]);

const _mnt = _today.getMonth() + 1;
console.log(_today.getDate() + "/" + _mnt + "/" + _today.getFullYear());
console.log(_today.getMonth() + 1);
console.log(_today.getFullYear());

console.log(_today.getTime());
