# OPS - Heroku boilerplate

## TODO
1. You will need to create 2 apps on heroku
2. Point both apps to the git-repo
3. Add to both apps: [heroku-buildpack-multi-procfile](https://github.com/heroku/heroku-buildpack-multi-procfile)
4. Add env variable in the settings section for the frontend. `PROCFILE=packages/frontend/Procfile`
5. Add env variable in the settings section for the backend. `PROCFILE=packages/backend/Procfile`

The `Procfile` will be copied to the root of the project on build time and its responsable for
calling the right command to serve the files. in case of the `backend` its `web: node packages/backend/dist/index.js` 


## NOTE
The frontend is served with the packages/frontend/server.js.
The `server.js` file will be renamed to `index.js` and moved to the `dist` folder in compile time.
