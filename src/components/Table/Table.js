import './Table.css'
import contacts from '../../contacts.json'
import Contact from '../Contact/Contact'
import { useState } from 'react'

function Table() {

let fiveFirstContacts = contacts.slice(0,6)

const [contact, setContact] = useState(fiveFirstContacts)

const handleClick = () => {
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)]

  setContact([randomContact, ...contact]);

  console.log(setContact)

}



  return(
    <div className='row text-center justify-content-center'>
      <button onClick={handleClick} className='btn btn-primary w-25 mb-3'>Add Random Contact</button>
      <div className='row d-flex justify-content-center '>
        <div className='col'>
          <h3>Picture</h3>
        </div>
        <div className='col'>
          <h3>Name</h3>
        </div>
        <div className='col'>
          <h3>Popularity</h3>
        </div>
        <div className='col'>
          <h3>Won Oscar</h3>
        </div>
        <div className='col'>
          <h3>Won Emmy</h3>
        </div>       
      </div>
      
        <ul className='row '>
          {contact.map((contact, i) => (
            <Contact key={i} name={contact.name} pictureUrl={contact.pictureUrl} popularity={contact.popularity} wonOscar={contact.wonOscar} wonEmmy={contact.wonEmmy} />
          ))}
        </ul>

    </div>


  )
}

export default Table