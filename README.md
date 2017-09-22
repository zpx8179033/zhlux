# zhlux
simple flux


'use strict';
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
(function (global) {
    let status={
        currentIndex:0
    };
    let zhlux={
        tasks:[],
        registerTask(task){
            this.tasks.push(task);
        },
        dispatcher(taskName, data){
            let filterTasks=this.tasks.filter(function (item) {
                if(item.name===taskName){
                    item.action(data);
                }
            })
        }
    };


    global.zhlux=zhlux;
})(window);
zhlux.registerTask(new Task('add', new Action(function (data) {
    console.log(++data);
})));
zhlux.dispatcher('add', 2);
