import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material"
import { publicRequest } from '../../../src/axios';



export default function UserTable() {


    const [users, setUsers] = React.useState([])


    React.useEffect(() => {
        publicRequest.get("/user/getAllUsers").then(res => res.data).then(res => setUsers(res))
    }, [])


    const deleteUser = async (userId) => {

        try {
            const res = await publicRequest.delete(`/user/deleteUser/${userId}`)
            console.log('response', res);
            publicRequest.get("/user/getAllUsers").then(res => res.data).then(res => setUsers(res))
        } catch (err) {
            // setError(err.response.data)
            console.log(err)
        }
    }
    return (
        <TableContainer component={Paper} style={{ marginTop: 150, width: 800, marginRight: 'auto', marginLeft: 'auto' }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell align="center"><b>Email</b></TableCell>
                        <TableCell align="center"><b>Role</b></TableCell>
                        <TableCell align="center"><b>Actions</b></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {users && users.map((row) => (
                        <TableRow
                            key={row.username}

                        >
                            <TableCell component="th" scope="row">
                                {row.username}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.role}</TableCell>
                            <TableCell align="center" onClick={() => deleteUser(row.id)}>
                                <Button
                                    style={{
                                        margin: '10px 0 10px auto',
                                        color: 'red',
                                        height: 'max-content'
                                    }}
                                    onClick={() => deleteUser(row._id)}
                                    variant="outlined"
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
