import { clientCars } from '../client';
import { GetMarksResponse, ICarsService } from './ICarsService';

class CarsService implements ICarsService {
  async getMarks(): Promise<GetMarksResponse | null> {
    try {
      const response = await clientCars.get('');
      return response.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getModels(mark: string): Promise<GetMarksResponse | null> {
    try {
      const response = await clientCars.get(`/${mark}/modelos`);
      return response.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export { CarsService };
