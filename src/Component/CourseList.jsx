const courses = [
  {
    id: 1,
    title: "English Lecture",
    description: "language lessons with the most popular teachers",
    imageUrl: "/public/img1.jpg",
    rate: "4.5",
    tags: ["langauges"],
    start: "2021-08-01T20:46:30.615Z",
    status: "Completed",
  },
  {
    id: 2,
    title: "Design Strategy",
    description:
      "lesson on planning design concept and proper planning of work",
    imageUrl: "/public/img2.jpg",
    rate: "4",
    tags: ["UI/UX design", "web design"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Business Lecture",
    description:
      "lectures on how to build your buisness safely without fare of new projects",
    imageUrl: "/public/img3.jpg",
    rate: "3.9",
    tags: ["Marketing", "Finance"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Active",
  },
];

export default function CourseList() {
  return (
    <div className="course-list">
      {courses.map((course) => {
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
                    {new Date().toLocaleDateString("fa-IR", {
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
      })}
    </div>
  );
}
