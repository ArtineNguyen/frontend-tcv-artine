import React from 'react'

export default function Footer() {
    return (
        <div>
            <section class="footer-top-section spad">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 footer-top-content">
					<div class="section-title title-left">
						<h2>Contact Us</h2>
					</div>
					<h3>New York, USA</h3>
					<p>207 Park Avenue New York, NY 90210</p>
					<p><span>Email:</span> info@colorlib.com</p>
					<h4>Phone:</h4>
					<h5>+1 (409) 987–4567</h5>
				</div>
			</div>
		</div>
		<!-- googel map -->
		<div class="map-area" id="map-canvas"></div>
	</section>
	<!-- Footer top section end-->


	<!-- Footer section -->
	<footer class="footer-section">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 copyright">
					<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
				</div>
				<div class="col-sm-6">
					<div class="social">
						<a href="#"><i class="ti-facebook"></i></a>
						<a href="#"><i class="ti-twitter-alt"></i></a>
						<a href="#"><i class="ti-google"></i></a>
						<a href="#"><i class="ti-instagram"></i></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
        </div>
    )
}
