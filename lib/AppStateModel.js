var {BaseModel} = require('@ucd-lib/cork-app-utils');


/**
 * Controller for handling various states of the application.
 * This includes current catalog and page and if we are editing a mark.
 */
class AppStateModel extends BaseModel {

  constructor() {
    super();
    this.register('AppStateModel');
  }

  /**
   * Get the current redux appState
   * @returns {Object} appState
   */
  async get() {
    return this.store.data;
  }

  /**
   * Update the app state
   * @returns {Object} update - keys to be updated
   */
  set(update) {
    this.store.set(update);
    return this.get();
  }
}

module.exports = AppStateModel;