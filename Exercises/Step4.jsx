const Step4 = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    // 1.1 : Course info, step1
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};
const Header = ({ course }) => {
  console.log(course); // printing the props to the console ->Pro-Tip
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};
const Content = ({ parts }) => {
  return (
    <>
      <Parts part={parts[0].name} exercises={parts[0].exercises} />
      <Parts part={parts[1].name} exercises={parts[1].exercises} />
      <Parts part={parts[2].name} exercises={parts[2].exercises} />
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

const Total = ({ parts }) => {
  return (
    <>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </>
  );
};

export default Step4;
