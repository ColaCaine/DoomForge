# GZDoom Mod Manager Web App

This project is a web application designed to manage GZDoom mods using a user-friendly interface. It allows users to create profiles, manage mod installations, and provides a library of popular mods.

## Features

- **Profile Management**: Users can create and manage profiles, which are stored in a cache folder on their device.
- **Mod Library**: A comprehensive library of mods sorted by popularity, with options to search and filter.
- **Three-Dot Menu**: Easily access profile folders on your computer.
- **Placeholder Integrations**: Placeholder components for GZDoom and ZDL mod manager, which can be replaced with actual implementations later.

## Project Structure

```
gzdoom-mod-manager-webapp
├── public
│   ├── index.html          # Main entry point for the web application
│   ├── mods.html           # Layout for the mod library
│   └── assets
│       └── logo.svg        # Logo asset for the application
├── src
│   ├── App.tsx             # Main application component
│   ├── components
│   │   ├── ProfileManager.tsx  # Component for managing user profiles
│   │   ├── ModLibrary.tsx      # Component for displaying the mod library
│   │   ├── ThreeDotMenu.tsx    # Component for the three-dot menu
│   │   └── PlaceholderGZDoom.tsx # Placeholder for GZDoom integration
│   │   └── PlaceholderZDL.tsx   # Placeholder for ZDL integration
│   ├── cache                  # Folder for user-created profiles
│   └── types
│       └── index.ts           # Type definitions for the application
├── placeholder-gzdoom
│   └── README.md              # Documentation for GZDoom placeholder
├── placeholder-zdl
│   └── README.md              # Documentation for ZDL placeholder
├── package.json                # npm configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/gzdoom-mod-manager-webapp.git
   ```
2. Navigate to the project directory:
   ```
   cd gzdoom-mod-manager-webapp
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

This will launch the web app in your default browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.