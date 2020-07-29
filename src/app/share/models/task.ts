export class Task {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    editedAt: string;

    constructor(value = {} as Task) {
        this.id = value.id;
        this.name = value.name;
        this.description = value.description;
        this.createdAt = value.createdAt;
        this.editedAt = value.editedAt;
    }
}