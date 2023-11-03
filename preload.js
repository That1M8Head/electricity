const { contextBridge } = require('electron');
const fs = require('fs');
const marked = require('marked');

contextBridge.exposeInMainWorld('electron', {
    fs: fs,
    marked: () => marked,
});
