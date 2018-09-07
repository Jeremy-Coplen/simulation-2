module.exports = {
    readAll: (req, res, next) => {
        const db = req.app.get("db")

        db.getAllHouses()
        .then(houses => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went wrong"})
            console.log(err)
        })
    },

    create: (req, res, next) => {
        const db = req.app.get("db")
        const house = req.body

        db.createHouse(house)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went wrong"})
            console.log(err)
        })
    },

    update: (req, res, next) => {
        const db = req.app.get("db")
        const {params, query} = req

        db.updateHouse({id: params.id, name: query.name, address: query.address, city: query.city, state: query.state, zipcode: query.zipcode})
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went wrong"})
            console.log(err)
        })
    },

    delete: (req, res, next) => {
        const db = req.app.get("db")
        const {params} = req

        db.deleteHouse({id: params.id})
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went wrong"})
            console.log(err)
        })
    }
}