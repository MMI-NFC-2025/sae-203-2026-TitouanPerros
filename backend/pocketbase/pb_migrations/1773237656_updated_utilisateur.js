/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3991748807")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1411584853",
    "max": 0,
    "min": 0,
    "name": "Nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "email4044620662",
    "name": "Mail",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4023547545",
    "max": 0,
    "min": 0,
    "name": "Sujet",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2030045667",
    "max": 0,
    "min": 0,
    "name": "Message",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3991748807")

  // remove field
  collection.fields.removeById("text1411584853")

  // remove field
  collection.fields.removeById("email4044620662")

  // remove field
  collection.fields.removeById("text4023547545")

  // remove field
  collection.fields.removeById("text2030045667")

  return app.save(collection)
})
