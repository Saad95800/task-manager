import React, {useEffect, useState} from 'react'
import { closeFormDropTable, deleteTable } from '../redux/table/TableSlice'
import { store } from '../redux/store'
import { useDispatch } from 'react-redux'
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styleModal } from '../utils/styles'
import { closeFormAddTask } from '../redux/task/TaskSlice';

export default function FormSupTable({tables}) {

    const dispatch = useDispatch()
    const [idTable, setIdTable] = useState(0)

  return (
    <Modal
        open={true}
        onClose={()=>{ dispatch(closeFormDropTable()) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className="m-3 border p-3 rounded-3 bg-forms" style={{...styleModal, backgroundColor: '#ffffffd6'}}>
            <form onSubmit={(e)=>{
                e.preventDefault()
                if(idTable !== 0){
                    dispatch(deleteTable({idTable}))
                    setIdTable(0)            
                }
            }}>
                <Typography>Supprimer un tableau</Typography>
                <div className="form-group">
                    <select value={idTable} className="form-control" onChange={(e)=>{
                        setIdTable(e.target.value)
                    }}>
                        <option value={0}>---</option>
                        {tables.map((table, index)=>{
                            return <option key={index} value={table.id}>{table.title}</option>
                        })}
                    </select>
                    <div className="form-group">
                        <input type="submit" className="btn btn-danger mt-3" value="Supprimer"/>
                    </div>
                </div>
            </form>
        </Box>
    </Modal>
  )
}
