export default function Avatar({ person, size }) {
  const src = "https://i.imgur.com/7vQD0fPs.jpg";
  const alt = "Gregorio Y. Zara";
  const name = "Gregorio Y. Zara";
  const obj = {
    name: "Hedy Lamarr",
    inventions: 5,
  };
  const today = new Date();
  console.log(today);
  function formatDate(date) {
    return Intl.DateTimeFormat("ja-JP", { weekday: "long" }).format(date);
  }
  return (
    <>
      <h1>{name}'s Todo List</h1>
      <h1>
        Todo List{formatDate(today)} {obj.name}
        {obj.inventions}
      </h1>
      <img className="avatar" src={src} alt={alt} />
      <ul style={{ backgroundColor: "green", color: "white" }}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  );
}
