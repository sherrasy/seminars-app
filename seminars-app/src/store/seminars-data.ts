import { makeAutoObservable, runInAction } from 'mobx';
import { Seminar } from '../types/seminar.interface';
import { createAPI } from '../services/api';
import { AxiosInstance } from 'axios';
import { UpdateSeminarDto } from '../dto/update-seminar.dto';

const api: AxiosInstance = createAPI();

class SeminarsStore {
  seminars: Seminar[] | null = null;
  seminarId: number | null = null;
  isLoading: boolean = false;
  isPosting: boolean = false;
  hasLoadingError: boolean = false;
  hasError: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  setSeminarId = (id?: number) => {
    id ? (this.seminarId = id) : (this.seminarId = null);
  };

  getCurrentSeminar = () => {
    if(this.seminars && this.seminarId){
      const currentSeminar = this.seminars.find((seminar) => seminar.id === this.seminarId);;
      return currentSeminar || null;
    }
    return null;
  };

  fetchSeminars = async () => {
    this.isLoading = true;
    this.hasLoadingError = false;
    try {
      const { data } = await api.get('');

      runInAction(() => {
        this.seminars = data;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        this.hasLoadingError = true;
      });
      return Promise.reject('Error fetching users');
    }
  };

  deleteSeminar = async () => {
    this.isPosting = true;
    this.hasError = false;
    try {
      await api.delete(`/${this.seminarId}`);
      runInAction(() => {
        if (this.seminars) {
          this.seminars = this.seminars.filter((seminar) => seminar.id !== this.seminarId);
        }
        this.isPosting = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isPosting = false;
        this.hasError = true;
      });
      return Promise.reject('Error deleting seminar');
    }
  };

  updateSeminar = async (dto:UpdateSeminarDto) => {
    this.isPosting = true;
    this.hasError = false;
    try {
      const { data } = await api.patch(`/${this.seminarId}`, dto);
      runInAction(() => {
        if (this.seminars) {
          const seminarIndex = this.seminars.findIndex(
            (item) => item.id === data.id
          );
          this.seminars[seminarIndex] = {...data};
        }
        this.isPosting = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isPosting = false;
        this.hasError = true;
      });
      return Promise.reject('Error updating seminar');
    }
  };
}

const seminarsStore = new SeminarsStore();
export default seminarsStore;
