import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/AswinBarath/Portfolio-website/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork AswinBarath/Portfolio-website on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/AswinBarath/Portfolio-website"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star AswinBarath/Portfolio-website on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
