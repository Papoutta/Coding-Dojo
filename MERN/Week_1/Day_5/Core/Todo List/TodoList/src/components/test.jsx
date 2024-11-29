import { useState, useEffect } from 'react'
import './App.css'
import PlansComponents from './components/PlanComponents'
import FormComponents from './components/FormComponents'

function App() {
  const getPlansFromSrorage = () =>{
    const savedPlans = JSON.parse(localStorage.getItem("plans"))
    if(savedPlans) {
      return savedPlans
    }else return []
  };
  const savedPlans = getPlansFromSrorage();
  // const [plans, setPlans] = useState([
  //   { content: "Wake up at 6am", status: false },
  //   { content: "Eat breakfast", status: true }])
  const [plans, setPlans] = useState(savedPlans)
  const addPlan = (newPlan) => {
    setPlans([...plans, newPlan]) // 5s
    // const newPlans  = [...plans, newPlan]
    localStorage.setItem("plans", JSON.stringify([...plans, newPlan])) //2s
  }
  const updatePlan = (index) => {
    const plansUpdated = [...plans]
    plansUpdated[index].status = !plans[index].status
    setPlans(plansUpdated)
    localStorage.setItem("plans", JSON.stringify(plansUpdated))
  }
  const deletePlan = (index) => {
    const filtredPlans = plans.filter((plans, idx) => idx != index)
    setPlans(filtredPlans)
    localStorage.setItem("plans", JSON.stringify(filtredPlans))
  }
  return (
    <>
      <h1>Add Your Plans for Today</h1>
      <FormComponents addPlan={addPlan} />
      <PlansComponents plans={plans} updatePlan={updatePlan} deletePlan={deletePlan} />
    </>
  )
}

export default App