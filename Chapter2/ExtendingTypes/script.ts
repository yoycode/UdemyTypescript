interface User {
    name: string;
    age: number;
    courses: string[];
}
interface UserExtended extends User {  // 여기에 User랑 똑같은 속성 또 작성할경우 overwrite됨
    permissionLevel: string;
}

const user1: UserExtended = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    permissionLevel: 'Instructor',   // 하나라도 없을 경우 Property 'permissionLevel' is missing
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
    return user;
}

printUser(user1);
