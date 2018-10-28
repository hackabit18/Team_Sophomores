const electron = require('electron');
const path = require('path');
const url = require('url');

const { app, BrowserWindow, Menu, ipcMain, globalShortcut } = electron;

let mainWindow;

//Listen for app to be ready
app.on('ready', function () {
    //Create a new Window
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: 1281,
        height: 800,
        minWidth: 1281,
        minHeight: 800,
        show: false,
        //icon
        icon: path.join(__dirname, 'assets/icons/NOAH.png')
    });
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
    //Load Html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true,
    }));
    //Quit app when closed
    mainWindow.on('closed', function () {
        app.quit();
    });


    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Insert Menu
    Menu.setApplicationMenu(mainMenu);

    globalShortcut.register('CommandOrControl+Q', () => {
        app.quit();
    })

    
});




//Create menu template
const mainMenuTemplate = [
    {
        label: 'Alert',
        submenu: [
            {
                label: 'Generate alert',
            }, {
                label: 'Rematch result',
            },
            {
                label: 'Alert history',
            },
            {
                label: 'Falsify alert',
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Map',
                
            }, {
                label: 'Satellite',
            },
            {
                label: 'Image terrain',
            },
            {
                label: 'Evacuation routes',
            },
            {
                label: 'Prediction',
            }
        ]
    },
    {
        label: 'Option',
        submenu: [
            {
                label: 'History',
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'Tutorial',
            }, {
                label: 'Report Bug',
            },
            {
                label: 'About',
            },
            {
                label: 'Contribute',
            }
        ]
    }
];

//If mac ad empty object to menu
if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}

//Add developer tool items if not in production
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' :
                    'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            }, {
                role: 'reload'
            }
        ]
    })
}