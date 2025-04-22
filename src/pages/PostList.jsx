import { useState, useEffect } from "react";

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
    }, []);

    return (
        <div>
        </div>
    );
}