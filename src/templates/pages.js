/*    LIBRARIES    */
import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

/*    STYLES    */
import '../styles/index.sass'

/*    COMPONTENTS AND UTILS    */
import { DataContext } from '../states/context'

export default class PageLayout extends Component {
  static contextType = DataContext

  componentDidMount() {
    const { setPageActive } = this.context
    setPageActive(this.props.active)
  }

  render() {
    return (
      <Fragment>
        <main className="container">{this.props.children}</main>
      </Fragment>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
}

PageLayout.defaultProps = {
  active: 'none',
}
