interface Checklist {
  title: string;
  categories: ChecklistCategory[];
  items: ChecklistItem[];
}

interface ChecklistCategory {
  name: string;
  items: ChecklistItem[];
}

interface ChecklistItem {
  description: string;
  isChecked: boolean;
}
