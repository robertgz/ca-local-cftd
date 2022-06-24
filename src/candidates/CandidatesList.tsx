import { useQuery } from "@apollo/client";
import React from "react"
import { CandidateCard } from "../candidate/CandidateCard";
import { GET_CANDIDATES } from "../GraphQL/GetCandidatesQuery";
import { CandidateFilters } from "../candidate/models/CandidateFilters";
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
        <CandidateCard candidateId={candidate.id} />
      </React.Fragment>
    ));
  }

  return GetCandidates(filters);
}
