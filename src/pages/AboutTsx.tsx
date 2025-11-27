export default function About() {

  const title:string = '型定義したtitleです。'
  return (
    <div>
      <nav>
        <a href="./index.html">TOP</a> |{" "}
        <a href="./home.html">Home</a> |{" "}
        <a href="./contact.html">Contact</a>
      </nav>
      <MyButton title={title}/>

    </div>
  );
}

function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}