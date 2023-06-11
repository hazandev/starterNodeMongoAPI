const dbService = require("../../services/db.service");
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    add,
    update,
    remove
}

const collectionName = 'user';
async function query() {
    try {
        const collection = await dbService.getCollection(collectionName);
        const users = await collection.find().toArray();
        return users
    } catch (error) {
        console.error("cannot find user");
        throw err;
    }
}
async function getById(id) {
    try {
        const collection = await dbService.getCollection(collectionName);
        const user = await collection.findById({ id }).toArray();
        return user
    } catch (error) {
        console.error("cannot find user");
        throw err;
    }
}
async function add(obj) {
    try {
        const collection = await dbService.getCollection(collectionName);
        const document = await collection.insertOne(obj).toArray();
        return document
    } catch (error) {
        console.error("cannot add user");
        throw err;
    }
}
async function update(id, obj) { 
    try {
        const collection = await dbService.getCollection(collectionName);
        const document = await collection.findOneAndUpdade(id, obj).toArray();
        return document
    } catch (error) {
        console.error("cannot update user");
        throw err;
    }}
async function remove() { 
    try {
        const collection = await dbService.getCollection(collectionName);
        const document = await collection.findOneAndDelete(id, obj).toArray();
        return document
    } catch (error) {
        console.error("cannot delete user");
        throw err;
    }}
