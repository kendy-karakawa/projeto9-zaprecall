export default function Cards(){

    const cardList = [
        { key: 1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { key: 2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { key: 3, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { key: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { key: 5, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { key: 6, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { key: 7, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { key: 8, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
      ]
    
        
    return (
        <ul>
           {cardList.map((cardList) => (<li key={cardList.key}>{cardList.question}</li>))}
        </ul>
    )
}

{/* <ul>
{alfabeto.map((alfabeto) => (<li key={alfabeto}>
  
      {alfabeto.toUpperCase()}
    
  </li>
))}
</ul> */}