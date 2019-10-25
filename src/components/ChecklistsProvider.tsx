import React, {useState} from 'react';

interface ChecklistState {
  checklists: Checklist[];
  updateChecklists: React.Dispatch<React.SetStateAction<Checklist[]>>;
}

export const ChecklistContext = React.createContext<ChecklistState>({
  checklists: [],
  updateChecklists: () => {},
});

const Provider: React.FC = ({children}) => {
  const [checklists, updateChecklists] = useState<Checklist[]>([]);

  return (
    <ChecklistContext.Provider value={{checklists, updateChecklists}}>
      {children}
    </ChecklistContext.Provider>
  );
};

export default Provider;
