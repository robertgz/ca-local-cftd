import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CandidatesList } from './CandidatesList';
import { CandidateListFilters } from './CandidateListFilters';
import { Drawer, IconButton, Paper } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { CandidateFilters } from '../candidate/models/CandidateFilters';

interface Props {
}

function ElevationScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function CandidatesAppBar(props: Props) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const defaultFilters: CandidateFilters = {
    // agency: '',
    // year: '2020',
    years: ['2020'],
    offices: ['mayor'],
    // districts: ['1'],
    inPrimaryElection: false,
    inGeneralElection: false,
  };
  const [filters, setFilters] = React.useState(defaultFilters);

  const getDrawer = () => {
    return (
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        {/* {list(anchor)} */}
        <Paper >
          <CandidateListFilters filters={filters} setFilters={setFilters}></CandidateListFilters>
        </Paper>
      </Drawer>
    )
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll >
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Candidates
            </Typography>
            <Box >
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerOpen}
                color="inherit"
              >
                <FilterListIcon />
              </IconButton>

            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          <CandidatesList filters={filters}></CandidatesList>
        </Box>
      </Container>
      {getDrawer()}
    </React.Fragment>
  );
}