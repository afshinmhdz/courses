
export default function CourseList() {
    return (
      <div className="course-list">
        <div className="course-item">
          <div className="course-item__img">
            <img src="/img1.jpg" alt="" />
          </div>
          <div className="course-item__detail">
            <div className="course-item__body">
              <div>
                <p className="title">React</p>
                <p className="desc">ultimate</p>
              </div>
              <span className="rate">4</span>
            </div>
            <div className="course-item__footer">
              <div className="tags">
                <span className="badge badge--secondary">frontend</span>
                <span className="badge badge--secondary">backend</span>
              </div>
              <div className="caption">
                <div className="date">
                  {new Date().toLocaleDateString("fa-IR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
                <span className="badge badge--primary">completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  