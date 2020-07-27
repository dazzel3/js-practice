const a = 1;
if (a+1 === 2) {
    console.log('a+1은 2입니다.');
    const a = 2;
    console.log('if문 안의 a값은 '+a);
}
console.log('if문 안의 a값은 '+a);

const b = 10;
if (b > 15) {
    console.log('b가 15보다 큽니다.');
} else {
    console.log('b가 15보다 작습니다.');
}

if (b === 5) {
    console.log('b는 5입니다.');
} else if (b === 10) {
    console.log('b는 10입니다.');
} else {
    console.log('b는 5도 10도 아닙니다.');
}

const device = 'iPhone';

switch (device) {
  case 'iPhone':
    console.log('아이폰');
    break;
  case 'iPad':
    console.log('아이패드');
    break;
  default:
    console.log('모르겠습니다.');
}