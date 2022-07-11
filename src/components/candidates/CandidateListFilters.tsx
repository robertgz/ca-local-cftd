import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import React from "react"
import { AgencySelect } from "./AgencySelect";
import { CandidateFilters } from "../../models/CandidateFilters";
import { ElectionSelect } from "./ElectionSelect";
// import { OfficeSelect } from "./OfficeSelect";
import { YearSelect } from "./YearSelect";

interface Props {
  filters: CandidateFilters;
  // setFilters: any;
  // setFilters(value: ({})): void;
  setFilters: (value: object) => void;
}

// query the graph to find out the available years
// ... offices
// ... districts
export const CandidateListFilters = (props: Props) => {

  const { filters, setFilters } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    })
    console.log({filters})
  };

  return(
    <React.Fragment>
      Candidate Filters
      <AgencySelect filters={filters} setFilters={setFilters}/>
      {/* <YearSelect filters={filters} setFilters={setFilters}/> */}
      <ElectionSelect filters={filters} setFilters={setFilters}/>
      {/* <OfficeSelect filters={filters} setFilters={setFilters}/> */}
      {/* <FormGroup>
        <FormControlLabel 
          control={
            <Switch 
              checked={filters.inPrimaryElection}
              onChange={handleChange}
              name="inPrimaryElection"
            />
          } 
          label="Qualified for Primary" 
        />
        <FormControlLabel 
          control={
            <Switch 
              checked={filters.inGeneralElection}
              onChange={handleChange}
              name="inGeneralElection"
            />
          } 
          label="Qualified for General" 
        />
      </FormGroup> */}
    </React.Fragment>
  ); 
}
