const { Task } = require("../models");
const createError = require ("http-errors")

module.exports.createTask = async (req, res, next) => {
  try {
    const {
      body,
      instanceUser,
    } = req;
    const task = await instanceUser.createTask(body );
    res.status(201).send({ data: task });
  } catch (error) {
    next(error);
  }
};


module.exports.getTasksByUser = async (req, res, next) => {
  try {
    const {
      instanceUser,
    } = req;
   const tasks = await instanceUser.getTasks()
    
    res.status(200).send({ data: tasks });
  } catch (error) {
    next(error);
  }
};

// Updated Task

module.exports.updateTaskInstance = async (req, res, next) => {
  try {
    const {
      instanceTask, body
    } = req;
   
    const updatedTask = await instanceTask.update(body,{returning:true});
    
    res.status(200).send({ data: updatedTask});
  } catch (error) {
    next(error);
  }
};



//Deleted Task

module.exports.deleteTaskById = async (req, res, next) => {
  try {
    const { instanceTask } = req;

    await instanceTask.destroy();
    res.status(200).send({ data: instanceTask });
  } catch (error) {
    next(error);
  }
};


module.exports.getAllTasks= async (req, res, next) => {
  try {
    const {
      pagination ={}
    } = req;
if(!tasks){
  next(createError(404, 'Task not found'))
}
   
    const tasks = await Task.findAll({...pagination});
    
    res.status(200).send({ data: tasks});
  } catch (error) {
    next(error);
  }
};