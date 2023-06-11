const blogService = require('./blog.service');

async function add(req, res) {
    try {
        document = blogService.add(req.body.article);
        res.send(document);
    } catch (error) {
        console.error(error);
    }
}
async function get(req, res) {
    try {
        const documents = blogService.query();
        res.send(documents);
    } catch (error) {
        console.error(error);
    }
}
async function getById(req, res) {
    try {
        const document = blogService.getById(req.body.id);
        res.send(document);
    } catch (error) {
        console.error(error);
    }
}
async function update(req, res) {
    try {
        const document = blogService.update(req.body.id,req.body.article);
        res.send(document);
    } catch (error) {
        console.error(error);
    }
}
async function remove(req, res) {
    try {
        const document = blogService.remove(req.body.id);
        res.send(document);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    add,
    get,
    getById,
    update,
    remove
}