function CourseCard(props) {
  const { course } = props;
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} />
      </div>
      <div className="course-item__detail">
        <CourseItemBody course={course} />
        <CourseItemFooter course={course} />
      </div>
    </div>
  );
}

export default CourseCard;

function CourseItemBody({ course }) {
  return (
    <div className="course-item__body">
      <div className="info-container">
        <h2 className="title">{course.title}</h2>
        <p className="description">{course.description}</p>
      </div>
      <div className="rate">🌟{course.rate}</div>
    </div>
  );
}

function CourseItemFooter({ course }) {
  const createdAt = new Date(course.start).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
  return (
    <div className="course-item__footer">
      <div className="tags">
        {course.tags.map((t, index) => {
          return (
            <span className="badge badge--secondary" key={index}>
              {t}
            </span>
          );
        })}
      </div>
      <div className="caption">
        <div className="date">{createdAt}</div>
        <span
          className={`badge ${
            course.status == "Completed"
              ? "badge--primary"
              : course.status == "Active"
              ? "badge--active"
              : "badge--danger"
          }`}
        >
          {course.status}
        </span>
      </div>
    </div>
  );
}
