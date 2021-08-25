import React, { Component } from 'react';
import {Button, ButtonGroup, Container, Table} from "reactstrap";
import {Link} from "react-router-dom";
import AppNavBar from "../AppNavBar";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        fetch('/todos')
            .then(response => response.json())
            .then(data => this.setState({todos: data}));
    }

    async remove(id) {
        await fetch(`/todos/${id}`, {
            method: 'DELETE'
        }).then(() => {
            let updatedTodos = [...this.state.todos].filter(i => i.id !== id);
            this.setState({todos: updatedTodos});
        });
    }

    render() {
        const {todos} = this.state;

        const todoList = todos.map(todo => {
            return <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/todos/" + todo.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(todo.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavBar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/todos/new">Add Todo</Button>
                    </div>
                    <h3>Todos</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="60%">Description</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todoList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }

}
export default TodoList;
