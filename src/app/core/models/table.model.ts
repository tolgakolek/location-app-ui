import { Campus } from './campus.models';

// Table data
export interface Table extends Campus {
    
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
