import React from 'react'

function CourseCard({course}) {
    
        
        
        return (
          <div key={course.id} className="course-item">
            <div className="course-item__img">
              <img src={course.imageUrl} alt="" />
            </div>
            <div className="course-item__detail">
              <div className="course-item__body">
                <div>
                  <p className="title">{course.title}</p>
                  <p className="desc">{course.description}</p>
                </div>
                <span className="rate">{course.rate}</span>
              </div>
              <div className="course-item__footer">
                <div className="tags">

                    {course.tags.map((t)=>{
                        return(<span className="badge badge--secondary">{t}</span>)
                    })}
                </div>
                <div className="caption">
                  <div className="date">
                    {new Date(course.start).toLocaleDateString("fa-IR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                  <span className="badge badge--primary">{course.status}</span>
                </div>
              </div>
            </div>
          </div>
        );
      
}

export default CourseCard