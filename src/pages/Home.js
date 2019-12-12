import React from 'react'
import NavBar from '../components/NavBar'

export default function Home() {
    const handleOnChange = (e) => {
        const name = e.target
    }
    return (
        <div>
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
        </div>
    )
}
