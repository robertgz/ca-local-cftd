import { createContext } from "react";

interface Candidate {
  id: string;
  setID: (id: string) => void;
}

// Every CandidateContextLayout component has its own CandidateContext with state
export const CandidateContext = createContext<Candidate>({id: '', setID: () => {}});
