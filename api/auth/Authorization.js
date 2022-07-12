//Midleware responsável para verificar a autorização das rotas

module.exports = {

    Authorization: function (req, res, next) {

        let token = req.headers['x-access-token'];

        //Verificando a autorização 
        if (!token) {
            return res.status(401).send({ message: 'Unauthorized' });
        }
        return next()
    }
}