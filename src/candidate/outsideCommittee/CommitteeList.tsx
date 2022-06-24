import * as React from 'react';
import { FunctionComponent } from 'react';
import { OutsideSpendingCommittee } from '../models/OutsideSpendingCommittee';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';

export interface OutsideSpendingProps {
  committees: OutsideSpendingCommittee[]; 
  itemText: string;
}
export const CommitteeList: FunctionComponent<OutsideSpendingProps> = (props: OutsideSpendingProps) => {
  const {committees, itemText} = props;

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const listItems = getListItems(committees);  

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={itemText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {listItems}
        </List>
      </Collapse>

    </React.Fragment>
  );
}

function getListItems(committees: any[]) {
  return committees.map((committee) => (
    <ListItem button key={committee.id.toString()}  >
      <ListItemText secondary={committee.name} primary={'$'+ committee.sum + ` spent by Committee:`}/>
    </ListItem>
  ));
}
