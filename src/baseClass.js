class Action{
    constructor(fn){
        this.exe=fn;
        return this.exe;
    }
}

class Task{
    constructor(name='', action=new Action()){
        this.name=name;
        this.action=action;
    }
}
export {
    Action,
    Task
}
