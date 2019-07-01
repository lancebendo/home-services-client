import React from 'react';
import propTypes from 'prop-types';

const CollectionSeeMore = ({ onClick: clickHandler }) => (
  <li
    className="collection-item see-more waves-effect waves-block"
    onClick={clickHandler}
  >
    <span className="noselect">
              See more
    </span>
  </li>
);

CollectionSeeMore.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default CollectionSeeMore;
