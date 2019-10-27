import React, {useState, useContext} from 'react';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import {ChecklistContext} from '../../components/ChecklistsProvider';

interface AddChecklistItemProps {
  checklistId: string;
  onSave: () => void;
}

interface AddChecklistItemArgs {
  checklistId: string;
  checklists: Checklist[];
  checklistItemName: string;
  updateChecklists: React.Dispatch<React.SetStateAction<Checklist[]>>;
}

const addChecklistItem = ({
  checklistId,
  checklists,
  updateChecklists,
  checklistItemName,
}: AddChecklistItemArgs): void => {
  const newChecklists = [...checklists];
  const checklist = newChecklists.find(cl => cl.id === checklistId);

  if (checklist && checklist.items) {
    checklist.items.push({id: '123', description: checklistItemName, isChecked: false});
  }

  updateChecklists(newChecklists);
};

const AddChecklistItem: React.FC<AddChecklistItemProps> = ({checklistId, onSave}) => {
  const [checklistItemName, updateChecklistItemName] = useState('');
  const {checklists, updateChecklists} = useContext(ChecklistContext);

  return (
    <>
      <TextField
        id="add-checklist"
        placeholder="Checklist item name"
        margin="normal"
        value={checklistItemName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          event.preventDefault();
          updateChecklistItemName(event.target.value);
        }}
      />
      <Fab
        color="primary"
        variant="extended"
        aria-label="Create Checklist Item"
        onClick={(): void => {
          addChecklistItem({checklistId, checklistItemName, checklists, updateChecklists});
          onSave();
        }}
      >
        Save
      </Fab>
    </>
  );
};

export default AddChecklistItem;
