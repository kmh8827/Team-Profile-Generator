const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getName', () => {
        it('Should return the name of an Employee', () => {
            const emp = 'Kevin';

            const bob = new Intern('Kevin',123,'fake@fake.com','UNC');
            const result = bob.getName();

            expect(result).toEqual(emp);
        });
    });

    describe('getId', () => {
        it('Should return the ID of an Employee', () => {
            const id = 123;

            const bob = new Intern('Kevin',123,'fake@fake.com','UNC');
            const result = bob.getId();

            expect(result).toEqual(id);
        });
    });

    describe('getEmail', () => {
        it('Should return the email of an Employee', () => {
            const email = 'fake@fake.com';

            const bob = new Intern('Kevin',123,'fake@fake.com','UNC');
            const result = bob.getEmail();

            expect(result).toEqual(email);
        });
    });

    describe('getSchool', () => {
        it('Should return the school of an Intern', () => {
            const school = 'UNC';

            const bob = new Intern('Kevin',123,'fake@fake.com','UNC');
            const result = bob.getSchool();

            expect(result).toEqual(school);
        });
    });

    describe('getRole', () => {
        it('Should return the role of an employee', () => {
            const role = 'Intern';

            const bob = new Intern('Kevin',123,'fake@fake.com','UNC');
            const result = bob.getRole();

            expect(result).toEqual(role);
        });
    });
});