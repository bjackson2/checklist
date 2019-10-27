import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox';

interface ChecklistItemProps {
  item: ChecklistItem;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({item: {id, description}}) => {
  const [isChecked, updateIsChecked] = useState(false);
  const labelId = `checkbox-item-${id}`;

  return (
    <ListItem dense button onClick={(): void => updateIsChecked(!isChecked)}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={isChecked}
          tabIndex={-1}
          disableRipple
          inputProps={{'aria-labelledby': labelId}}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={description} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ChecklistItem;
