const user1 = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
};

const user2 = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
};

function printUser(user: {
    name: string;
    age: number;
    courses: string[]
}) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);

    return user;
}

printUser(user1);
printUser(user2);
