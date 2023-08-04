import { useState } from "react";
import Rating from '../components/Rating';
import MessageBox from '../components/MessageBox';

const ProductDetails = ({product, rating}) => {
    const reviewLength = product.reviews.length;
     const whatYouWillLearnContent = <div className="tab-pane fade show active" id="product-info-tab"   aria-labelledby="product-info-link">
                                <div className="product-desc-content">
                                    <h3 className= ''>What you will learn</h3>
                                    <p className="productDetails-p"dangerouslySetInnerHTML={{__html: product.whatYouWillLearn}}></p>
                                </div>
                            </div>;
     const attendeeContent = <div className="tab-pane fade show active" aria-labelledby="product-desc-link">
                                    <div className="product-desc-content">
                                        <h3 className= ''>Who Should attend?</h3>
                                        <p dangerouslySetInnerHTML={{__html: product.attendee}}></p>
                                    </div>
                                </div>;
        const courseOutline =  <div className="tab-pane fade show active" id="product-shipping-tab"   aria-labelledby="product-shipping-link">
                                <div className="product-desc-content">
                                    <h3 className= ''>Course Outline</h3>
                                    <p dangerouslySetInnerHTML={{__html: product.courseOutline}}></p>
                                </div>
                            </div>
        const reviewsContent = 
            <div className="tab-pane fade show active" id="product-review-tab"   aria-labelledby="product-review-link">
                <div className="reviews">
                    <h3 className= ''>Reviews ({reviewLength})</h3>
                    <div className="review">
                        <div className="row no-gutters">
                            <div className="mb-3">
          {product.reviews.length === 0 && (
            <MessageBox>There is no review</MessageBox>
          )}
        </div>
                            {product.reviews.map((review) =>{
                                return(
                                    <div>
                                        <div className="col-auto">
                                            <h4>{review.name}</h4>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <Rating rating={review.rating} caption=" "></Rating>
                                                </div>
                                            </div>
                                            <span className="review-date">{review.createdAt.substring(0, 10)}</span>
                                        </div>
                                        <div className="col">
                                            <div className="review-content">
                                                <p>{review.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
    const [content, setContent] = useState(whatYouWillLearnContent);
    const firstMenufunction = () => {
        setContent(whatYouWillLearnContent)
    }
    const secondMenuFunction = () => {
        setContent(attendeeContent)
    }
    const thirdMenufunction = () => {
        setContent(courseOutline)
    }
    const fourthMenuContent = () => {
        setContent(reviewsContent)
    }

    return (
        <div>
            <ul className="nav nav-pills justify-content-center" role="tablist">
                 <li className="nav-item" onClick={firstMenufunction}>
                    <p className="nav-link " >What you will learn</p>
                </li>
                <li className="nav-item" onClick = {secondMenuFunction}>
                    <p className="nav-link " >Who Should Attend?</p>
                </li>
                <li className="nav-item" onClick={thirdMenufunction}>
                    <p className="nav-link " >Course Outline</p>
                </li>
                <li className="nav-item" onClick={fourthMenuContent}>
                    <p className="nav-link " >Reviews</p>
                </li>
            </ul>
            <div className="tab-content">
                {content}  
            </div>
        </div>
    )
}
export default ProductDetails