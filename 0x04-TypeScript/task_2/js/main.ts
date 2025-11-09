// Define minimal shapes for Director and Teacher
export interface Director {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

export interface Teacher {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

// Type predicate that checks whether an employee is a Director
export function isDirector(employee: Director | Teacher): employee is Director {
	// A Director has the method workDirectorTasks
	return (employee as Director).workDirectorTasks !== undefined;
}

// Execute the appropriate work function depending on employee role
export function executeWork(employee: Director | Teacher): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	}
	return employee.workTeacherTasks();
}
