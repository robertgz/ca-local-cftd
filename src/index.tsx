import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { GQLApolloClient } from './GraphQL/GQLApolloClient';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import { Links } from './Links';
// import { CandidateCard } from './candidate/CandidateCard';
// import CandidatesAppBar from './candidates/CandidatesAppBar';

// const candidateId = 'd3d1c6e7-0add-49f1-9b3d-e9289e7efcf6|2022';
// const candidateId = 'be0a57fb-c0f0-bbd5-0d42-44a6560cbd21|2020';
// const candidateId = '24738d25-2b55-4ef8-b78e-dcc4442a6327|2020';
/**
 * Main sections of the app
 * Candidates
 * Committees
 * Measures
 * Contributors
 * Demographics
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename='/ca-local-cftd'> */}
    <BrowserRouter>
      {/* <GQLApolloClient> */}
        <Routes>

          <Route 
            path="/"
            element={<Navigate to="links" replace />}
          >
          </Route>

          <Route path="links" element={<Links/>}></Route>
          {/* <Route path="candidate" element={<CandidateCard candidateId={candidateId} />}></Route>
          <Route path="candidates" element={<CandidatesAppBar />} /> */}

          <Route path="app" element={<App/>}></Route>
        </Routes>
      {/* </GQLApolloClient> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
