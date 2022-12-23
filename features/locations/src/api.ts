import {createApi} from '@reduxjs/toolkit/query/react';
import {BaseQueryWithReauth} from '@toover/redux-toolkit';
import {createQueryString} from '@toover/core';

import {
	AssignToLocationRequest,
	CreateLocationRequest,
	LocationListFilter,
	LocationListResponse,
	LocationResponse,
	UpdateLocationRequest,
} from './models';

export const locationsAPI = createApi({
	reducerPath: 'locations',
	tagTypes: ['Places', 'Items'],
	baseQuery: BaseQueryWithReauth,
	endpoints: (builder) => ({
		getLocations: builder.query<LocationListResponse, LocationListFilter>({
			query(filter: LocationListFilter) {
				if(filter.name && filter.name.length < 3) {
					delete filter.name;
				}
				return `api/places?${(createQueryString(filter))}`;
			},
			providesTags: (result) => {
				return result && result.items
					? [...result.items.map(({ id }) => ({ type: 'Places' as const, id })), 'Places']
					: ['Places'];
			},
		}),

		getLocation: builder.query<LocationResponse, number>({
			query(id: number) {
				return `api/places/${id}`;
			},
		}),

		createLocation: builder.mutation<LocationResponse, CreateLocationRequest>({
			query: (body: CreateLocationRequest) => {
				return {
					url: 'api/places/',
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Places'],
		}),

		updateLocation: builder.mutation<LocationResponse, UpdateLocationRequest>({
			query: (body: UpdateLocationRequest) => {
				const { id, ...rest } = body;
				return {
					url: `api/places/${id}`,
					method: 'PUT',
					body: rest,
				};
			},
			invalidatesTags: ['Places'],
		}),

		deleteLocation: builder.mutation<void, number>({
			query: (body: number) => {
				return {
					url: `api/places/${body}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['Places'],
		}),

		moveItem: builder.mutation<void, AssignToLocationRequest>({
			query: (arg: AssignToLocationRequest) => {
				return {
					url: `api/places/${arg.placeId}/items/${arg.itemId}`,
					method: 'POST',
				};
			},
			invalidatesTags: (result, error, arg) => {
				return ['Places', 'Items', { type: 'Items' as const, id: arg }] as any;
			},
		}),
	}),
});

export const {
	useGetLocationsQuery,
	useGetLocationQuery,
	useCreateLocationMutation,
	useUpdateLocationMutation,
	useDeleteLocationMutation,
	useMoveItemMutation,
} = locationsAPI;
