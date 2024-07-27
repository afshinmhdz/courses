import React from "react";

function CourseCard({ course }) {
  return (
    <div  className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt="" />
      </div>
      <div className="course-item__detail">
        <CourseCardBody title={course.title} description={course.description} rate={course.rate}/>
        <CourseCardFooter tags={course.tags} start={course.start} status={course.status}/>
      </div>
    </div>
  );
}

export default CourseCard;

function CourseCardBody({title,description,rate}) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
      <span className="rate">{rate}</span>
    </div>
  );
}

function CourseCardFooter({tags,start,status}) {
  return (
    <div className="course-item__footer">
      <div className="tags">
        {tags.map((t) => {
          return <span key={t} className="badge badge--secondary">{t}</span>;
        })}
      </div>
      <div className="caption">
        <div className="date">
          {new Date(start).toLocaleDateString("fa-IR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
        <span className={`badge ${status==="Active" ? "badge--primary" : status==="Upcoming" ?  "badge--secondary": "badge--danger" }`}>{status}</span>
      </div>
    </div>
  );
}
