import React, { useEffect, useState } from 'react';

const ModLibrary = () => {
    const [mods, setMods] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('popularity');

    useEffect(() => {
        // Fetch mods from mods.html or a relevant API
        fetch('/mods.html')
            .then(response => response.text())
            .then(data => {
                // Parse the mods data from the HTML
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const modElements = doc.querySelectorAll('.mod'); // Assuming mods are listed with a class 'mod'
                const modList = Array.from(modElements).map(mod => ({
                    name: mod.querySelector('.mod-name').textContent,
                    popularity: parseInt(mod.querySelector('.mod-popularity').textContent, 10),
                    downloadLink: mod.querySelector('.mod-download').getAttribute('href'),
                }));
                setMods(modList);
            });
    }, []);

    const filteredMods = mods.filter(mod => 
        mod.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedMods = filteredMods.sort((a, b) => {
        if (sortOption === 'popularity') {
            return b.popularity - a.popularity;
        }
        return a.name.localeCompare(b.name);
    });

    const handleAddMod = (mod) => {
        // Logic to add mod to the user's profile
        // For webapp, this will trigger a download
        const link = document.createElement('a');
        link.href = mod.downloadLink;
        link.download = `${mod.name}.zip`; // Assuming mods are downloadable as zip files
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <h1>Mod Library</h1>
            <input 
                type="text" 
                placeholder="Search mods..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
                <option value="popularity">Sort by Popularity</option>
                <option value="name">Sort by Name</option>
            </select>
            <ul>
                {sortedMods.map(mod => (
                    <li key={mod.name}>
                        {mod.name} - Popularity: {mod.popularity}
                        <button onClick={() => handleAddMod(mod)}>Add Mod</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ModLibrary;