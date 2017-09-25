import { Action, Task } from "../src/baseClass";

(function (global) {
    let status = {
        currentIndex: 0
    };
    global.zhlux = {
        tasks: [],
        registerTask(task) {
            this.tasks.push(task);
        },
        dispatcher(taskName, data) {
            let filterTasks = this.tasks.filter(function (item) {
                if (item.name === taskName) {
                    item.action(data);
                }
            });
        }
    };
})(window);
zhlux.registerTask(new Task('add', new Action(function (data) {
    console.log(++data);
})));
zhlux.dispatcher('add', 2);

//# sourceMappingURL=main-compiled.js.map