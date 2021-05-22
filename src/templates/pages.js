/*    LIBRARIES    */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/*    STYLES    */
import "../styles/index.sass";

/*    COMPONTENTS AND UTILS    */
import pageActiveChange from "../redux/actions/pageActiveChange";

const PageLayout = ({ children, active, pageActiveChange }) => {
  
  pageActiveChange(active);

  return (
    <Fragment>
      <main className="container">{children}</main>
    </Fragment>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
};

PageLayout.defaultProps = {
  active: "",
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  pageActiveChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);
