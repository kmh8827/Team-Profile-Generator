const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        it('Should return the name of an employee', () => {
            const emp = 'Kevin';

            const bob = new Engineer('Kevin',123,'fake@fake.com','fake');
            const result = bob.getName();

            expect(result).toEqual(emp);
        });
    });

    describe('getId', () => {
        it('Should return the id of an employee', () => {
            const id = 123;

            const bob = new Engineer('Kevin',123,'fake@fake.com','fake');
            const result = bob.getId();

            expect(result).toEqual(id);
        });
    });

    describe('getEmail', () => {
        it('Should return the email fo an employee', () => {
            const email = 'fake@fake.com';

            const bob = new Engineer('Kevin',123,'fake@fake.com','fake');
            const result = bob.getEmail();

            expect(result).toEqual(email);
        });
    });

    describe('getRole', () => {
        it('Should return the role of an employee', () => {
            const role = 'Engineer';

            const bob = new Engineer('Kevin',123,'fake@fake.com','fake');
            const result = bob.getRole();

            expect(result).toEqual(role);
        });
    });

    describe('getGithub', () => {
        it('Should return the github of an employee', () => {
            const github = 'fake';

            const bob = new Engineer('Kevin',123,'fake@fake.com','fake');
            const result = bob.getGithub();

            expect(result).toEqual(github);
        });
    });

});