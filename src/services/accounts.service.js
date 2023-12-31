const { models } = require('../libs/sequelize');

class AccountsService { 
  
    constructor() {}

    async find() {
      const res = await models.Accounts.findAll({
        where: {
          CNT_ESTADO: true,
        },
      });
      return res;
    }
  
    async findOne(id) {
      const res = await models.Accounts.findByPk(id);
    
      if (res && res.CNT_ESTADO === true) {
        return res;
      } else {
        return null;
      }
    }
    async create(data) {
      const res = await models.Accounts.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      
      if (model) {
        await model.update({ CNT_ESTADO: false });
        return { deleted: true};
      } else {
        return { deleted: false,};
      }
    }

    async findByBank(bank) {
        const accounts = await models.Accounts.findAll({
          where: {
            BNC_BANCO: bank,
            CNT_ESTADO: true,
          },
        });
  
        return accounts;
    }
  
  }
  
  module.exports = AccountsService;