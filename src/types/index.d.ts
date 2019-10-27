interface Checklist {
  id: string;
  title: string;
  categories: ChecklistCategory[];
  items: ChecklistItem[];
}

interface ChecklistCategory {
  name: string;
  items: ChecklistItem[];
}

interface ChecklistItem {
  id: string;
  description: string;
  isChecked: boolean;
}
