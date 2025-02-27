
import './App.css'

interface CardProps {
  title: string
}

const Card = (cardProps: CardProps) => {
  return (
    <h2>{cardProps.title}</h2>
  )
}

const App = () => {
  return (
    <>
      <h2>Functional Arror Component</h2>
      <Card title="Star Wars"/>
      <Card title="Avatar"/>
      <Card title="The Lion King"/>
    </>
  )
}

export default App
