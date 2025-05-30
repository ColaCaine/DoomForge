import React from 'react';

interface ThreeDotMenuProps {
    onOpenFolder: () => void;
    onDownloadProfile: () => void;
}

const ThreeDotMenu: React.FC<ThreeDotMenuProps> = ({ onOpenFolder, onDownloadProfile }) => {
    return (
        <div className="three-dot-menu">
            <button onClick={onOpenFolder}>Open Folder</button>
            <button onClick={onDownloadProfile}>Download Profile</button>
        </div>
    );
};

export default ThreeDotMenu;