//Midleware responsável para verificar a autorização das rotas

module.exports = {

    Authorization: function (req, res, next) {

        const token = req.headers.authorization;

        //Verificando a autorização 
        if (!token) {
            return res.status(401).send({ message: 'Unauthorized' });
        }

        return next()
    }
}