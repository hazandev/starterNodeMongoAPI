const blogService = require('./blog.service');

async function post(req, res) {
    try {
        document = await blogService.add(req.body.article);
        res.send(document);
    } catch (error) {
        console.error(error);
        res.send({err: error});
    }
}
async function get(req, res) {
    try {
        const documents = await blogService.query();
        res.send(documents);
    } catch (error) {
        console.error(error);
        res.send({err: error});
    }
}
async function getById(req, res) {
    try {
        const document = await blogService.getById(req.body.id);
        res.send(document);
    } catch (error) {
        console.error(error);
        res.send({err: error});
    }
}
async function update(req, res) {
    try {
        const document = await blogService.update(req.body.id,req.body.article);
        res.send(document);
    } catch (error) {
        console.error(error);
        res.send({err: error});
    }
}
async function remove(req, res) {
    try {
        const document = await blogService.remove(req.body.id);
        res.send(document);
    } catch (error) {
        console.error(error);
        res.send({err: error});
    }
}

module.exports = {
    post,
    get,
    getById,
    update,
    remove
}