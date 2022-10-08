import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { TextField, Button } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { publicRequest } from "../axios"
import { useSelector } from 'react-redux'
import TaskModal from '../components/Tasks/TaskModal';
import { useNavigate } from 'react-router-dom';

export default function SingleTicketTask() {

    const location = useLocation()
    const navigate = useNavigate()
    const [text, setText] = useState('')
    const user = useSelector(state => state.auth.currentUser)
    const [comments, setComments] = useState([])
    const [open, setOpen] = useState(false);
    const [task, setTask] = useState(null)
    const type = location.pathname.split('/')[1]

    useEffect(() => {
        setComments(location.state.comments)
    }, [location])


    const submitComment = () => {
        const data = location.state.comments.length < 1 ? [{ text: text, name: user.username }] : [...location.state.comments, { text: text, name: user.username }]
        publicRequest.patch(`/ticket/updateTicket/${location.state._id}`, { comments: data }).
            then(r => {
                setComments(r.data.comments);
                setText('')
            }).
            catch(err => console.log(err))
    }

    const closeTicket = () => {
        console.log("state", location.state);
        publicRequest.patch(`/ticket/updateTicket/${location.state._id}`, { status: 'closed' }).then(r => {
            console.log(r.data);
            navigate(`/tickets`);
        })

    }

    return (
        <Container>
            <div style={{
                display: 'flex',
                alignContent: 'center'
            }}>


                <Heading>{location.state.title}</Heading>
                {user.isAdmin && location.state.status !== 'closed' && <>
                    {

                        task ?
                            <Button onClick={() => navigate(`/task/${task._id}`, { state: task })} style={{ height: 'max-content', margin: '10px 0 10px auto', }}>go to task</Button> :
                            <Button onClick={() => setOpen(true)} style={{ height: 'max-content', margin: '10px 0 10px auto', }}>Assign Ticket</Button>

                    }
                </>}
                {
                    user.role === 'client' &&
                        user.email === location.state.assignedBy &&
                        location.state.status !== 'closed' ?
                        <Button
                            style={{
                                margin: '10px 0 10px auto',
                                color: 'red',
                                height: 'max-content'
                            }}
                            onClick={closeTicket}
                            variant="outlined"
                        >
                            Close Ticket
                        </Button> :
                        null
                }
            </div>

            <KeyValueContainer>
                <BoldText>Assigned By:</BoldText>
                <NormalText>{location.state.assignedBy}</NormalText>
            </KeyValueContainer>
            {location.state.assignedTo && <KeyValueContainer>
                <BoldText>Assigned To:</BoldText>
                <NormalText>Akshay</NormalText>
            </KeyValueContainer>}
            <DescriptionContainer>
                <BoldText>Description:</BoldText>
                <NormalText>{location.state.description}
                </NormalText>
            </DescriptionContainer>
            <hr />
            {
                comments.map(c => {
                    return <CommentContainer>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '5px'
                        }}>
                            <AccountCircleIcon />
                            <p style={{ margin: '0 0 0 5px' }}>{c.name}</p>
                        </div>
                        <p>{c.text}</p>
                    </CommentContainer>
                })

            }
            <div>
                <TextField
                    id="filled-multiline-static"
                    placeholder='Enter your comment'
                    multiline
                    rows={3}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    variant="filled"
                    style={{
                        width: '100%',
                        margin: '10px 0'
                    }}
                />
                <Button style={{
                    margin: '10px 0 10px auto'
                }}
                    onClick={() => submitComment()}
                    variant="contained">Submit</Button
                >
                <hr />
            </div>
            <TaskModal location={location} task={task} setTask={setTask} open={open} setOpen={setOpen} />

        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 800px;
    margin: 0 auto;
    margin-top: 160px;
    padding: 24px 48px;
`

const Heading = styled.h1`
    border-bottom: 1px solid #e1e1e2;
    font-size: 48px;
    line-height: 66px;
    color: #130260;
    padding-bottom: 12px;
    margin-bottom: 20px;
    width:80%
`

const KeyValueContainer = styled.div`
    display: flex;
    margin-top: 12px;
`

const BoldText = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #090030;
    margin-right: 8px;
`

const NormalText = styled.p`
    font-size: 15px;
    color: #090030;
    margin-bottom:0
`

const DescriptionContainer = styled.div`
    margin: 12px 0 12px 0;
`
const CommentContainer = styled.div`
    margin: 12px 0 12px 0;
    padding : 10px 5px;
    background-color: #f0f2f5;
`