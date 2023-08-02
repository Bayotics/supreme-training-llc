import blog1 from '../assets/client1.jpg';
import blog2 from '../assets/client2.jpg';
import blog3 from '../assets/client3.jpg';


const Blog = () => {
    return(
      <div>
        <div className="main_heading">
            <h1 id = "" style={{marginBottom: "30px"}} className='text-center'>
            <span className='text-centre'>LATEST</span><span id = "blog-span"> FROM OUR</span> BLOG
          </h1>
        </div>
        <div className="container-blog row blog-cards-main">
          <div className="card col blog-img">
            <div className="card-header">
              <img src="https://guardian.ng/wp-content/uploads/2020/08/global-internet.jpg" alt="rover" />
            </div>
            <div className="card-body">
              <span className="tag tag-yellow">Technology</span>
              <h4>
                The Real Impact of Internet Shutdowns
              </h4>
              <p>
                The NetLoss calculator is an innovative tool designed to approximate the financial impact of Internet shutdowns...</p>
              <div className="user">
                <img src={blog1} alt="user" />
                <div className="user-info">
                  <h5>Admin</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="card col blog-img">
            <div className="card-header">
              <img src="https://codesealer.com/wp-content/uploads/2020/02/Channels-end-to-end-encryption.jpg" alt="ballons" />
            </div>
            <div className="card-body">
              <span className="tag tag-purple">Technology</span>
              <h4>
                Raise your voice in opposition to bills that oppose end-to-end encryption
              </h4>
              <p>
                The EARN IT Act, STOP CSAM Act, and KOSA in the United States have the potential to compromise end-to-end encryption, creating a collective vulnerability for all of us.
              </p>
              <div className="user">
                <img src={blog2} alt="user" />
                <div className="user-info">
                  <h5>Maggy</h5>
                  <small>Yesterday</small>
                </div>
              </div>
            </div>
          </div>
          <div className="card col blog-img">
            <div className="card-header">
              <img src="https://static.agcanada.com/wp-content/uploads/sites/5/2014/09/rural-internet-78295357-thinkstock.jpg" alt="city" />
            </div>
            <div className="card-body">
              <span className="tag tag-pink">Technology</span>
              <h4>
                How a Remote Village in Armenia Constructed Their Own Internet.
              </h4>
              <p>
                The "Connecting the Unconnected: Europe and Beyond" summit is scheduled to occur in Yerevan, Armenia, from June 6 to 7, 2023.
              </p>
              <div className="user">
                <img src={blog3} alt="user" />
                <div className="user-info">
                  <h5>Lizzy Q</h5>
                  <small>1w ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Blog

