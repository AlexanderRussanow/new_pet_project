import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileType } from '../../types/ProfileTypes';

export const fetchProfileData = createAsyncThunk<ProfileType, string, ThunkConfig<string>>(
    'fetchProfileData',
    async ( profileId, { rejectWithValue, extra } ) => {
        try {
            const response = await extra.api.get<ProfileType>( '/profile/' + profileId );
            if ( !response.data ) {
                throw new Error( 'No data' );
            }
            return response.data;
        } catch ( error ) {
            return rejectWithValue( 'Wrong email or password' );
        }
    }
);
