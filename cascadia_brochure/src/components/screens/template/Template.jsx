import './Template.css'

function Template() {
    const ASSETS = "../../../assets"
    console.log(ASSETS + "../../../assets/logo_bluegrey_internatl-p-500.png")
    return <>
        <div className="content">
            <div className="four-bar-container">
                <div className="bar-container">
                    <img src="image.jpg" alt="homie" className='top-bar-image'/>
                    <a href="" className='four-bar-link'>Cascadia Main Page</a>
                </div>
                <div className="bar-container">
                    <img src="image.jpg" alt="homie" className='top-bar-image'/>
                    <a href="" className='four-bar-link'>IP Web Page</a>
                </div>
                <div className="bar-container">
                    <img src="image.jpg" alt="homie" className='top-bar-image'/>
                    <a href="" className='four-bar-link'>Download Brochure</a>
                </div>
                <div className="bar-container">
                    <img src="image.jpg" alt="homie" className='top-bar-image'/>
                    <a href="" className='four-bar-link'>Contact Us</a>
                </div>
            </div>
        </div>
        <div className="side-bar">
            <img src={ASSETS + "/logo_bluegrey_internatl-p-500.png"} alt="Logo" className='logo'/>
            <div className=''>
                <div className="side-bar-bar-container">
                    <img src="" alt="" />
                    <a href="" className='side-bar-bar-text'>Welcome</a>
                </div>
                <div className="side-bar-bar-container">
                    <img src="" alt="" />
                    <a href="" className='side-bar-bar-text'>Why Cascadia College?</a>
                </div>
                <div className="side-bar-bar-container">
                    <img src="" alt="" />
                    <a href="" className='side-bar-bar-text'>Programs of Study</a>
                </div>
                <div className="side-bar-bar-container">
                    <img src="" alt="" />
                    <a href="" className='side-bar-bar-text'>Tuition, Fees & Dates</a>
                </div>
                <div className="side-bar-bar-container">
                    <img src="" alt="" />
                    <a href="" className='side-bar-bar-text'>Application Process</a>
                </div>
                <div className="side-bar-bar-container">
                    <img src="" alt="" />
                    <a href="" className='side-bar-bar-text'>Shared Campus</a>
                </div>
                <div className="side-bar-bar-container">
                    <img src="" alt="" />
                    <a href="" className='side-bar-bar-text'>Seattle, Washington</a>
                </div>
                <div className="side-bar-bar-container">
                    <img src="" alt="" />
                    <a href="" className='side-bar-bar-text'>Student Testimonials</a>
                </div>
                <div className="side-bar-bar-container">
                    <img src="" alt="" />
                    <a href="" className='side-bar-bar-text'>Meet the IP Team</a>
                </div>
                <div className="side-bar-bar-container">
                    <img src="" alt="" />
                    <a href="" className='side-bar-bar-text'>Photo Gallery</a>
                </div>
                <div className="side-bar-bar-container">
                    <img src="" alt="" />
                    <a href="" className='side-bar-bar-text'>Downloads</a>
                </div>
            </div>
        </div>
    </>
}

export default Template;