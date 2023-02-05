import { TextField } from '@mui/material'
import React from 'react'
import Controllers from '../../controls/Controllers'

const SearchClass = () => {
    const [filter, setFilter] = React.useState({ fn: (items) => { return items } })

    const handleSearchChange = (e) => {
        let target = e.target
        setFilter({
          fn: (items) => {
            if(target.value = '')
              return items
            else
              return items.filter((x) => x.nomClasse.toLowerCase().includes(target.value))
          }
        })
      }
    return (
       <Controllers.InputController
            sx={{ width : '75%' }}
                label='Search Employee'
                InputProps= {{
                startAdornment: (
                    <InputAdornment position='start'>
                        <Search />
                    </InputAdornment>
                )
            }}
            onChange={handleSearchChange}
       />
    )
}

export default SearchClass