# Path Of Exile Trading Website

The project uses the PoE official API to search for items, accounts and characters. The feature set is decent but this proof of concept is meant to be built upon, I will continue developing this later on with Typescript, you can use this project anyway you want to as long as you link back here if you use any of my code.

PS: The code is very messy as I haven't really remove most of the testing code, will get around to this as I'm converting the project to Typescript and most likely Python for backend.

![demofile](https://raw.githubusercontent.com/smallobject/poe-trading-site/master/images/demo.gif 'Demo Image')

# Features:

- Auto-complete on search with corrent names to be used for1 the API (it's very picky).
- Auto searched the unique itemIDs after fetching the item list and then renders it.
- Renders the correct socket color, number and links.
- Fetch the characters of an account. (as long as it's public)
- Renders a list of items if a character is fetched.
- Renders an item from the characters item list.
- Status of seller. (AFK, Online, Offline)
- Auto-copies the buyout whisper if you click on whisper.
- Socket searching for items. (This can be expanded greatly)
- Utility functions for sockets, links that can be customized if new sockets or more links are added.

# Todo:

- [x] Fix linking sockets, currently does not link properly.
- [x] Figure out a way to read the API sockets and render the links correctly. (this took a bit..)
- [ ] Add more options for searching other than sockets.
- [ ] Improve UI/UX.
- [ ] Add Ladder/Mods list.
- [ ] Optimize for mobile.
- [ ] Improve performance, like locally storing the items for auto-completion.

# Used

- React
- Redux & redux-thunk
- TailwindCSS
- NodeJS & Express

# Usage

The project is using concurrently to run both server and client at once.

## Clone the repo

```
gh repo clone smallobject/poe-trading-site
```

## Change directory to server

```
cd server
```

Run `npm run dev`
I'm using concurrently to run both server and client at once.

```
npm run dev
// It's running the following lines
// "dev": "concurrently \"npm start\" \"cd .. && cd client && npm start\""
```
