type User = {
    name: string;
    age: number;
    courses: string[];
};
type Permisson = {
    permissionLevel: string;
};
type UserExtended = Permisson & User;

const user1: UserExtended = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    permissionLevel: 'Instructor',
};
const user2: UserExtended = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
    permissionLevel: 'Student',
};

function printUser(user: UserExtended) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);
    console.log(user.permissionLevel);
    return user;
}
function printUserVerbose(user: User) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);
    // console.log(user.permissionLevel); // property does not exist on type 'User'
    return user;
}
printUser(user1);
printUser(user2);
printUserVerbose(user1);
