const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it('Should return the name of an employee', () => {
            const emp = 'Kevin';

            const result = new Employee('Kevin',123,'fake@fake.com').getName();

            expect(result).toEqual(emp);
        });
    });

    describe('getId', () => {
        it('Should return the ID of an employee', () => {
            const id = 123;

            const result = new Employee('Kevin',123,'fake@fake.com').getId();

            expect(result).toEqual(id);
        });
    });

    describe('getEmail', () => {
        it('Should return the email adress of an employee', () => {
            const email = 'fake@fake.com';

            const result = new Employee('Kevin',123,'fake@fake.com').getEmail();

            expect(result).toEqual(email);
        });
    });

    describe('getRole', () => {
        it('Should return the role of an employee', () => {
            const role = 'Employee';

            const result = new Employee('Kevin',123,'fake@fake.com').getRole();

            expect(result).toEqual(role);
        });
    });
});