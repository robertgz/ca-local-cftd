import React from "react"
import { Link } from "react-router-dom"

export const Links = (props: any) => {
  return(
    <React.Fragment>
      <div>
        <Link to="/candidates" className="ml1 no-underline black">
          Candidates
        </Link>        
      </div>
      <div>
        <Link to="/candidate" className="ml1 no-underline black">
          Candidate
        </Link>        
      </div>
    </React.Fragment>
  )
}