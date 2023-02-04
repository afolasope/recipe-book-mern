import axios from 'axios';
import { useMutation } from 'react-query';

const useAddCategoryMutation = () => {
  return useMutation((formPayload) => {
    return axios.post('http://localhost:8000/api/v1/auth/signup', formPayload);
  });
};

export { useAddCategoryMutation };
