import Student from "./Student"

function App() {
 
  return (
    <>
    <Student name="Auntor" age={22} isStudent={true}/>
    <Student name="Patrick" age={40} isStudent={false}/>
    <Student name="Tom" age={50} isStudent={false}/>
    <Student name="Jenny" age={25} isStudent={true}/>
    </>
  )
}

export default App
