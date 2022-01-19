import axios from 'axios';
import { useQuery,  } from 'react-query';
import { AnimalApi } from '../../../stapi';

const useAnimal = (uid: string) => {
    const api = new AnimalApi(undefined, undefined, axios.create());
    const { data, isLoading } = useQuery(["", { uid }], async () => await api.animalGet(uid));

    return {
        data,
        loading: isLoading,
    }
}