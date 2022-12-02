import deck from "./deck";
import Card from "./Card";

export default function Cards() {
  return (
    <ul>
      {deck.map((deck) => (
        <Card
          key={deck.key}
          indici={deck.key}
          question={deck.question}
          answer={deck.answer}
        />
      ))}
    </ul>
  );
}
