const { Atendee } = require('../models');

const getAtendees = async (req, res) =>{
    try {
    let atendees = await Atendee.findAll(
        {
            order: [
            ['createdAt', 'DESC'],
        ],
        attributes: ['id', 'fullName', 'email', 'ticketType', 'createdAt']
        }
    ); 
        if (atendees.length <= 0) {
            return res.status(204).json({
                message: "No se encontraron asistentes"
            });
        }
    res.json({
                message: "Asistentes solicitados exitosamente",
                count: atendees.length,
                data: atendees
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: "Error en la base de datos!"
    });
  }
}

const registerAtendee = async (req, res) => {
    try {
        let { id, fullName, email, ticketType } = req.body || {};

        if (!id || !fullName || !email || !ticketType) {
            return res.status(400).json({ error: 'id, fullName, email y ticketType son requeridos' });
        }
        if (!['Student', 'Professional', 'VIP'].includes(ticketType)) {
            return res.status(406).json({ error: 'ticketType debe ser Student, Professional o VIP' });
        }

        let atendee = await Atendee.create({
            id,
            fullName,
            email,
            ticketType
        });

        res.status(201).json({
            message: "Asistente registrado exitosamente",
            data: atendee
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: "Error en la base de datos!"
        });
    }
};

module.exports = {
    getAtendees,
    registerAtendee
}