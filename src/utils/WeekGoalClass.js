class WeekGoal {
    static tasks = [];
    static habits = [];
    static ID = 0;

    constructor({ name = "", description = "", color = "", headLine = "" }){
        this.name = name;
        this.description = description;
        this.color = color;
        this.headLine = headLine;
    }

    addTaks(task){
        this.tasks.push(task);
    }
    deleteTaks(taskID){
        this.tasks = this.tasks.filter(t => t.id !== taskID);
    }
}

export default WeekGoal;