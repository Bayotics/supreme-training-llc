
const Carousel = () => {

  document.querySelector('.multi-item-carousel').Carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
document.querySelector('.multi-item-carousel .item').each(function(){
  var next = document.querySelector(this).next();
  if (!next.length) {
    next = document.querySelector(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo(document.querySelector(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo(document.querySelector(this));
  } else {
    document.querySelector(this).siblings(':first').children(':first-child').clone().appendTo(document.querySelector(this));
  }
});
    return (
        <div>
            <div className="container">
                <h1>Use Bootstrap 3's carousel to show multiple items per slide.</h1>
                <div className="row">
                    <div className="col-md-12">
                    <div className="carousel slide multi-item-carousel" id="theCarousel">
                        <div className="carousel-inner">
                        <div className="item active">
                            <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?perth,australia" className="img-responsive" alt = "Parallax slider"/></a></div>
                        </div>
                        <div className="item">
                            <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?fremantle,australia" className="img-responsive" alt = "Parallax slider"/></a></div>
                        </div>
                        <div className="item">
                            <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?west-australia" className="img-responsive" alt = "Parallax slider"/></a></div>
                        </div>
                        <div className="item">
                            <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?perth" className="img-responsive" alt = "Parallax slider"/></a></div>
                        </div>
                        <div className="item">
                            <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?quokka,perth" className="img-responsive" alt = "Parallax slider"/></a></div>
                        </div>
                        <div className="item">
                            <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?margaretriver,australia" className="img-responsive" alt = "Parallax slider"/></a></div>
                        </div>
                        <div className="item">
                            <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?perth,australia&r=7" className="img-responsive" alt = "Parallax slider"/></a></div>
                        </div>
                        
                        </div>
                        <a className="left carousel-control" href="#theCarousel" data-slide="prev"><i className="glyphicon glyphicon-chevron-left"></i></a>
                        <a className="right carousel-control" href="#theCarousel" data-slide="next"><i className="glyphicon glyphicon-chevron-right"></i></a>
                    </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Carousel