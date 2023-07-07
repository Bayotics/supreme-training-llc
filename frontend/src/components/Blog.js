import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';


const Blog = () => {
    return(
        <div>
            <div className="section padding_layout_1">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="full">
          <div className="main_heading text_align_left">
            <h1 id = "" style={{marginTop: "60px"}} className='text-center'>
            <span className='theme-color'>LATEST   </span>FROM OUR BLOG
        </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="full blog_colum">
          <div className="blog_feature_img"> 
          <img src={blog1} style = {{height: "250px", width: "100%"}} alt="#" /> 
          </div>
          <div className="post_time mt-4 text-secondary">
            <p style={{fontSize: "12px"}}><i className="fa fa-clock-o"></i> July 07, 2023 ( In Maintenance )</p>
          </div>
          <div className="blog_feature_head">
            <h5>Why Your Computer Hates You</h5>
          </div>
          <div className="blog_feature_cont">
            <p className="text-secondary">Your computer hates you because you have no recovery strategy. You are under the impression the recovery partition on that old Dell or HP machine will save your bacon when you need to reinstall your Operating System....</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="full blog_colum">
          <div className="blog_feature_img"> 
            <img src={blog2} style = {{height: "250px", width: "100%"}} alt="#" /> 
          </div>
          <div className="post_time mt-4 text-secondary">
            <p style={{fontSize: "12px"}}><i className="fa fa-clock-o"></i> July 07, 2023 ( In Maintenance )</p>
          </div>
          <div className="blog_feature_head">
            <h5>Easy Tips To Computer Repair</h5>
          </div>
          <div className="blog_feature_cont">
            <p className="text-secondary">Any abnormality in the integrated components of a computer can prove harmful to its performance, but some general computer issues can be addressed without seeking professional IT help. Among the most common problems, ..... </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="full blog_colum">
          <div className="blog_feature_img">
             <img src={blog3} style = {{height: "250px", width: "100%"}} alt="#" /> 
          </div>
          <div className="post_time mt-4 text-secondary">
            <p style={{fontSize: "12px"}}><i className="fa fa-clock-o"></i> July 07, 2023( In Maintenance )</p>
          </div>
          <div className="blog_feature_head">
            <h5>Computer Maintenance 2023</h5>
          </div>
          <div className="blog_feature_cont">
            <p className="text-secondary">Computer maintenance is the practice of keeping computers in a good state of repair. A computer containing accumulated dust and debris may not run properly. The crumbs, dust, and other particulate that fall between the keys and...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
    )
}

export default Blog