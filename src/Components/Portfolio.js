import React, { Component } from 'react';

class Portfolio extends Component {
	render() {
		if (this.props.data) {
			var projects = this.props.data.map(function (project) {
				return (
					<div className='article-wrapper' key={project.title}>
						<article className='col-12 col-12-xsmall work-item'>
							<a href={project.github} className='image fit thumb' target='_blank' rel='noopener noreferrer'>
								<img src={project.imgSrc} alt='project image' />
							</a>
							<div className='art-description'>
								<div className='text-wrapper'>
									<h3>{project.title}</h3>
									<p>{project.description}</p>
								</div>
								<ul className='actions'>
									<div className='actions-wrapper'>
										{project.demo && (
											<li>
												<a
													href={project.demo}
													className='button project-button'
													target='_blank'
													rel='noopener noreferrer'
												>
													View Demo
												</a>
											</li>
										)}
										<li>
											<a
												href={project.github}
												className='button project-button brands'
												target='_blank'
												rel='noopener noreferrer'
											>
												<i className='fa fa-github icon'></i>View Source
											</a>
										</li>
									</div>
								</ul>
							</div>
						</article>
					</div>
				);
			});
		}

		return (
			<section id='portfolio'>
				<div className='row projects'>
					<div className='twelve columns collapsed'>
						<h1>
							<span>Projects</span>
						</h1>
						<div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
							{projects}
							<ul className='actions'>
								<li className='wide-button'>
									<a
										href='https://www.linkedin.com/in/aheli-ghosh/'
										className='button portfolio-button'
										target='_blank'
										rel='noopener noreferrer'
									>
										Full Portfolio
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;
