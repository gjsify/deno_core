import { ResourceTable } from "./resources.ts";

class OpState {
  resource_table = new ResourceTable();
}
  
export const state = new OpState();
  