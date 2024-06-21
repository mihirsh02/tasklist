# tasklist

Welcome to the tasklist repository! This repository is designed to help you keep track of your tasks and stay organized. 

## Features

- Task creation: Easily create new tasks with a title, description, and due date.
- Task management: Mark tasks as complete, update task details, and delete tasks.
- Task filtering: Filter tasks based on their status (completed, pending) or due date.
- Task prioritization: Assign priority levels to tasks to help you focus on what's important.
- Task reminders: Receive reminders for upcoming tasks to ensure you never miss a deadline.

## Explanation

- Backend: Implements CRUD operations using Express.js and Mongoose with MongoDB. The taskController.js handles all CRUD operations (getAllTasks, createTask, getTaskById, updateTask, deleteTask). Routes are defined in taskRoutes.js and used in app.js to manage API endpoints (/tasks).

- Frontend: Uses React.js for UI components (TaskList, TaskItem, TaskForm). TaskList fetches tasks from the backend (axios), provides filtering options (all, completed, incomplete), and passes down CRUD operations (addTask, updateTask, deleteTask) to child components (TaskItem, TaskForm). TaskItem handles task editing (handleUpdate), deletion (handleDelete), and completion toggling (toggleCompleted). TaskForm handles task creation (handleSubmit).

## Getting Started

To get started with the tasklist application, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/tasklist.git`
2. Install the required dependencies: `npm install`

## Running the Application

1. Start MongoDB: `mongod`
2. Start Backend Server: 
    ```
    cd backend
    node app.js
    ```
3. Start Frontend Server:
    ```
    cd frontend
    npm start
    ```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. 

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

Happy task tracking!
