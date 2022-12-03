import deck from "./deck";
import Card from "./Card";

export default function Cards({answered, setAnswered, setListaIMG}) {
  return (
    <ul>
      {deck.map((deck) => (
        <Card
          
          key={deck.key}
          indici={deck.key}
          question={deck.question}
          answer={deck.answer}
          answered={answered}
          setAnswered={setAnswered}
          setListaIMG={setListaIMG}
        />
      ))}
    </ul>
  );
}
