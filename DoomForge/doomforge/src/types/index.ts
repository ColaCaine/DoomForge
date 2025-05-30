export interface Profile {
    id: string;
    name: string;
    createdAt: Date;
    mods: string[];
}

export interface Mod {
    id: string;
    name: string;
    description: string;
    popularity: number;
    downloadUrl: string;
}

export interface ModLibrary {
    mods: Mod[];
    sortBy: 'popularity' | 'name' | 'dateAdded';
    searchQuery: string;
}

export interface ThreeDotMenuProps {
    onOpenFolder: () => void;
}

export interface PlaceholderGZDoomProps {
    // Add any specific props needed for the GZDoom placeholder
}

export interface PlaceholderZDLProps {
    // Add any specific props needed for the ZDL placeholder
}