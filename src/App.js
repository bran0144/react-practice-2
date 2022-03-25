import React from "react"
import './App.css';
import Navbar from './Navbar';
import data from './data';

export default function App() {

  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })
  return (
   <div>
     <Navbar />
     <section className="cards-list">
      {cards}
     </section>
    
   </div>
  )
}
