const Step3 = () => {
  const course = "Half Stack application development";
  // 1.3 step3 part1, part2, part3 objects
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    // 1.1 : Course info, step1
    <div>
      <Header course={course} />

      {/* 1.3 step3 rendering content and total by using part1, part2,part3 objects */}

      <Content
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
        part1={part1.name}
        part2={part2.name}
        part3={part3.name}
      />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
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
const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <>
      <Parts part={part1} exercises={exercises1} />
      <Parts part={part2} exercises={exercises2} />
      <Parts part={part3} exercises={exercises3} />
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


const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  );
};

export default Step3;