import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

class Signature extends Model {}

export const init = async () => { 
  Signature.init({
    name: { type: DataTypes.STRING, unique: true },
    dueDate: DataTypes.DATE,
    cost: DataTypes.DECIMAL,
    imageURL: DataTypes.STRING
  }, { sequelize, modelName: 'signature' });
  await Signature.sync({ force: true });
  console.log("The table for the Signature model was just (re)created!");
}

export default Signature;
