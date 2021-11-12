// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//Phone number
test('Tests "(925) 355-1999" phone number', () => {
    expect(functions.isPhoneNumber('(925) 354-1999)')).toBe(true);
  });

test('Tests "(481) 388-9900" phone number', () => {
   expect(functions.isPhoneNumber('(481) 388-9900')).toBe(true);
  });

test('Tests "2319482" bad phone number', () => {
    expect(functions.isPhoneNumber('2319482')).toBe(false);
   });

test('Tests "hello" bad phone number', () => {
    expect(functions.isPhoneNumber('hello')).toBe(false);
   });


//Email
test('Tests "myemail@ucsd.edu" email', () => {
    expect(functions.isEmail('myemail@ucsd.edu')).toBe(true);
   });

test('Tests "ilovecs@gmail.com" email', () => {
    expect(functions.isEmail('ilovecs@gmail.com')).toBe(true);
   });

test('Tests "startearly@yahoo" bad email', () => {
    expect(functions.isEmail('startearly@yahoo')).toBe(false);
   });

test('Tests "12345" bad email', () => {
    expect(functions.isEmail('12345')).toBe(false);
   });
  
//Password
test('Tests "November12" password', () => {
    expect(functions.isStrongPassword('November12')).toBe(true);
});

test('Tests "happybirthday" password', () => {
    expect(functions.isStrongPassword('happybirthday')).toBe(true);
});

test('Tests "2cool4school" bad password', () => {
    expect(functions.isStrongPassword('2cool4school')).toBe(false);
});

test('Tests "hi!!!!!!!" bad password', () => {
    expect(functions.isStrongPassword('hi!!!!!!!')).toBe(false);
});


//Date
test('Tests "11/11/2021" date', () => {
    expect(functions.isDate('11/11/2021')).toBe(true);
});

test('Tests "1/1/2000" date', () => {
    expect(functions.isDate('1/1/2000')).toBe(true);
});

test('Tests "1/1/00" bad date', () => {
    expect(functions.isDate('1/1/00')).toBe(false);
});

test('Tests "1989/12/13" bad date', () => {
    expect(functions.isDate('1989/12/13')).toBe(false);
});

//Hex Color
test('Tests "01FA87" hex code', () => {
    expect(functions.isHexColor('01FA87')).toBe(true);
});

test('Tests "D5B" hex code', () => {
    expect(functions.isHexColor('D5B')).toBe(true);
});

test('Tests "G0A529" bad hex code', () => {
    expect(functions.isHexColor('G0A529')).toBe(false);
});

test('Tests "1234567" bad hex code', () => {
    expect(functions.isHexColor('1234567')).toBe(false);
});