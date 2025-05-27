import { Link } from "react-router-dom";

export default function Post({ post }) {
	return (
		<div className="card mb-4">
			<div className="row g-0">
				<div className="col-sm-12 col-md-3">
					<img
						className="img-fluid h-100"
						src={post.image || 'https://via.placeholder.com/800x400'}
						alt={post.title || 'Post image'}
						style={{ objectFit: 'cover' }}
					/>
				</div>
				<div className="col-md-9">
					<div className="card-body">
						<h5 className="card-title">{post.title}</h5>
						<p className="card-text">{post.category}</p>
						<p className="card-text">{post.author}</p>
						<p className="card-text">{post.content}</p>

						<Link to={`/posts/${post._id}`} className="btn btn-primary">
							Read More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}