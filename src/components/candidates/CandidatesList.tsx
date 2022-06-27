import { useQuery } from "@apollo/client";
import React from "react"
import { GET_CANDIDATES } from "../../GraphQL/GetCandidatesQuery";
import { CandidateFilters } from "../../models/CandidateFilters";
import CandidateCardLayout from "../layouts/CandidateCardLayout";
import { CandidateContextLayout } from "../layouts/CandidateContextLayout";
// import PropTypes from 'prop-types';

interface Props {
  filters: CandidateFilters;
}

export const CandidatesList = (props: Props) => {
  const { filters } = props;

  if (!filters) return;
  
  const GetCandidates = (filters: CandidateFilters) => {
    const { year, ...candidateFilters } = filters;
  
    const { loading, error, data } = useQuery(GET_CANDIDATES,  {
      variables: { filters: candidateFilters },
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    const {candidates} = data;
  
    return candidates.map((candidate: any) => (
      <React.Fragment key={candidate.id}>
        <CandidateContextLayout>
          <CandidateCardLayout candidateId={candidate.id}  />
        </CandidateContextLayout>
      </React.Fragment>
    ));
  }

  return GetCandidates(filters);
}
