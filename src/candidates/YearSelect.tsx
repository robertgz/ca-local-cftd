import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useQuery } from '@apollo/client';
import { CandidateFilters } from '../candidate/models/CandidateFilters';
import { GET_YEARS } from '../GraphQL/GetYearsQuery';

interface Props {
  filters: CandidateFilters;
  setFilters: any;
}

export const YearSelect = (props: Props) => {
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
      years: [event.target.value],
    });

  };
  console.log({filtersE: filters});

  const GetYears = () => {
    const { loading, error, data } = useQuery(GET_YEARS, {
      variables: { filters: {
        agencyId: filters?.agencyIds?.[0],
      }},
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>`Error! ${error.message}`</p>;
    console.log({data});

    const { electionYears } = data;
    console.log({electionYears});

    const value = (filters?.years?.[0]) ? (filters?.years?.[0]) : '';

    console.log({value});

    return (
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Years"
        onChange={handleChange}
      >
        { electionYears?.map((electionYear: any) => (
          <MenuItem key={electionYear.year} value={electionYear.year}>{electionYear.year}</MenuItem>
        ))}
      </Select>
    )
  }

  return (
    <FormControl fullWidth disabled={disabled}>
      <InputLabel id="demo-simple-select-label">Years</InputLabel>
        <GetYears/>
    </FormControl>
  );
}
