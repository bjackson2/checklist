import React, {useState, useContext} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {Link} from 'react-router-dom';
import {ChecklistContext} from '../../components/ChecklistsProvider';
import AddChecklist from './AddChecklist';

const Checklists: React.FC = () => {
  const {checklists} = useContext(ChecklistContext);
  const [isAdding, updateIsAdding] = useState<boolean>(false);

  return (
    <div>
      <h1>Checklists</h1>
      {checklists.map(({title}) => (
        <div key={title}>
          <Link to={`checklists/${title}`}>{title}</Link>
        </div>
      ))}

      {isAdding && <AddChecklist onSave={(): void => updateIsAdding(false)} />}

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
          Create new checklist
        </Fab>
      </div>
    </div>
  );
};

export default Checklists;
