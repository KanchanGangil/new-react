import React from 'react'

function Contact() {
    return (
        <>
            {/* <!-- Breadcrumb Start --> */}
            <div class="container-fluid">
                <div class="row px-xl-5">
                    <div class="col-12">
                        <nav class="breadcrumb bg-light mb-30">
                            <a class="breadcrumb-item text-dark" href="/">Home</a>
                            <span class="breadcrumb-item active">Contact</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- Breadcrumb End --> */}


            {/* <!-- Contact Start --> */}
            <div class="container-fluid">
                <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Contact Us</span></h2>
                <div class="row px-xl-5">
                    <div class="col-lg-7 mb-5">
                        <div class="contact-form bg-light p-30">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                <div class="control-group">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name"
                                        required="required" data-validation-required-message="Please enter your name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject"
                                        required="required" data-validation-required-message="Please enter a subject" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <textarea class="form-control" rows="8" id="message" placeholder="Message"
                                        required="required"
                                        data-validation-required-message="Please enter your message"></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                                        Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-5 mb-5">
                        <div class="bg-light p-30 mb-30">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14321.16792914771!2d78.14084269701387!3d26.187178488716363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5cbc004c7c7%3A0x47c84653bbf15b03!2sJawahar%20Colony%2C%20Lashkar%2C%20Gwalior%2C%20Madhya%20Pradesh%20474001!5e0!3m2!1sen!2sin!4v1700563873199!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div class="bg-light p-30 mb-3">
                            <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>morar</p>
                            <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                            <p class="mb-2"><i class="fa fa-phone-alt text-primary mr-3"></i>+910123456789</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </>
    )
}

export default Contact