import React from "react"
import Link from 'next/link';

const Links = () => {
  return(
    <>
      <div>
        <Link href="/candidates" className="ml1 no-underline black">
          Candidates List
        </Link>
      </div>
      <div>
        <Link href={`${encodeURI('/candidate/id/d3d1c6e7-0add-49f1-9b3d-e9289e7efcf6|2022')}`} className="ml1 no-underline black">
          Candidate: Jennifer Campbell | 2020
        </Link>
      </div>
      <div>
        <Link href={`${encodeURI('/candidate/id/be0a57fb-c0f0-bbd5-0d42-44a6560cbd21|2020')}`} className="ml1 no-underline black">
          Candidate: Barbara Bry | 2020
        </Link>
      </div>
      <div>
        <Link href={`${encodeURI('/candidate/id/24738d25-2b55-4ef8-b78e-dcc4442a6327|2020')}`} className="ml1 no-underline black">
          Candidate: Todd Gloria | 2020
        </Link>
      </div>
      <div>
        <Link href="/api/hello" className="ml1 no-underline black">
          API - /hello
        </Link>
      </div>
      <div>
        <Link href="/api/graphql" className="ml1 no-underline black">
          GraphQL API - /api/graphql
        </Link>
      </div>
      <div>
        <Link href="/api/graphql-yoga" className="ml1 no-underline black">
          GraphQL Yoga API - /api/graphql-yoga
        </Link>
      </div>
    </>
  );
}

export default Links;
