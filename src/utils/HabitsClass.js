class Habits {
    static dayStatus = [];
    static ID = 0;

    constructor({ name, scheduleTime }){
        this.name = name;
        this.scheduleTime = scheduleTime;
    }

    addStatus({ status = false, date = new Date().getDay(), usedTime = "", executionTime = {} }){
        this.dayStatus.push({
            date,
            status,
            usedTime,
            executionTime,
        });
    }
    modifyStatus(modifiedHabit){
        const indexHabit = this.dayStatus.findIndex(h => h.date === modifiedHabit.date);
        this.dayStatus[indexHabit] = {...modifiedHabit};
    }

    get status(){
        return this.dayStatus;
    }
}

export default Habits;