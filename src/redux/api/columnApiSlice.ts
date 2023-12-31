import { setCreateColumnPopupOpen } from 'redux/slices/columnSlice';
import { RootState } from 'redux/store';

import { addFetchOptions } from 'utils/functions';

import { Endpoints, Methods } from 'ts/enums';
import { ColumnData, Column } from 'ts/interfaces';

import apiSlice from './apiSlice';

type OmitColumnData = Omit<ColumnData, 'title' | 'order'>;

interface ColumnResponse {
    id: string;
    body: Column;
}

interface ColumnOrder {
    _id: string;
    order: number;
}

const columnsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllColumns: builder.query<ColumnData[], string>({
            query: (id) =>
                addFetchOptions(
                    `${Endpoints.users}${id}/${Endpoints.columns}`,
                    Methods.get,
                ),
            onQueryStarted: async (
                _,
                { dispatch, queryFulfilled, getState },
            ) => {
                try {
                    const { isCreateColumnPopupOpen } = (
                        getState() as RootState
                    ).column;
                    await queryFulfilled;
                    if (isCreateColumnPopupOpen) {
                        dispatch(setCreateColumnPopupOpen(false));
                    }
                } catch (error) {
                    if (error instanceof Error) {
                        throw error;
                    }
                }
            },

            providesTags: (result, error, args) => {
                return result
                    ? [
                          ...result.map(({ _id }) => ({
                              type: 'Column' as const,
                              id: _id,
                          })),
                          'Column',
                      ]
                    : ['Column'];
            },
        }),

        createColumn: builder.mutation<ColumnData, ColumnResponse>({
            query: ({ id, body }) => ({
                ...addFetchOptions(
                    `${Endpoints.users}${id}/${Endpoints.columns}`,
                    Methods.post,
                ),
                body,
            }),
            invalidatesTags: ['Column'],
        }),

        deleteColumnById: builder.mutation<ColumnData, ColumnData>({
            query: ({ _id, userId }) =>
                addFetchOptions(
                    `${Endpoints.users}${userId}/${Endpoints.columns}${_id}`,
                    Methods.delete,
                ),
            invalidatesTags: ['Column'],
        }),

        updateColumnById: builder.mutation<ColumnData, ColumnData>({
            query: ({ _id, userId, ...body }) => ({
                ...addFetchOptions(
                    `${Endpoints.users}${userId}/${Endpoints.columns}${_id}`,
                    Methods.put,
                ),
                body,
            }),
            invalidatesTags: ['Column'],
        }),

        getColumnById: builder.query<ColumnData, OmitColumnData>({
            query: ({ _id, userId }) =>
                addFetchOptions(
                    `${Endpoints.users}${userId}/${Endpoints.columns}${_id}`,
                    Methods.get,
                ),
            providesTags: ['Column'],
        }),
    }),
});

export const {
    useGetAllColumnsQuery,
    useCreateColumnMutation,
    useDeleteColumnByIdMutation,
    useUpdateColumnByIdMutation,
    useGetColumnByIdQuery,
} = columnsApiSlice;

const getBaseAllColumns = (state: RootState, id: string) =>
    columnsApiSlice.endpoints.getAllColumns.select(id)(state);

export { getBaseAllColumns };
