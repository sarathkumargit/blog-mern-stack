import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetails() {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return <p>Loading...</p>;
    }

    const formattedDate = post.createdAt
        ? new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
          })
        : "Date not available";

    return (
        <div>
            <h1>Post Details</h1>
            <main className="container my-4">
                <div className="row">
                    <article className="col-lg-8">
                        <h2 className="blog-post-title">{post.title}</h2>
                        <p className="blog-post-meta">
                            {formattedDate} <a href="#">Author</a>
                        </p>
                        <img className="mb-3 img-fluid" src={post.image} alt="" />
                        <div className="blog-post-content">
                            <p>{post.content}</p>
                        </div>
                    </article>

                    <aside className="col-lg-4">
                        <div className="p-4 bg-light">
                            <h3 className="mb-4">Related Posts</h3>
                            <p>No related posts to display yet.</p>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}