import { useCallback, useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useUpdateTaskMutation } from 'redux/api/tasksApiSlice';
import { getEditTaskPopupOpen } from 'redux/selectors/taskSelectors';
import { setEditTaskPopupOpen, setSelectedTask } from 'redux/slices/taskSlice';

import { EditFormValues, Task } from 'ts/interfaces';

import { useAppDispatch, useAppSelector } from './useRedux';

const useEditTask = (selectedTask: Task | null) => {
    const isEditTaskPopupOpen = useAppSelector(getEditTaskPopupOpen);
    const [editTask, { isLoading: isLoadingEditTask }] =
        useUpdateTaskMutation();
    const dispatch = useAppDispatch();

    const showEditPopupOnClick = useCallback((task: Task) => {
        dispatch(setSelectedTask(task));
        dispatch(setEditTaskPopupOpen(true));
    }, []);

    const editTaskOnSubmit: SubmitHandler<EditFormValues> = useCallback(
        async ({ title, description }) => {
            if (selectedTask) {
                const { columnId, userId, order } = selectedTask;
                dispatch(setEditTaskPopupOpen(false));
                await editTask({
                    userId,
                    columnId,
                    id: selectedTask._id,
                    body: {
                        title,
                        description,
                        userId,
                        order,
                    },
                });
                dispatch(setSelectedTask(null));
            }
        },
        [selectedTask],
    );

    useEffect(
        () => () => {
            if (isEditTaskPopupOpen) {
                dispatch(setEditTaskPopupOpen(false));
                dispatch(setSelectedTask(null));
            }
        },
        [],
    );

    return {
        isEditTaskPopupOpen,
        isLoadingEditTask,
        showEditPopupOnClick,
        editTaskOnSubmit,
    };
};

export default useEditTask;
