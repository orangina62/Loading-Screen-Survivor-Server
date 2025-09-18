// Garry's Mod Loading Screen Configuration
// This file contains all the customizable settings for your loading screen

var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 * Example: Config.title = "My Custom Server";
 */
Config.title = "";

/**
 * Enable map text in the top left corner of the screen?
 * Shows "Map: [mapname]" when enabled
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 * Shows the player's Steam ID when enabled
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 * Shows rotating messages on the screen
 */
Config.enableAnnouncements = false;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 * Example: ["Welcome to our server!", "Join our Discord!", "Have fun!"]
 */
Config.announceMessages = [
  "",
  ""
];

/**
 * How many milliseconds for each announcement?
 * only works if enableAnnouncements = true
 * 3000 = 3 seconds
 */
Config.announcementLength = 3000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 * Example: Config.backgroundImage = "my-background.jpg";
 * Leave empty to use default image
 */
Config.backgroundImage = "";

/**
 * Enable debug messages?
 * Set to true to see console messages for troubleshooting
 * Set to false for production use
 */
Config.enableDebug = false;
