const EmployeeService = require('../services/emplloyee.service');

const getAll = async (req, res) => {
  try {
    const employees = await EmployeeService.getAll();
    res.status(200).json(employees);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAll,
};