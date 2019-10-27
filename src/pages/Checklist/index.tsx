import React, {useContext, useState} from 'react';
import {useParams} from 'react-router-dom';
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {ChecklistContext} from '../../components/ChecklistsProvider';
import ChecklistItem from './ChecklistItem';
import AddChecklistItem from './AddChecklistItem';

const Checklist: React.FC = () => {
  const {title} = useParams();
  const {checklists} = useContext(ChecklistContext);
  const [isAdding, updateIsAdding] = useState<boolean>(false);
  const checklist = checklists.find(c => c.title === title);

  if (!checklist) {
    return null;
  }

  return (
    <div>
      <h1>{checklist.title}</h1>
      <p>Items</p>
      <List>
        {checklist.items.map(item => (
          <ChecklistItem key={item.id} item={item} />
        ))}
      </List>
      {isAdding && (
        <AddChecklistItem checklistId={checklist.id} onSave={(): void => updateIsAdding(false)} />
      )}

      <div>
        <Fab
          color="primary"
          variant="extended"
          aria-label="add"
          disabled={isAdding}
          onClick={(): void => {
            updateIsAdding(true);
          }}
        >
          <AddIcon />
          Create new item
        </Fab>
      </div>
    </div>
  );
};

export default Checklist;
