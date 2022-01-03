import React, { Component } from 'react';
import resume from '../assets/resume.pdf';

class About extends Component {
	render() {
		if (this.props.data) {
			var profilepic = 'images/' + this.props.data.image;
		}

		return (
			<section id='about'>
				<div className='row'>
					<div className='three columns'>
						<img className='profile-pic' src={profilepic} alt='Aheli Ghosh Profile Pic' />
					</div>
					<div className='nine columns main-col'>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
							<h2>About Me</h2>
							<div className='download'>
								<p>
									<a href={resume} target='_blank' rel='noopener noreferrer' className='button'>
										<i className='fa fa-download'></i>Download Resume
									</a>
								</p>
							</div>
						</div>
						<p>
							I am currently working as a software engineer with Microsoft. I completed my BTech in computer science at <a href="http://www.dtu.ac.in/">Delhi Technological University</a> in 2021. Apart from my core curriculum, I engaged in multiple tech stacks, from development to machine learning. This helped me publish three research papers, and win at technical hackathons.
							<br />
							<br /> In college, I actively participated in and conducted events for technical and humanitarian causes. I am passionate about increasing diversity in tech and would love to contribute further to the cause. In my free time, I love to read fiction, create watercolor paintings, and play the guitar. 
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
