export const filterActives = (allTask) => {
    return allTask.filter((task) => task.status === "active");
};

export const filterCompleteds = (allTask) => {
    return allTask.filter((task) => task.status === "completed");
};

export const filterOthers = (allTask) => {
    return allTask.filter(
        (task) => !["active", "completed"].includes(task.status)
    );
};
