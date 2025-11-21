import './App.css'
import StudentForm from './components/StudentForm'
import StudentSection from './components/StudentSection'
import StudentProvider from './contexts/student' 

function App() {
  return (
    <StudentProvider>
      <div>
        <StudentForm /> 
        <StudentSection />     
      </div>
    </StudentProvider>
  )
}

export default App
