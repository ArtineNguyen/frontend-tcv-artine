import React from 'react'
import NavBar from '../components/NavBar'
import { Container } from 'react-bootstrap'

export default function Home() {
    const handleOnChange = (e) => {
        const name = e.target
    }
    return (
        <div class="event-section">
			<Container class="container">
				<div class="row">
					<div class="col-md-5 col-lg-6">

						<div class="event-info">
							<div class="event-date">
								<h2>20</h2>
								may
							</div>
							<h3>Sponsor a Child</h3>
							<p><i class="fa fa-calendar"></i> 8:00 Am — 10:00 Am  <i class="fa fa-map-marker"></i> Central District, Riga, LV-1050, Latvia</p>
						</div>
					</div>
					<div class="col-md-7 col-lg-6">

						<div class="counter">
							<div class="counter-item"><h4>10</h4>Days</div>
							<div class="counter-item"><h4>08</h4>hours</div>
							<div class="counter-item"><h4>40</h4>Mins</div>
							<div class="counter-item"><h4>56</h4>secs</div>
						</div>
						<a href="" class="site-btn sb-light-line">Read more</a>
					</div>
				</div>
			</Container>




		<section class="about-section spad">
			<div class="container">
				<div class="row">
					<div class="col-md-6 about-content">
						<h2>Let's Make the World Better Together</h2>
						<p>For God did not send his Son into the world to condemn the world, but to save the world through him.</p>
						<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
						<a href="#" class="site-btn sb-wide">join with us</a>
					</div>
					<div class="col-md-6 about-img">
						<img src="img/about.jpg" alt=""></img>
					</div>
				</div>
			</div>
		</section>




		<section class="services-section spad">
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<div class="service-box">
							<h4><i class="fa fa-fire"></i>Our Values</h4>
							<p>Excepteur sint occaecat cupidatat non,  sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
							<a href="#" class="s-readmore">Readmore <i class="fa fa-angle-double-right"></i></a>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="service-box">
							<h4><i class="fa fa-eye"></i>Our Vision</h4>
							<p>Excepteur sint occaecat cupidatat non, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
							<a href="#" class="s-readmore">Readmore <i class="fa fa-angle-double-right"></i></a>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="service-box">
							<h4><i class="fa fa-heart"></i>Our Mission</h4>
							<p>Excepteur sint occaecat cupidatat non, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
							<a href="#" class="s-readmore">Readmore <i class="fa fa-angle-double-right"></i></a>
						</div>
					</div>
				</div>
			</div>
		</section>


		

		<section class="sermon-section spad">
			<div class="section-title">
				<span>Experience God's Presence</span>
				<h2>Sermon Today</h2>
			</div>
			<div class="sermon-warp">
				<div class="sermon-left-bg set-bg" data-setbg="img/sermon-bg.jpg"></div>
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-md-offset-6">
							<div class="sermon-content">
								<h2>Lord Is Sufficient For All Of Our Needs</h2>
								<ul class="sermon-info">
									<li>Sermon From: <span>Vincent John</span></li>
									<li>Categories: <span>God, Pray</span></li>
									<li><span>On Monday 23 DEC, 2018</span></li>
								</ul>
								<p>For God did not send his Son into the world to condemn the world, but to save the world through him.</p>
								<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
								<div class="icon-links">
									<a href=""><i class="ti-link"></i></a>
									<a href=""><i class="ti-zip"></i></a>
									<a href=""><i class="ti-headphone"></i></a>
									<a href=""><i class="ti-import"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	



		<section class="event-list-section spad">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="section-title title-left">
							<span>Experience God's Presence</span>
							<h2>Upcoming Events</h2>
						</div>
					</div>
					<div class="col-md-6 text-right event-more">
						<a href="" class="site-btn">view all events</a>
					</div>
				</div>
				<div class="event-list">
					<div class="el-item">
						<div class="row">
							<div class="col-md-4">
								<div class="el-thubm set-bg" data-setbg="img/event/1.jpg"></div>
							</div>
							<div class="col-md-8">
								<div class="el-content">
									<div class="el-header">
										<div class="el-date">
											<h2>20</h2>
												may
										</div>
										<h3>Give To Help Each Child Grow Up Healthy</h3>
										<div class="el-metas">
											<div class="el-meta"><i class="fa fa-user"></i> Vincent John</div>
											<div class="el-meta"><i class="fa fa-calendar"></i> Monday, 08:00 Am </div>
											<div class="el-meta"><i class="fa fa-map-marker"></i> Central District, Riga, LV-1050, Latvia</div>
										</div>
									</div>
									<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
									<a href="" class="site-btn sb-line">Read more</a>
								</div>
							</div>
						</div>
					</div>
					<div class="el-item">
						<div class="row">
							<div class="col-md-4">
								<div class="el-thubm set-bg" data-setbg="img/event/2.jpg"></div>
							</div>
							<div class="col-md-8">
								<div class="el-content">
									<div class="el-header">
										<div class="el-date">
											<h2>16</h2>
												oct
										</div>
										<h3>Your Support Helps Kids Survive & Thrive</h3>
										<div class="el-metas">
											<div class="el-meta"><i class="fa fa-user"></i> Vincent John</div>
											<div class="el-meta"><i class="fa fa-calendar"></i> Monday, 08:00 Am </div>
											<div class="el-meta"><i class="fa fa-map-marker"></i> Central District, Riga, LV-1050, Latvia</div>
										</div>
									</div>
									<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
									<a href="" class="site-btn sb-line">Read more</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>



		<section class="donate-section spad set-bg" data-setbg="img/donate-bg.jpg">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-lg-7 donate-content">
						<h2>A Children’s Miracle Network Hospital</h2>
						<ul class="donate-info">
							<li>Sermon From: <span>Vincent John</span></li>
							<li>Categories: <span>God, Pray</span></li>
							<li><span>On Monday 23 DEC, 2018</span></li>
						</ul>
						<p>For God did not send his Son into the world to condemn the world, but to save the world through him. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
				</div>
				<div class="col-md-6 col-lg-5">
					<div class="donate-card">
						<h2>$45.000<span>Remaining to helps</span></h2>
						<div class="donate-progress-bar">
							<div class="pb-inner">
								<span>60%</span>
							</div>
						</div>
						<div class="donate-progress-info">
							<div class="di-left">
								Raised: <span>$50,000</span>
							</div>
							<div class="di-right">
								Goal: <span>$95,000</span>
							</div>
						</div>
						<a href="" class="site-btn sb-full">DONATE NOW</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	

	<section class="blog-section spad">
		<div class="container">
			<div class="section-title">
				<span>Experience God's Presence</span>
				<h2>LATEST NEWS</h2>
			</div>
			<div class="row">
				<div class="col-sm-6 col-md-4">
					<div class="blog-item">
						<div class="bi-thumb set-bg" data-setbg="img/blog/1.jpg"></div>
						<div class="bi-content">
							<div class="date">On Monday 13 May, 2018</div>
							<h4><a href="single-blog.html">Give To End Childhood illnesses</a></h4>
							<div class="bi-author">by <a href="#">Sofia Joelsson</a></div>
							<a href="#" class="bi-cata">Hope & Faithful</a>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="blog-item">
						<div class="bi-thumb set-bg" data-setbg="img/blog/2.jpg"></div>
						<div class="bi-content">
							<div class="date">On Monday 13 May, 2018</div>
							<h4><a href="single-blog.html">Meet Our 2018 Patient Ambassadors</a></h4>
							<div class="bi-author">by <a href="#">Sofia Joelsson</a></div>
							<a href="#" class="bi-cata">color Story</a>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="blog-item">
						<div class="bi-thumb set-bg" data-setbg="img/blog/3.jpg"></div>
						<div class="bi-content">
							<div class="date">On Monday 13 May, 2018</div>
							<h4><a href="single-blog.html">Why We Give Back To Children's Colorado</a></h4>
							<div class="bi-author">by <a href="#">Sofia Joelsson</a></div>
							<a href="#" class="bi-cata">Sermon & Pray</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<section class="newsletter-section">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-7">
					<h4>Subscribe And Tell Us Real Story About Your Journey</h4>
				</div>
				<div class="col-sm-8 col-md-5 col-sm-offset-2 col-md-offset-0">
					<form class="newsletter-form">
						<input type="email" placeholder="Enter your email"/>>
						<button class="nl-send-btn">subscribe</button>
					</form>
				</div>
			</div>
		</div>
	</section>
        </div>
    )
}
