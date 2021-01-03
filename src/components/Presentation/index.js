import PropTypes from "prop-types"
import React from "react"

import './styles.scss';

const Presentation = ({ text }) => (
  <section className="presentation">
    <img alt="Sakura" src="../../images/favicon.png" className="presentation-img" />
    <div className="presentation-text">
      {text}
    </div>
  </section>
)

Presentation.propTypes = {
  text: PropTypes.string,
}

Presentation.defaultProps = {
  text: ``,
}

export default Presentation;
