import {Sequelize} from 'sequelize'

const db = new Sequelize('pasteleria_piccolo','root','#Ginebraencasa23',{
    host:'10.147.18.132',
    dialect: 'mysql',
    define: {
        timestamps: false,
        underscored: false,
        freezeTableName: true
      },
})

export default db

