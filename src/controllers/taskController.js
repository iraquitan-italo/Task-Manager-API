const connection = require('../config/db');
const { v4: uuidv4 } = require('uuid');

exports.getTasks = (req, res) => {

    const sql = 'SELECT * FROM tasks';

    connection.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar tarefas' });
        }

        res.status(200).json(results);
    });
};

exports.createTask = (req, res) => {

    const { titulo, status } = req.body;
    const newTask = {
        id: uuidv4(),
        titulo,
        status
    };

    const sql = 'INSERT INTO TASKS (id, titulo, status) VALUES (?, ?, ?)';

    connection.query(
        sql, 
        [newTask.id, newTask.titulo, newTask.status], (err) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao criar tarefa' });
            }
            res.status(201).json(newTask);
        }
    );
};

exports.updateTask = (req, res) => {
    const {titulo, status} = req.body;
    const sql = 'UPDATE tasks SET titulo = ?, status = ? WHERE id = ?';

    connection.query(
        sql,
         [titulo, status, req.params.id], (err, results) => {

        if (err) {
            return res.status(500).json({ error: 'Erro ao atualizar tarefa' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }

        res.status(200).json({ message: 'Tarefa atualizada com sucesso' });
    });
};

exports.deleteTask = (req, res) => {

    const sql = 'DELETE FROM tasks WHERE id = ?';

    connection.query(
        sql, 
        [req.params.id], (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao deletar tarefa' });
            }

            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Tarefa não encontrada' });
            }

            res.status(200).json({ message: 'Tarefa deletada com sucesso' });
        }
    );
};
