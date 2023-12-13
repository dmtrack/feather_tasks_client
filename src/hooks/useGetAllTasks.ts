import { useEffect } from 'react';

import { useGetAllTasksQuery } from 'redux/api/tasksApiSlice';
import { getAllTasks } from 'redux/selectors/taskSelectors';
import { getLoggedIn } from 'redux/selectors/userSelectors';
import { RootState } from 'redux/store';

import { TaskList } from 'ts/interfaces';

import { useAppSelector } from './useRedux';

const useGetAllTasks = (
    userId: string,
    columnId: string,
    setTaskList: React.Dispatch<React.SetStateAction<TaskList>>,
) => {
    const isLoggedIn = useAppSelector(getLoggedIn);
    const { isSuccess: isSuccessGetAllTasks } = useGetAllTasksQuery(
        { userId, columnId },
        { skip: !isLoggedIn },
    );
    const tasks = useAppSelector((state: RootState) =>
        getAllTasks(state, { userId, columnId }),
    );

    useEffect(() => {
        if (tasks && isSuccessGetAllTasks) {
            setTaskList((prev) => ({
                ...prev,
                [columnId]: tasks,
            }));
        }
    }, [tasks, isSuccessGetAllTasks]);

    return {
        tasks,
        isSuccessGetAllTasks,
    };
};

export default useGetAllTasks;
