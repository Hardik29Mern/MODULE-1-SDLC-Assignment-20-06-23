import './App.css'
import Accordion from './Components/Accordian';

function App() {
  const accordionItems = [
    { title: 'What is your Return Policy?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, debitis ducimus dolorem perspiciatis eum cupiditate vitae autem eos odio quaerat!' },
    { title: 'How do I track my order?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatum ratione illo nihil suscipit iste inventore harum officiis consequatur in odio officia, ipsa voluptates nostrum pariatur vitae, ab facilis id fugiat debitis animi, quisquam temporibus ullam enim! Ex, pariatur iusto?' },
    { title: 'Can I purchase items again?', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolores.' },
    { title: 'May I help You  for Buying Products ', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, et earum odio sapiente magni minima laboriosam eligendi rerum repellat amet distinctio rem. ' }
  ];


  return (
    <div className='App'>
      <h1>React Accordion</h1>
      <Accordion items={accordionItems}/>
    </div>
  )
}

export default App
