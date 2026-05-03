const model = require("../modes/game.models");

module.exports.count = async ( req , res ) => {
    const resultados = await model.count();
    res.status[200].json({ total : resultados });
};