import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { PhotoType } from '../types';

/* eslint-disable import/no-unused-modules */

type ReturnedData = {
    data?: PhotoType[] | null;
    error?: AxiosError<unknown> | null | unknown;
    loading: boolean;
};

function useAPI() {
    const [state, setState] = useState<ReturnedData>();

    async function call(request: any) {
        setState({ data: null, error: null, loading: false });

        try {
            const { data } = await axios(request);
            setState({ data: Array.isArray(data.photos) ? data.photos : [], loading: true, error: null });
        } catch (error) {
            setState((prevState) => ({ data: prevState?.data, loading: !prevState?.error, error: error }));
        } finally {
            setState((prevState) => ({ data: prevState?.data, loading: false, error: prevState?.error }));
        }
    }

    return { ...state, call };
}

export default useAPI;
