export default function Post() {
	return (
		<div className="card mb-4">
			<div className="row g-0">
				<div className="col-sm-12 col-md-3">
					<img
						className="img-fluid h-100"
						src="https://via.placeholder.com/800x400"
						alt="..."
						style={{ objectFit: 'cover' }}
					/>
				</div>
				<div className="col-md-9">
					<div className="card-body">
						<h5 className="card-title">Post Title 1</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<a href="#" className="btn btn-primary">
							Read More
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}