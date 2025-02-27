
import './App.css'
import DataRequest from './components/DataRequest'


const App = () => {
  const apiUrl = process.env.BACKEND_URL;

  return (
    <>
      <h2>Functional Arror Component</h2>
      <DataRequest title="API Endpoint A" apiUrl={apiUrl}/>
    </>
  )
}

// interface CardProps {
//   title: string
// }

// const Card = (cardProps: CardProps) => {
//   return (
//     <h2>{cardProps.title}</h2>
//   )
// }

// const App = () => {
//   return (
//     <>
//       <h2>Functional Arror Component</h2>
//       <Card title="Star Wars"/>
//       <Card title="Avatar"/>
//       <Card title="The Lion King"/>
//     </>
//   )
// }



export default App
