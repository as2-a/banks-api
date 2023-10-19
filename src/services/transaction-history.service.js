const { models } = require('../libs/sequelize');
const { Op } = require('sequelize');

class TransactionHistoryService { 
  
    constructor() {}

    async find() {
      const res = await models.ViewTransactionHistory.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.ViewTransactionHistory.findByPk(id);
      return res;
    }

    async findByDate(initDate, endDate) {
      const res = await models.ViewTransactionHistory.findAll({
        where: {
          fecha: {
            [Op.between]: [initDate, endDate],
          },
        },
      });
      return res;
    }

    async create(data) {
      const res = await models.ViewTransactionHistory.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      await model.destroy();
      return { deleted: true };
    }
  
  }
  
  module.exports = TransactionHistoryService;