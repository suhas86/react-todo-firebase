import React from 'react'
import TextField from '@material-ui/core/TextField'
function TodoForm() {
    return (
        <>
            <TextField style={{width:"100%"}} id="outlined-basic" label="Add Todo" variant="outlined" />
        </>
    )
}
export default TodoForm;