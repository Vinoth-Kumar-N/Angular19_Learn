export interface Todo {
    Todo_id: number;
    Title: string;
    Completed: boolean;
    CreatedAt: Date;
    CompletedAt?: Date; // Optional, as it may not be set if the task is not completed
}
