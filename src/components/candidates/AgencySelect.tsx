import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useQuery } from '@apollo/client';
import { Agency, GET_AGENCIES } from '../../GraphQL/local/GetAgenciesQuery';
import { CandidateFilters } from '../../models/CandidateFilters';

interface Props {
  filters: CandidateFilters;
  setFilters: any;
}

export const AgencySelect = (props: Props) => {
  const { filters, setFilters } = props;


  const handleChange = (event: SelectChangeEvent) => {
    setFilters({
      ...filters,
      agencyIds: [event.target.value],
    });
  };

  const GetAgencies = () => {
    // const { agencies } = data;
    const { loading, error, data } = useQuery(GET_AGENCIES, {
      context: { clientName: "second" }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>`Error! ${error.message}`</p>;
    console.log( data )
    const { agencies } = data;

    const value = (filters.agencyIds?.[0]) ? (filters.agencyIds?.[0]) : '';

    return (
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Agency"
        onChange={handleChange}
      >
        {agencies?.map((agency: any) => (
          <MenuItem key={agency.id} value={agency.id}>{agency.name}</MenuItem>
        ))}
      </Select>
    )
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Agency</InputLabel>
        <GetAgencies/>
    </FormControl>
  );
}
