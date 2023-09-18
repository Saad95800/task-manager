import React, {useState} from 'react'

export default function FormAddTable({addTable, closeFormAddTable, displayMessage}) {

    const [title, setTitle] = useState('')

  return (
    <div className="popup-overlay">
        <div className="m-3 border p-3 rounded-3 bg-forms" style={{margin: 'auto', backgroundColor: '#ffffffd6'}}>
            <button className="btn btn-danger" onClick={()=>{
                closeFormAddTable()
            }}>Fermer</button>
            <form onSubmit={(e)=>{
                e.preventDefault()
                if(title.length > 0){
                    addTable(title)
                    closeFormAddTable()
                }else{
                    // displayMessage("Veuillez saisir un titre au tableau !", "error")
                }
            }}>
                <div className="form-group">
                    <label>Ajouter un tableau</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{
                        setTitle(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary mt-3" value="Ajouter"/>
                </div>
            </form>        
        </div>        
    </div>


  )
}
