import React, { Component } from 'react';

class Resume extends Component {
	render() {
		if (this.props.data) {
			var education = this.props.data.education.map(function (education) {
				return (
					<div key={education.school}>
						<h3>{education.school}</h3>
						<p className='info'>
							{education.degree} <span>&bull;</span>
							<em className='date'>{education.graduated}</em>
						</p>
						<p>{education.description}</p>
					</div>
				);
			});
			var work = this.props.data.work.map(function (work) {
				return (
					<div key={work.title}>
						<h3>{work.company}</h3>
						<p className='info'>
						<a href={work.link}>
						{work.title}
						</a>
							<span>&bull;</span> <em className='date'>{work.years}</em>
						</p>
						<p>{work.description}</p>
					</div>
				);
			});
			var publication = this.props.data.publication.map(function (publication) {
				return (
					<div key={publication.title}>
						<h3>{publication.title}</h3>
						<p className='info'>
						<a href={publication.url}>
						{publication.publishedAt}
						</a>
							<span>&bull;</span> <em className='date'>{publication.date}</em>
						</p>
						<p>{publication.description}</p>
					</div>
				);
			});
		}

		return (
			<React.Fragment>
				<div id='resume'>
					<section id='education'>
						<div className='row education'>
							<div className='three columns header-col'>
								<h1>
									<span>Education</span>
								</h1>
							</div>
							<div className='nine columns main-col'>
								<div className='row item'>
									<div className='twelve columns'>{education}</div>
								</div>
							</div>
						</div>
					</section>

					<section id='experience'>
						<div className='row work'>
							<div className='three columns header-col'>
								<h1>
									<span>Experience</span>
								</h1>
							</div>
							<div className='nine columns main-col'>{work}</div>
						</div>
					</section>

					<section id='publication'>
						<div className='row publication'>
							<div className='three columns header-col'>
								<h1>
									<span>Publications</span>
								</h1>
							</div>

							<div className='nine columns main-col'>{publication}</div>
						</div>
					</section>

					<section id='skills'>
						<div className='row skill'>
							<div className='three columns header-col'>
								<h1>
									<span>Skills</span>
								</h1>
							</div>

							<div className='nine columns main-col'>
								<section id='four' className='skills'>
									<div className='languages skills show-on-scroll'>
										<i className='devicon-javascript-plain colored technology'></i>
										<i className='devicon-typescript-plain colored technology'></i>
										<i className='devicon-python-plain colored technology'></i>
										<i className='devicon-cplusplus-plain colored technology'></i>
										<i className='devicon-tensorflow-original colored technology'></i>
										<i className='devicon-jupyter-plain-wordmark colored technology'></i>
										<i className='devicon-android-plain colored technology'></i>
										<i className='devicon-react-plain-wordmark colored technology'></i>
										<i className='devicon-nodejs-plain-wordmark colored technology'></i>
										<i className='devicon-html5-plain-wordmark colored technology'></i>
										<i className='devicon-css3-plain-wordmark colored technology'></i>
										<i className='devicon-bootstrap-plain-wordmark technology'></i>
										<i className='devicon-heroku-plain-wordmark technology'></i>
										<i className='devicon-git-plain-wordmark colored technology'></i>
										<i className='devicon-mysql-plain-wordmark colored technology'></i>
										<i className='devicon-mongodb-plain-wordmark colored technology'></i>
										<i className='devicon-git-plain-wordmark technology'></i>
										<i className='devicon-vscode-plain colored technology'></i>
									</div>
								</section>
							</div>
						</div>
					</section>
				</div>
			</React.Fragment>
		);
	}
}

export default Resume;
