/** The base of all models. */
export abstract class ActiveModel {
  id?: string;
  private misaligned?: boolean;
  /** Perform a shallow copy of the given object own properties.
   * Subclass should invoke super() and then implement deep cloning as needed.
   */
  constructor(object?: any) {
    if (object) {
      for (const key of Object.keys(object)) {
        this[key] = object[key];
      }
    }
  }
  /** Return true if model is being creating else return false */
  isNew(): boolean {
    return !this.id;
  }
  /** Return true if model is saved from backend else return false */
  isPersisted(): boolean {
    return !this.isNew();
  }
  /** Return true if model is saved from backend else return false */
  isAligned(): boolean {
    return this.isPersisted() && !this.misaligned;
  }

  /** Mark the model as not aligned to the backend state */
  markAsMisaligned() {
    this.misaligned = true;
  }
}
