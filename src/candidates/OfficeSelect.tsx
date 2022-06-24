import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useQuery } from '@apollo/client';
import { CandidateFilters } from '../candidate/models/CandidateFilters';
import { GET_ELECTIONS } from '../GraphQL/GetElectionsQuery';

interface Props {
  filters: CandidateFilters;
  setFilters: any;
}

export const OfficeSelect = (props: Props) => {
  const { filters, setFilters } = props;
  let disabled = true;

  if (filters?.agencyIds && (filters?.agencyIds?.length > 0)) {
    disabled = false;
  } else {
    disabled = true;
  }


  const handleChange = (event: SelectChangeEvent) => {
    setFilters({
      ...filters,
      // elections: [event.target.value],
      // electionIds: [event.target.value],
    });

  };

  const GetOffices = () => {
    const { loading, error, data } = useQuery(GET_ELECTIONS, {
      variables: { filters: {
        agencyId: filters?.agencyIds?.[0],
        electionYear: filters?.year,
      }},
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>`Error! ${error.message}`</p>;
    const { elections } = data;

    const value = (filters?.elections?.[0]) ? (filters?.elections?.[0]) : '';

    return (
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Offices"
        onChange={handleChange}
      >
        { elections?.map((election: any) => (
          <MenuItem key={election.id} value={election.id}>{election.name}</MenuItem>
        ))}
      </Select>
    )
  }

  return (
    <FormControl fullWidth disabled={disabled}>
      <InputLabel id="demo-simple-select-label">Offices</InputLabel>
        <GetOffices/>
    </FormControl>
  );
}
