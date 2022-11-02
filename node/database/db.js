import {Sequelize} from 'sequelize'

const db = new Sequelize('pasteleria_piccolo','root','#Ginebraencasa23',{
    host:'127.0.0.1',
    dialect: 'mysql',
    define: {
        timestamps: false,
        underscored: false,
        freezeTableName: true
      },
})

export default db

