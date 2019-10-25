import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {ChecklistContext} from '../../components/ChecklistsProvider';

const Checklist: React.FC = () => {
  const {title} = useParams();
  const {checklists} = useContext(ChecklistContext);
  const checklist = checklists.find(c => c.title === title);

  if (checklist) {
    return <h1>{checklist.title}</h1>;
  }

  return null;
};

export default Checklist;
