import React, {useState, useContext} from 'react';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import {ChecklistContext} from '../../components/ChecklistsProvider';

interface AddChecklistProps {
  onSave: () => void;
}

const AddChecklist: React.FC<AddChecklistProps> = ({onSave}) => {
  const [checklistName, updateChecklistName] = useState<string>('');
  const {checklists, updateChecklists} = useContext(ChecklistContext);

  return (
    <>
      <TextField
        id="add-checklist"
        placeholder="Checklist name"
        margin="normal"
        value={checklistName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          event.preventDefault();
          updateChecklistName(event.target.value);
        }}
      />
      <Fab
        color="primary"
        variant="extended"
        aria-label="Create Checklist"
        onClick={() => {
          const newChecklists = [...checklists];
          newChecklists.push({title: checklistName, categories: [], items: []});
          updateChecklists(newChecklists);
          onSave();
        }}
      >
        Save
      </Fab>
    </>
  );
};

export default AddChecklist;
