/**
 * A `ResourceId` is an integer value referencing a resource. It could be
 * considered to be the Deno equivalent of a `file descriptor` in POSIX like
 * operating systems. Elsewhere in the code base it is commonly abbreviated
 * to `rid`.
 */
export type ResourceId = number;

export class ResourceTable {
  resources: Map<ResourceId, any> = new Map();

  /**
   * Adds a resource to the resource table and returns its `rid`.
   */
  add<T = any>(resource: T): ResourceId {
    let rid = this.resources.size;
    this.resources.set(rid, resource);
    return rid;
  }

  take<T = any>(rid: ResourceId): T {
    let resource = this.resources.get(rid);
    if (resource === undefined) {
      throw new Error(`Resource ${rid} not found`);
    }
    this.resources.delete(rid);
    return resource;
  }

  /**
   * Returns a reference of type `T` with the given `rid`.
   * @param rid
   * @returns
   */
  get<T = any>(rid: ResourceId): T {
    let resource = this.resources.get(rid);
    if (resource === undefined) {
      throw new Error(`Resource ${rid} not found`);
    }
    return resource;
  }

  /**
   * Returns true if any resource with the given `rid` exists.
   * @param rid
   * @returns
   */
  has(rid: ResourceId): boolean {
    return this.resources.has(rid);
  }

  /**
   * Replaces a resource with a new resource.
   * Panics if the resource does not exist.
   */
  replace<T = any>(rid: ResourceId, resource: T): void {
    if (!this.resources.has(rid)) {
      throw new Error(`Resource ${rid} not found`);
    }
    this.resources.set(rid, resource);
  }

  /**
   * Removes a resource from the resource table.
   * Panics if the resource does not exist.
   */
  remove(rid: ResourceId): void {
    if (!this.resources.has(rid)) {
      throw new Error(`Resource ${rid} not found`);
    }
    this.resources.delete(rid);
  }
}