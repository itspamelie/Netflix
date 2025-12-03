export default function Header(){
    return(
        <>
           <header className="position-relative header-home">
            <nav className="navbar navbar-expand">
                <div className="container">
                    <img src="/img/logo.png"/>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <button type="button" className="red-btn fw-semibold">Sign In</button>
                    </div>
                </div>
            </nav>

            <section className="hero container h-75 d-flex flex-column align-items-center justify-content-center">
                <h1 className="hero-title text-white text-center">Unlimited films, TV programmes and more</h1>
                <p className="hero-first-p text-white text-center">Watch anywhere. Cancel at any time.</p>
                <p className="hero-second-p text-white text-center">Ready to watch? Enter your email to create or restart your membership.</p>

                <form className="form-home row g-3 d-flex align-items-center justify-content-center w-100 w-lg-75">
                    <div className="form-floating col-auto">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label >Email address</label>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="get-started-btn red-btn fw-bold">Get Started</button>
                    </div>
                </form>
            </section>
        </header>
        </>
    )
}