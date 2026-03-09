/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file1666423489",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "gallerie",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file1666423489",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "gallerie",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
