import BreakPoints from './BreakPoints';

const MediaQueries = {
  isMobile: `(max-width: ${BreakPoints.desktop})`,
  isDesktop: `(min-width: ${BreakPoints.desktop})`
};

export default MediaQueries;
