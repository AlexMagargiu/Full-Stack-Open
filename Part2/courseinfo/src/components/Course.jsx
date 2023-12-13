function Header({ name }) {
  return <h1>{name}</h1>;
}

/* const Total = ({ sum }) => <p>Number of exercises {sum}</p>; */

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

function Content({ parts }) {
  return parts.map((part) => <Part key={part.id} part={part} />);
}

export default function Course({ course }) {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
}
