# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


Package install
npm install ../campaign-finance-downloader

NOTES:
For SouthTech filers
For a filer to be a candidate
Get list of filers
Filter filers to include those with a last name
If there are two filers with the same last name and ballot type check the forms links.
  filers with a 501 will be a candidates, use the for candidate full name
  those without and with a 410 will be a committee, use this to get the committee name for a candidate  

Current URL pattern:
https://www.southtechhosting.com/SanDiegoCounty/CampaignDocsWebRetrieval/
https://www.southtechhosting.com/SanJoseCity/CampaignDocsWebRetrieval/

Sites using SouthTech with different URL pattern:
https://campaigndocs.co.fresno.ca.us/CampaignDocsWebRetrieval/


DATA Modeling
Software: NetFile, SouthTech, SDeFile
Agency: CCV: NetFile, San Diego County: SouthTech, San Diego City: SDeFile 
Jurisdiction: City of Chula Vista, CORONADO UNIFIED SCHOOL, City of Davis, City of San Diego
District: CIty Council District 1, County, State, Fire Protection, Water


Needed for each software: getJurisdictions(), getDistricts()

getJurisdictions() uses election year or date and will return 1 or more Jurisdictions
In SouthTech use 'Ballot Item'
