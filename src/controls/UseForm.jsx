import { Stack } from '@mui/material'
import React from 'react'

export const UseForm = (initialValues) => { // , validateOnChange=false,validate
    const [values, setValues] = React.useState(initialValues)
    // const [errors, setErrors] = React.useState({})

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target
    //     setValues({
    //       ...values,
    //       [name] : value
    //     })
    //     // if(validateOnChange) {
    //     //     validate({ [name] : value })
    //     // } 
    //   }
    // const resetForm = () => {
    //     setValues(initialValues)
    //     // setErrors({})
    // }
    return {
        values,
        setValues,
        // errors,
        // setErrors,
        // handleInputChange,
        // resetForm,
    }
}


export const Form = (props) => {
    const { children, ...other } = props
    
    return(
        <div>
            <Stack
                sx={{
                    display: "grid",
                    columnGap: 2,
                    rowGap: 1,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}
            >
                <form autoComplete='off' {...other}>
                    {props.children}
                </form>
            </Stack>
        </div>
        
    );
}
