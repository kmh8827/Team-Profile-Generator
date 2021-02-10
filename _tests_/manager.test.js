const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getName', () => {
        it('Should return the name of an employee', () => {
            const emp = 'Kevin';

            const result = new Manager('Kevin',123,'fake@fake.com',456);

            expect(result).toEqual(emp);
        });
    });

    describe('getId', () => {
        it('Should return the id of an employee', () => {
            const id = 123;

            const result = new Manager('Kevin',123,'fake@fake.com',456);

            expect(result).toEqual(id);
        });
    });

    describe('getEmail', () => {
        const email = 'fake@fake.com';

        const result = new Manager('Kevin',123,'fake@fake.com',456);

        expect(result).toEqual(email);
    });

    describe('getRole', () => {
        it('Should return the role of an employee', () => {
            const role = 'Manager';

            const result = new Manager('Kevin',123,'fake@fake.com',456);

            expect(result).toEqual(role);
        });
    });

    describe('getOfficeNumber', () => {
        it('Shoudl return the office number of a manager', () => {
            const officeNumber = 456;

            const result = new Manager('Kevin',123,'fake@fake.com',456);

            expect(result).toEqual(officeNumber);
        });
    });
});