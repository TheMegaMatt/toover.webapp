import { BaseModel, ListResponse, Response } from '@toover/core';

export interface CreateLocationRequest {
	name: string;
}

export interface Location extends BaseModel {
	name: string;
}

export type LocationListResponse = ListResponse<Location>;
export type LocationResponse = Response<Location>;

export type LocationListFilter = { name?: string };

export interface UpdateLocationRequest {
	id: number;
	name: string;
}

export interface AssignToLocationRequest {
	placeId: number;
	itemId: number;
}

export type LocationFormValues = Omit<Location, 'id'>;
