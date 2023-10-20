const TransactionHistoryService = require("../services/transaction-history.service");
const service = new TransactionHistoryService();

const create = async (req, res) => {
  try {
    const response = await service.create(req.body);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const get = async (req, res) => {
  try {
    const response = await service.find();
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.findOne(id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getByDate = async (req, res) => {
  try {
    const { initDate, endDate, account } = req.params;
    const response = await service.findByDateAndAccount(account,initDate, endDate);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getByAccounts = async (req, res) => {
  try {
    const response = await service.findTenByAccounts(req.body);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const response = await service.update(id, body);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const _delete = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getTransactionsByParams = async (req, res) => {
  try {
  const { account = null, bank = null, initDate = null, endDate = null } = req.query;
  const response = await service.findByDateOrAccountOrBank(account, bank, initDate, endDate);
  res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
}

module.exports = {
  create,
  get,
  getById,
  update,
  _delete,
  getByDate,
  getByAccounts,
  getTransactionsByParams
};
