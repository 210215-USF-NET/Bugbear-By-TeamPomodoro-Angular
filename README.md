<h1> <img src="resources/icon/bugbearIcon_64.png" alt="Bugbear" height="42" width="42" align="top" /> Bugbear - D&D Campaign Manager </h1>
 
## Overview  
*Bugbear is a web application designed to help a Game Master manage their Dungeon and Dragons campaign.  Bugbear will provide a single place for the GM to store all the relevant information about their campaign’s PCs, NPCs, locations, and established story in a single place.  The story is stored in sections that can be edited or deleted individually.  NPCs are all stored together in a table, each with their own description and relevant information.  Players will have access to their Player Sheet stored server-side so they don’t have to worry about losing it.  All their items, health, and player stats can be adjusted freely and those changes will be recorded in a database.  Game Masters will have access to all this information for them to reference when planning their sessions and preparing campaign content.  GMs can plan combat encounters, as well as prepare settings with detailed descriptions ahead of time.  During the session, both Players and the Dungeon Master will have access to a Dice Roller to roll dice and record the result for all to see.*

## Tech Stack
 - C#
 - Entity Framework Core
 - PostgreSql
 - Angular
 - Azure Devops
 - Sonar Cloud
 - ASP.NET MVC
 - D&D 5e API
 - xUnit
 - Serilog


## Minimum Viable Product
**Both Users and GMs:**
- Account creation and management
- View story objects
- View uploaded Maps
- View NPCs
- View PCs
- View locations
- View previous encounters
- Roll dice

**User-Targeted Features:**
- Selecting a character within a campaign

**GM-Targeted Features:**
- Creating template characters for user’s to select
- Creating, Viewing, Editing, Deleting story objects
- Uploading/Linking to Images for Maps
- Create, Edit, Delete NPCs
- Create, Edit, Delete PCs
- View Items, Rules etc from D&D5e API
- Create, Edit, Delete Locations
- Create, Edit, Delete all Encounters


## Stretch Goals
- Live chat feature:
	- Roll dice so that all users can see the roll.
- Interact with users! 
- Virtual Table Top:
	- An interactive map where players can move tokens and interact with the battle scene.
	- The ability to draw on the map.
- Shop implementation:
	- A place where PC can go and get weapons, armor and trinkets!
	- A location to distribute items
- Stories:
- Rather than storing the story in individual “story objects”, we would like to have GMs writing in a word-processor-like environment that is easier to use than smaller paragraph sized chunks of story.
- Detailed game mechanics:
	- A link or pop up to certain game mechanics when they are necessary.
