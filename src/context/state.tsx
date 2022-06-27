import { createContext } from "react";

interface Candidate {
  id: string;
  setID: (id: string) => void;
}

export const CandidateContext = createContext<Candidate>({id: '', setID: () => {}});
