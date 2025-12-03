export default function Footer(){
    return(
        <>
           <footer className="py-5 bg-black text-light">
            <div className="container"> 
                <div>
                    <p>Questions? Call <a href="#">0900900900</a></p>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <ul>
                            <li className="mb-2">
                                <a href="#">FAQ</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Media Center</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Netflix Shop</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Ways to Watch</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Cookie Preferences</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Speed Text</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Only on Netflix</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4">
                        <ul>
                            <li className="mb-2">
                                <a href="#">Help Center</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Investor Relations</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Redeem gift cards</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Terms of Use</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Corporate Information</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Legal Guarantee</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Advert ChoiCes</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4">
                        <ul>
                            <li className="mb-2">
                                <a href="#">Account</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Jobs</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Buy Gift Cards</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Privacy</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Contact us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Legal Notices</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-3">
                    <div className="position-absolute">
                        <img className="position-absolute" width="17" src="./img/globe-icon.png" alt="globe"/>
                    </div>
                    <div className="position-absolute">
                        <div className="arrow-down position-absolute"></div>
                    </div>
                    <select className="position-relative py-1" name="" id="">
                        <option value="">English</option>
                    </select>
                </div>
                <p>Netflix United Kingdom</p>
            </div>
        </footer>
        </>
    )
}