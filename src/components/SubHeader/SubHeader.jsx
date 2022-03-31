import { Col, Row, Button } from 'react-bootstrap';

import './styles.scss';

const SubHeader = ({ children }) => {
  return (
    <div className="mt-4" id="sub-header">
      {children}
    </div>
  );
};

export default SubHeader;
