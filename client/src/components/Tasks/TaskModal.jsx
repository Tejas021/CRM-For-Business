import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { publicRequest } from '../../axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
};
const TaskModal = ({ open, setOpen, location, task , setTask }) => {

    const [search, setSearch] = useState('')
    const [res, setRes] = useState([])
    

    useEffect(() => {
        publicRequest.post('/auth/search', { search }).
            then(r => setRes(r.data)).
            catch(err => console.log(err))
    }, [search])

    const createTask = (user)=>{
        console.log(user);
        publicRequest.post('/task/create-task',{
            assignedTo:user,
            assignedBy:location.state.assignedBy,
            title:location.state.title,
            hours:location.state.time,
            budget:location.state.budget,
            description:location.state.description,
        }).then(r=>{
            setOpen(false);
            setTask(r.data)
        }).catch(err=>console.log(err))
    }

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TextField
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ width: '100%', height: '40px', marginBottom: '15px' }} id="filled-basic" placeholder="Assign To" variant="filled" />

                <div style={{
                    maxHeight:'400px',
                    overflowY:'scroll'
                }}>
                    {
                        res.map(user => {
                            return <>
                                <div 
                                onClick={()=>createTask(user.email)}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '5px',
                                    cursor: 'pointer'
                                }}>
                                    {user.email}
                                </div>
                                <hr />
                            </>
                        })
                    }



                </div>
            </Box>
        </Modal>
    )
}

export default TaskModal