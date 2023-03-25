export type Todo = {
    [x: string]: ReactNode;
    userId: number;
    id: number;
    titles: string;
    completed: boolean;
}