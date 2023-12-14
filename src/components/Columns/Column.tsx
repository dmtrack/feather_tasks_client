import React, { memo } from 'react';

import useGetAllTasks from 'hooks/useGetAllTasks';

import Button from 'components/Button/Button';
import EditText from 'components/EditText/EditText';
import TaskCard from 'components/TaskCard/TaskCard';

import { ColumnData, Task, TaskList } from 'ts/interfaces';

import defaultTheme from 'styles/theme';
import { ColumnContainer, TasksWrapper } from './Columns.style';

interface ColumnProps {
    column: ColumnData;
    isSuccessGetColumnList: boolean;
    isLoadingColumnList: boolean;
    taskList: TaskList;
    setTaskList: React.Dispatch<React.SetStateAction<TaskList>>;
    showCreateTaskPopup: (column: ColumnData) => void;
    editColumnTitle: (title: string, item: ColumnData) => void;
    deleteColumnOnClick: (column: ColumnData) => void;
    showEditPopupOnClick: (task: Task) => void;
    showDeletePopupOnClick: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        task: Task,
    ) => void;
}

function Column({
    column,
    isSuccessGetColumnList,
    isLoadingColumnList,
    taskList,
    setTaskList,
    showCreateTaskPopup,
    editColumnTitle,
    deleteColumnOnClick,
    showEditPopupOnClick,
    showDeletePopupOnClick,
}: ColumnProps) {
    useGetAllTasks(column.userId, column._id, setTaskList);

    return (
        <ColumnContainer>
            <EditText
                item={column}
                isSuccess={isSuccessGetColumnList}
                isLoading={isLoadingColumnList}
                deleteItemOnClick={deleteColumnOnClick}
                editText={editColumnTitle}
            />

            <TasksWrapper>
                {taskList[column._id] &&
                    taskList[column._id].map((task, index) => (
                        <TaskCard
                            key={task._id}
                            task={task}
                            taskIndex={index}
                            showEditPopupOnClick={showEditPopupOnClick}
                            showDeletePopupOnClick={showDeletePopupOnClick}
                        />
                    ))}
            </TasksWrapper>

            <Button
                type="button"
                backgroundColor={defaultTheme.colors.transparent}
                color={defaultTheme.colors.grey}
                callback={() => showCreateTaskPopup(column)}
            >
                Add task
            </Button>
        </ColumnContainer>
    );
}

export default memo(Column);
