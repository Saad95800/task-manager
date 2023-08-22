import React, {useState} from 'react'

export default function FormAddTable({addTable}) {

    const [title, setTitle] = useState('')

  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        if(title.length > 0){
            addTable(title)
        }else{
            alert('Veuillez saisir un titre au tableau')
        }
    }}>
        <div className="form-group">
            <label>Ajouter un tableau</label>
            <input type="text" className="form-control" value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }} />
        </div>
        <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Ajouter"/>
        </div>
    </form>
  )
}
