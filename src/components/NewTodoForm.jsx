import {useState} from 'react'

export default function NewTodoForm({onSubmit}) {
    const [newItem,setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        onSubmit(newItem)
        setNewItem("")
      }
    
  return (
    <div>
        <form onSubmit={handleSubmit} className="new-form-item">
        <div className="form-row">
          <h1>Enter Task</h1>
          <input 
          type="text" 
          id="item" 
          placeholder='Enter Task' 
          onChange={e=>setNewItem(e.target.value)}
          value={newItem} />
        </div>
        <button className="btn">Add</button>
      </form>
    </div>
  )
}
