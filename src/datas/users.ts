export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export const users: User[] = [
    {
        id: 1,
        username: "admin",
        email: "admin@example.com",
        password: "admin123"
    },
    {
        id: 2,
        username: "user",
        email: "user@example.com",
        password: "user123"
    },
    {
        id: 3,
        username: "bibidh",
        email: "bibidh@example.com",
        password: "123456"
    }
];