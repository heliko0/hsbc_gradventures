# gradventures proj

This is a code bundle for gradventures proj. The original project is available at https://www.figma.com/design/SkaqiufPCMvjRfFsZGBpLH/gradventures-proj.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server for the frontend.

‼️ Run `npm run dev:all` to concurrently start both the backend server and the frontend. This may take a little longer.

To run the server and frontend separately:

```powershell
# Backend - This may take a little longer than expected
# To know if it works, you should see "Forwarding requests to: <URL>"
cd src/server/
node server.js

# Frontend
cd ../../
npm run dev
```

## TODO

Replace `/your-endpoint` with the actual endpoint in `handleOpenBankingAddedContinue()` and any parameters needed. This should've been set in the Cloud Run API code.

If your Cloud Run API has these endpoints:

https://your-cloudrun.run.app/predict
https://your-cloudrun.run.app/analyse
https://your-cloudrun.run.app/data/process

Then in your frontend, you'd call:

```typescript
// To call /predict on Cloud Run:
await api.post("/predict", { data: "something" });

// To call /analyse on Cloud Run:
await api.post("/analyse", { input: "test" });

// To call /data/process on Cloud Run:
await api.post("/data/process", { values: [1, 2, 3] });
```
