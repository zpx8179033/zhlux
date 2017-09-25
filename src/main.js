import {Action, Task} from "../src/baseClass"

(function (global) {
    let debug=true;
    global.zhlux={
        tasks:[],
        registerTask(task){
            this.tasks.push(task);
        },
        dispatcher(oldState, taskName, data){
            let filterTasks=this.tasks.filter(function (item) {
                if(item.name===taskName){
                    item.action(oldState,data);
                }
                return item.action;
            });
            if(!filterTasks instanceof Array){
                console.error('error!param error!')
            }else if(filterTasks instanceof Array&&filterTasks.length===0){
                if(debug){
                    console.log('warning! '+taskName+' has no action !');
                }
            }
        }
    };
})(window);
zhlux.registerTask(new Task('add', new Action(function (oldState, data) {
    console.log({name:oldState.name, age:oldState.age+data});
})));
zhlux.dispatcher({name:'jack',age:15},'add', 2);