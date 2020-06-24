import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import api from '../../services/api';

export default function Home() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        api.get('posts').then(response => {
            console.log(response.data);
            setPosts(response.data);
        })
    }, [])

   

    return (
        <div className="home-container">
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <strong>Title</strong>
                        <p>{post.title}</p>
                        <strong>Body</strong>
                        <p>{post.body}</p>

                    </li>
                ))}
            </ul>
        </div>
    )

}