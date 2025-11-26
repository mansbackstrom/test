/**
 * 
 * @author Måns Bäckström
 * 
 * @file page.tsx
 * 
 */

import LoginS from "../components/loginS"

interface User {
    id: number,
    name: string
}

/**
 * 
 * @returns HTML
 */
export default async function PageLogin() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store' /*next: {revalidate: 10}*/});
    const users: User[] = await res.json();
    //console.log(users);

    /*
        Rendering -> Client-side OR Server-side

        Server-side Static (at build time) OR Dynamic (at request time exampe: web refresh)

        
    */

    return (
        <>
        <LoginS />
        <ul>
            {users.map(user => <li key ={user.id}>{user.name}</li>)}
        </ul>
        <p>{new Date().toLocaleTimeString()}</p>
        </>
        )
        //<h1 className="text-blue-600">Hello Login!</h1>
}
