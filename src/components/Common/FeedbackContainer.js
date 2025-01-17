import React from 'react';
import { Badge } from 'reactstrap';

export const FeedbackContainer = ({ hideFeedbackLink }) => (
  <div className="feedback-container">
    <span>Want to improve Community Connect?</span>
    <div className="d-flex justify-content-center">
      <Badge
        className="badge"
        href="https://forms.gle/bA33aBUnEUB7R9wC9"
        target="_new"
        color="primary"
      >
        <span>Submit feedback</span>
      </Badge>
      <Badge className="badge" onClick={hideFeedbackLink} color="light">
        <span>Do it later</span>
      </Badge>
    </div>
  </div>
);
