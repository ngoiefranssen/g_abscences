import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectedClasse = ({
    selectedClass,
    setSelectedClass,
    student,
    handleOnChangeClass,
}) => {
    return (
        <Grid>
            <FormControl sx={{
                m:3,
                width: "17%",
                marginLeft: "70%",
            }} size="small">
                <InputLabel id="demo-simple-select-label">Classes</InputLabel>
                <Select
                    id="classe"
                    name="classe"
                    value={selectedClass}
                    // label="Classes"
                    onChange={handleOnChangeClass}
                >
                    <MenuItem value="">None</MenuItem>
                    {/* {
                        ?.map((classed) => (
                            <MenuItem
                                value={20}
                                key={classed?.id}
                                label={classed?.numero}
                            >
                                {classed?.numero}
                            </MenuItem>
                        ))
                    } */}
                    
                </Select>
            </FormControl>
        </Grid>
    )
}

export default SelectedClasse