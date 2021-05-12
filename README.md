# electron-forge-publisher-google-storage

Google Cloud Storage publisher for Electron Forge.

The publisher will upload the newly compiled application to `<bucket>/<platform>/<application>` path. It will also upload a manifest JSON file with the latest version number and path to the downloadable file under the platform path for easier auto-update logic.

This publisher supports `electron-forge@6`.

## Usage

Example config:

```javascript
{
  name: '@nerdstgamers/electron-forge-publish-google-storage',
  config: {
    projectId: 'my-google-cloud-project',
    bucket: 'bucket-to-store-updates-in',
    public: true,
    storageUrl: 'https://assets.my-project.com',
  },
}
```

`storageUrl` is optional and meant to be used with CNAME'd Google Cloud Storage buckets.

## License

MIT
