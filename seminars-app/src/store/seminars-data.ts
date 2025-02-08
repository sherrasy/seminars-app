import { makeAutoObservable, runInAction } from 'mobx';
import { Seminar } from '../types/card.interface';
import { createAPI } from '../services/api';
import { AxiosInstance } from 'axios';

const api: AxiosInstance = createAPI();

class SeminarsStore {
  seminars: Seminar[] | null = null;
  isLoading: boolean = false;
  isPosting: boolean = false;
  hasError: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  fetchSeminars = async () => {
    this.isLoading = true;
    this.hasError = false;
    try {
      const { data } = await api.get('');

      runInAction(() => {
        this.seminars = data;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        this.hasError = true;
      });
      return Promise.reject('Error fetching users');
    }
  };


}

const seminarsStore = new SeminarsStore();
export default seminarsStore;
