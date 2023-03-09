import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import { useQuery} from '@apollo/client';
import { GET_USER } from '../utils/queries';



const User = ({ user: { username }}) => (
    <Card>
        <Card.Body>
            <Card.Title>{username}</Card.Title>
        </Card.Body>
    </Card>
)

function Homepage() {

    const { loading, error, data } = useQuery(GET_USER);

    if (error) return <h1>Something Went Wrong!</h1>
    if (loading) return <h1>loading...</h1>

    return (
        <main className='App'>
            <h1>Welcome!</h1>
            {data.users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </main>
    );
};

export default Homepage;