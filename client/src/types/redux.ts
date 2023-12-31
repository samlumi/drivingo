import { BlogConfigType } from "./config";

export interface LandingAction {
  type: string;
  payload: number;
};

export interface BlogAction {
  type: string;
  payload: {
    limit?: number;
    page?: number;
    total?: number;
    blogs?: BlogConfigType[];
    blog?: BlogConfigType;
  }
  error?: Error;
}