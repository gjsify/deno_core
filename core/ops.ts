import { ResourceTable } from "./resources.ts";

// TODO move to right place, maybe ./packages/deno/runtime-2/src/runtime/ops/permissions.rs ?
class Permissions {
  checkNetUrl(url: string, apiName: string): boolean {
    return true;
  }
}

class OpState {
  public resourceTable = new ResourceTable();
  public permissions = new Permissions();
}
  
export const state = new OpState();
  