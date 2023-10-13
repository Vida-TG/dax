import React, { useState, useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CartContext } from "../context/Context";
import { COURSES } from "../courses";
import './css/body.css'

const Body = () => {
    const cartState = useContext(CartContext)
    const [currentIndex, setCurrentIndex] = useState();
    const [popup, setPopup] = useState(false)
    const [courseDetails, setCourseDetails] = useState("")

    function detailText(course) {
        return (
            <div className="course__details">
                <div><div className="head-desc">COURSE TYPE:</div> {course.courseType}</div>
                <div><div className="head-desc">DESCRIPTION:</div> {course.description}</div>
                <div><div className="head-desc">PRICE:</div> N{course.price}</div>
                 
                <div className="add-div">
                    <button className="add-to-cart" onClick={()=>dispatch({type:'ADD', payload:course})}>ADD TO CART</button>
                </div>
            </div>
        )
    }
    function handleChange(index) {
      setCurrentIndex(index);
    }
    function displayPopup(course) {
        setPopup(true)
        setCourseDetails(detailText(course))
    }
    
    const renderSlides = COURSES.map((course) => (
        course.coursesCount=1,
        course.nightsCount=0,
        <div key={course.id} style={{zIndex:"-5"}}>
            <img src={course.courseImage} alt={course.courseType} />
          <p className="legend" onClick={() => displayPopup(course)}>{course.courseType} (Click to view)</p>
        </div>
      ));


      
    const dispatch = cartState.dispatch;
    return (
        <div className='body'>
            <section className="section">
                <Carousel
                    showArrows={true}
                    transitionTime={800}
                    autoPlay={true}
                    selectedItem={COURSES[currentIndex]}
                    onChange={handleChange}
                    swipeable={true}
                    className="carousel-container"
                >
                    {renderSlides}
                </Carousel>
                { popup &&
                    <div className="course-details">
                        <div className="details-popup-close" onClick={() => setPopup(false)}>X</div>
                        {courseDetails}
                    </div>
                }
            </section>
        </div>
    )
}

export default Body