const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        it('Should return the name of an employee', () => {
            const emp = 'Kevin';

            const result = new Engineer('Kevin',123,'fake@fake.com','fake');

            expect(result).toEqual(emp);
        });
    });

    describe('getId', () => {
        it('Should return the id of an employee', () => {
            const id = 123;

            const result = new Engineer('Kevin',123,'fake@fake.com','fake');

            expect(result).toEqual(id);
        })
    });

    describe('getEmail', () => {
        it('Should return the email fo an employee', () => {
            const email = 'fake@fake.com';

            const result = new Engineer('Kevin',123,'fake@fake.com','fake');

            expect(result).toEqual(email);
        })
    });

    describe('getRole', () => {
        it('Should return the role of an employee', () => {
            const role = 'Engineer';

            const result = new Engineer('Kevin',123,'fake@fake.com','fake');

            expect(result).toEqual(role);
        })
    });

    describe('getGithub', () => {
        it('Should return the github of an employee', () => {
            const github = 'fake';

            const result = new Engineer('Kevin',123,'fake@fake.com','fake');

            expect(result).toEqual(github);
        })
    });

});