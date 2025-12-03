import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css'
import Header from '../layouts/Header';
import Footer from '../layouts/footer';


function Home() {

  return (
<>
<div className="body-home">
 <Header></Header>

        <section className="purple-section position-absolute d-flex justify-content-center">
            <div className="container-md d-row d-md-flex justify-content-center">
                <div className="d-flex align-items-center justify-content-end px-4 col-12 col-md-5">
                    <img className="img-fluid" src="./img/popcorn-logo.png" alt="popcorn"/>
                </div>
                <div className="d-flex flex-column justify-content-center col-12 col-md-7">
                    <p>The Netflix you love for just £4.99</p>
                    <p>Get the Standard with adverts plan.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </section>

        <section className="enjoy-section py-5 bg-black text-light">
            <div className="container d-flex row m-auto">
                <div className="d-flex flex-column justify-content-center col-12 col-lg-6">
                    <h2 className="section-title text-center text-lg-start">Enjoy on your TV</h2>
                    <p className="section-paragraph text-center text-lg-start">Watch on smart Tvs, PlayStation, Xbox, Chromecast, Apple TV, Blu-Ray players and more.</p>
                </div>
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src="./img/tv.png" alt="tv"/>
                </div>
            </div>
        </section>

        <section className="watch-section py-5 bg-black text-light">
            <div className="container d-flex row m-auto">
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src="./img/mobile-img.png" alt="mobile"/>
                </div>
                <div className="d-flex flex-column justify-content-center col-12 col-lg-6 order-first order-lg-last">
                    <h2 className="section-title text-center text-lg-start">Watch everywhere</h2>
                    <p className="section-paragraph text-center text-lg-start">Stream unlimited films and TV programmes on your phone, tablet, laptop and TV.</p>
                </div>
            </div>
        </section>

        <section className="children-section py-5 bg-black text-light">
            <div className="container d-flex row m-auto">
                <div className="d-flex flex-column justify-content-center col-12 col-lg-6">
                    <h2 className="section-title text-center text-lg-start">Create profiles for children</h2>
                    <p className="section-paragraph text-center text-lg-start">Send children on adventures with their favourite characters in a space made just for them - free with your membership.</p>
                </div>
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src="./img/children-img.png" alt="children"/>
                </div>
            </div>
        </section>

        <section className="download-section py-5 bg-black text-light">
            <div className="container d-flex row m-auto">
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src="./img/download-img.jpg" alt="download"/>
                </div>
                <div className="d-flex flex-column justify-content-center col-12 col-lg-6 order-first order-lg-last">
                    <h2 className="section-title text-center text-lg-start">Download your programmes to watch offline</h2>
                    <p className="section-paragraph text-center text-lg-start">Only available on advert-free plans.</p>
                </div>
            </div>
        </section>

        <section className="faq-section py-5 bg-black text-light">
            <div className="container">
                <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item mb-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                What is Netflix?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate harum cumque maxime consequuntur assumenda maiores obcaecati iusto beatae nihil! Voluptates esse, magnam dolores non porro aperiam. Voluptatem, labore magni quod, quasi ab provident dolor amet dolorem molestiae blanditiis illo dolorum incidunt cum itaque laborum vero quam facere voluptatibus fuga minima?
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How much does Netflix cost?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laudantium et corporis distinctio quos expedita, quae, eos necessitatibus ea consectetur nam cum porro veritatis illum repudiandae nobis tempora eum excepturi quibusdam tempore non asperiores? Error, illo perspiciatis? Cum, rem quam quibusdam at accusantium alias mollitia labore magnam repellat, eveniet odio quas saepe illum neque! Deleniti facere omnis culpa modi rerum vitae sunt facilis minus nostrum! Esse cum facilis qui sapiente eos dignissimos, perferendis delectus inventore minus, neque amet quo aspernatur quaerat alias dolore cumque sint. Sapiente vel numquam ratione maxime. Veritatis, optio reiciendis voluptatibus praesentium sed vitae assumenda quaerat velit!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Where can I watch?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio hic temporibus delectus veniam distinctio repellendus error architecto? Magnam quas, quo placeat quibusdam dolores vitae corporis quaerat velit! Temporibus illo corrupti praesentium atque consequuntur! Deserunt amet explicabo magni dignissimos sunt.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How do I cancel?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus vero voluptates quasi reprehenderit pariatur necessitatibus maiores cum voluptatem possimus! Quod fuga dignissimos quo debitis iure eius ratione neque unde libero deleniti doloribus facilis animi est sunt ut deserunt beatae, dicta illum aut non totam! Deleniti in rerum totam laboriosam autem accusamus nihil! Voluptas quibusdam voluptatum tempora ducimus libero, quae reiciendis.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                What can I watch on Netflix?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur corporis incidunt ullam ipsam suscipit nam eius velit deleniti unde voluptatem, iure sequi necessitatibus iusto.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Is Netflix good for children?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores quod tempore nisi est sequi veniam vitae quia odio, harum consequatur at corporis totam vel, facere quidem et eos nihil iste fugit! Iusto iste, nihil vel eos ipsa culpa minus assumenda quaerat ut? Facilis quibusdam maxime asperiores voluptates maiores, alias adipisci odit placeat. Dolore temporibus labore praesentium commodi quam. Possimus praesentium omnis maiores dolorum non voluptatibus consequuntur autem, eveniet aut alias id impedit perspiciatis officia?
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="text-center mt-5">
                    Ready to watch? Enter your email to create or restrat your membership.
                </h3>
                <form className="form-home row g-3 d-flex align-items-center justify-content-center w-100 w-lg-75 m-auto">
                    <div className="form-floating col-auto">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label >Email address</label>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="get-started-btn red-btn fw-bold">Get Started</button>
                    </div>
                </form>
            </div>
        </section>

      <Footer></Footer>
      </div>
</>
  )
}

export default Home
