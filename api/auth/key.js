//Midleware responsável para inserir chave de acesso no cabeçalho 

module.exports = {

    Key: function (req, res, next) {

        //Pegando o valor da chave no arquivo .env
        const key = process.env.WEBSERVICE_KEY

        //Passando a chave no header
        req.headers['x-access-token'] = key;
        req.headers.authorization = key;
        
        return next()

    }

}