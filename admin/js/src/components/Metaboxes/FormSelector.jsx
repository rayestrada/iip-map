import React from 'react';
import { func, string } from 'prop-types';

import { capitalize } from '../../utils/texttransforms';

const FormSelector = ( {
  formType, getFields, projectId, selectView, setId
} ) => (
  <div className="iip-map-admin-screendoor-project-container" id={ `${formType}-project-selector` }>
    <form className="iip-map-admin-project-form">
      <label className="iip-map-admin-label" htmlFor={ `${formType}-project-id` }>
        { capitalize( formType ) }
        { ' Project ID:' }
        <input
          className="iip-map-admin-project-input"
          id={ `${formType}-project-id` }
          name={ `${formType}-project-id` }
          onChange={ setId }
          type="text"
          value={ projectId }
        />
      </label>

      <button
        className="button button-primary button-large"
        id={ `iip-map-select-${formType}-project` }
        onClick={ getFields }
        type="button"
      >
        Select This Project
      </button>
    </form>

    <button
      className="button button-large iip-map-admin-modal-button"
      id={ `iip-map-${formType}-mappings` }
      onClick={ () => { selectView( 'mapper' ); } }
      type="button"
      value="mapper"
    >
      Show Field Mappings
    </button>

    <button
      className="button button-large iip-map-admin-modal-button"
      id={ `iip-map-${formType}-card-config` }
      onClick={ () => { selectView( 'card' ); } }
      type="button"
      value="card"
    >
      Configure Map Info Cards
    </button>
  </div>
);

FormSelector.propTypes = {
  formType: string,
  getFields: func,
  projectId: string,
  selectView: func,
  setId: func
};

export default FormSelector;
