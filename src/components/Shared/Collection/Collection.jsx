import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import CollectionItemLoader from './CollectionItemLoader';
import DefaultCollectionItem from './DefaultCollectionItem';
import CollectionSeeMore from './CollectionSeeMore';

import constants from '../../ReactConstants';

const Ul = styled.ul`
  border-radius: ${constants.borderRadius};

  .see-more {
    text-align: center;
    color: ${constants.proceedFontColor};
    &:hover {
      cursor: pointer;
      background: ${constants.alternateHoverColor};
  }
  }
`;


class Collection extends React.Component {
    state = { }

    render() {
      const {
        isLoading, hasMoreData, seeMoreHandler, children,
      } = this.props;
      return (
        <Ul className="collection">

          {
            children || children.length > 0
              ? children
              : (<DefaultCollectionItem />)
          }

          { isLoading
            ? <CollectionItemLoader />
            : null
          }
          { !isLoading && hasMoreData
            // eslint-disable-next-line no-console
            ? <CollectionSeeMore onClick={seeMoreHandler} />
            : null
        }
        </Ul>
      );
    }
}

Collection.defaultProps = {
  isLoading: false,
  hasMoreData: false,
  seeMoreHandler: () => {},
  children: null,
};

Collection.propTypes = {
  isLoading: propTypes.bool,
  hasMoreData: propTypes.bool,
  seeMoreHandler: propTypes.func,
  children: propTypes.node,
};

export default Collection;
