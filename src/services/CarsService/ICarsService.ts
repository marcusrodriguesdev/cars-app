export interface GetMarksResponse {
  nome: string;
  codigo: string;
}

export interface ICarsService {
  getMarks(): Promise<GetMarksResponse | null>;

  getModels(mark: string): Promise<GetMarksResponse | null>;
}