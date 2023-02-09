class GoalsList {
    goals = [];

    addGoal(goal = {}){
        this.goals.push(goal);
    }
    modifyGoal(modifiedGoal = {}){
        const indexGoal = this.goals.findIndex(g => g.name === modifiedGoal.name);
        this.goals[indexGoal] = {...modifiedGoal};
    }
    deleteGoal(name = ""){
        this.goals = this.goals.filter(g => g.name !== name);
    }

    get list(){
        return this.goals;
    }
}

export default GoalsList;