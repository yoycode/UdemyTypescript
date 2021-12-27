interface UserInterface {
    name: string;
    age: number;
    courses: string[];
}

const user1: UserInterface = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
};

const user2: UserInterface = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
};

function printUser(user: UserInterface) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);

    return user;
}

printUser(user1);
printUser(user2);