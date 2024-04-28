import React from 'react';
import '../Css/AdminComponent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import thumbnailImage from '../Images/thumbnail.png'; 

const AdminComponent = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

      const months = [
        "January 2014", "February 2014", "March 2014", "April 2013", "May 2013", "June", 
        "July 2013", "August 2013", "September 2013", "October 2013", "November 2013", "December 2013"
    ];

  return (
    <div className="admin-container">
        <h1 className="admin-header">Welcome Admin</h1>
        {/* Title Section */}
        <div className="title-section">
           <h1>Title of a longer <br></br> featured blog post </h1> 
           <p>Multiple lines of text that form the lede, informing new<br></br>
            readers quickly and efficiently about what's most interesting<br></br>
            in this post's contents. 
            </p>
            <p style={{marginTop:"25px"}}>Continue Reading......</p>
        </div>
        
        {/* Post Section */}
        <div className="row">
            <div className="col-md-6">
            <div className="card">
                <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="blue-text">World</h5>
                        <h1 className="post-header">Featured Post</h1>
                        <p className="date-text">Nov 12</p>
                        <p> This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <p className="blue-text">Continue reading</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={thumbnailImage} className="card-img-top" alt="Image" />
                </div>
                </div> 
            </div>
            
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="design-text">Design</h5>
                                <h1 className="post-header">Post title</h1>
                                <p className="date-text">Nov 11</p>
                                <p> This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <p className="header-text">Continue reading</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={thumbnailImage} className="card-img-top" alt="Image" />
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        {/* Blog Section */}
        <div className="row sample-blog-post">
            <div className="col-md-8">
                {/* Same Blog Post Section */}
                <div className="mt-3">
                    <h3 className="firebase-header">From the Firebase</h3>
                    <hr/>
                    <h1> Sample Blog Post</h1>
                    <p className="date-text">January 1, 2014 by <span className="blue-text">Mark</span></p>
                    <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported. </p>
                    <hr/>
                    <p>Cum sociis natoque penatibus et magnis <span className="blue-text">dis parturient montes</span>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. </p>
                    <p>Curabitur blandit tempus porttitor.  <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. </p>
                    <p>vehicula ut id elit.Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                </div>

                {/* Heading Section */}
                <div>
                    <h2 >Heading</h2>
                    <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur 
ac, vestibulum at eros.</p>
                </div>

                {/* Sub heading section */}
                <div>
                    <h3>Sub-heading</h3>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <p className="mt-2">Example code block About </p>
                    <p className="mt-2">Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus </p>
                </div>

                {/* Sub heading section 2 */}
                <div>
                    <h3>Sub-heading</h3>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </p>
                    <ul>
                        <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. </li>
                        <li>Donec id elit non mi porta gravida at eget metus.  </li>
                        <li>Nulla vitae elit libero, a pharetra augue.</li>
                    </ul>
                    <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. </p>
                    <ol>
                        <li>Vestibulum id ligula porta felis euismod semper.</li> 
                        <li> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </li>
                        <li> Maecenas sed diam eget risus varius blandit sit amet non magna. </li>
                    </ol>
                </div>

                {/* Another Blog Post Section */}
                <div className="mt-5">
                    <h1> Another Blog Post</h1>
                    <p className="date-text">December 23, 2013 by <span className="blue-text">Jacob</span></p>
                    <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported. </p>
                    <p>Cum sociis natoque penatibus et magnis <span className="blue-text">dis parturient montes</span>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. </p>
                    <p>Curabitur blandit tempus porttitor.  <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. </p>
                    <p>vehicula ut id elit.Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                </div>

                {/* New Feature Section */}
                <div>
                    <h3>New Feature</h3>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </p>
                    <ul>
                        <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. </li>
                        <li>Donec id elit non mi porta gravida at eget metus.  </li>
                        <li>Nulla vitae elit libero, a pharetra augue.</li>
                    </ul>
                    <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet  fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                    <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. </p>
                </div>

        
            </div>
            <div className="col-md-4"> 
                {/* About Section */}
                <div className="mt-3 about-container">
                    <h3 className="firebase-header">About</h3>
                    <p>Sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.Aenean lacinia bibendum nulla sed consectetur.  </p>
               </div>
               {/* Archives Section */}
               <div className="mt-3">
                    <h3 className="firebase-header">Archives</h3>
                    {months.map((month, index) => (
                        <a key={index}style={{ display: 'block', color: '#1aa3ff',cursor:"pointer" }}href="#">{month}</a>
                    ))}
               </div>
                {/* Elsewhere Section */}
                <div className="elsewhere-container mt-3">
                    <h3 className="firebase-header">Archives</h3>
                    <a href="#">Github</a>
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                </div>
            </div>
                 
        </div>

        {/* Buttons Section */}
        <div className="buttons-container">
                <button className="btn older-btn">Older</button>
                <button className="btn newer-btn">Newer</button>
        </div>

        {/* Footer Section */}
        <footer className="footer mt-5">
            <div className="container text-center">
                <p>Blog template built for Bootstrap by @mdo.</p>
                <span className="text-muted" onClick={scrollToTop}>Back to top</span>
            </div>
      </footer>
    </div>
  );
};

export default AdminComponent;
