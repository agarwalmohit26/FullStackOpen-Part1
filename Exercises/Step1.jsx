const Step1 = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    // 1.1 : Course info, step1
    <div>
      <Header course={course} />

      <Content
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};
const Header = ({ course }) => {
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
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
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

export default Step1;