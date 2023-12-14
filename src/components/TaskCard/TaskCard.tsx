import React, { memo } from 'react';

import { Task } from 'ts/interfaces';

import {
    StyledTask,
    TaskHeader,
    TaskTitle,
    StyledRemoveIcon,
    TaskDescription,
    TaskButton,
    TaskDescriptionWrapper,
} from './TaskCard.style';

interface TasksCardProps {
    task: Task;
    taskIndex: number;
    showEditPopupOnClick: (task: Task) => void;
    showDeletePopupOnClick: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        task: Task,
    ) => void;
}

function TaskCard({
    task,
    taskIndex,
    showEditPopupOnClick,
    showDeletePopupOnClick,
}: TasksCardProps) {
    return (
        <StyledTask key={task._id}>
            <TaskHeader>
                <TaskTitle onClick={() => showEditPopupOnClick(task)}>
                    {task.title}
                </TaskTitle>
                <TaskButton
                    onClick={(event) => showDeletePopupOnClick(event, task)}
                >
                    <StyledRemoveIcon />
                </TaskButton>
            </TaskHeader>
            <TaskDescriptionWrapper>
                <TaskDescription>{task.description}</TaskDescription>
            </TaskDescriptionWrapper>
        </StyledTask>
    );
}

export default memo(TaskCard);
