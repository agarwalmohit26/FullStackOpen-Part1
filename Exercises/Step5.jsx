const Step5 = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    // 1.1 : Course info, step1
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};
const Header = ({ course }) => {
  console.log(course.name); // printing the props to the console ->Pro-Tip
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};
const Content = ({ course }) => {
  return (
    <>
      <Parts part={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Parts part={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Parts part={course.parts[2].name} exercises={course.parts[2].exercises} />
    </>
  );
};

const Parts = ({ part, exercises }) => {
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  );
};

const Total = ({ course }) => {
  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

export default Step5;
